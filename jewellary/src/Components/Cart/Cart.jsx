import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../redux/cartSlice/cartSlice';
import { Link, useParams } from "react-router-dom"
import StripeCheckout from "react-stripe-checkout"
import { toast } from 'react-toastify'
import loadinggif from "../../images/threedotsloading.gif"
import { deletecart, fetchcart, loginuser, orders, payments } from '../../https/axios';
import Navigation from '../Homeui/Navigation/Navigation';
import Footer from '../Homeui/Footer/Footer';
import style from '../Cart/Cart.module.css'

export default function Cart() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart)
    const [ucart, setUcart] = useState()
    const [name, setName] = useState('')
    const [remount, setRemount] = useState(1)
    const [product, setProduct] = useState()
    const [discount, setDiscount] = useState('')
    const [total, setTotal] = useState('')
    const [userinfo, setUserinfo] = useState('')
    const [totalamount, setTotalamount] = useState('')
    const [PaymentType, setPaymentType] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const userdata = await loginuser()
            setLoading(false)
            if (userdata) {
                setUserinfo(userdata.data)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        async function fetchData() {
            const data = await fetchcart()
            setLoading(false)
            setUcart(data.data.cartdata)
        }
        fetchData()
    }, [remount])

    useEffect(() => {
        if (ucart) {
            let totalPrice = 0;
            for (let index = 0; index < ucart.length; index++) {
                var tprice = ucart[index].product.price
                totalPrice = totalPrice + tprice
            }
            setTotalamount(totalPrice)
            setTotal(totalPrice)
        }
    }, [ucart])


    const removeitem = async (id, productId) => {
        dispatch(remove(productId))
        const cart = await deletecart(id);
        if (cart) {
            setUcart(cart.data.data)
            toast("Product Removed From Cart", { theme: "dark", type: "warning" })
        }
    }
    const sendData = async () => {
        for (let index = 0; index < ucart.length; index++) {
            let uid = ucart[index].userId._id
            let pid = ucart[index].product._id
            let cartid = ucart[index]._id
            const data = await orders({ uid, pid, cartid, PaymentType, totalamount })
            toast("Order Palced Sucessfully", { theme: "dark", type: "success" })
        }
    }
    const selecttype = (e) => {
        console.log(e)
        setPaymentType(e)
    }
    async function handletoken(token, addresses) {
        var Paymentstatus = true;
        for (let index = 0; index < ucart.length; index++) {
            let pid = ucart[index].product._id
            let uid = ucart[index].userId._id
            let cartid = ucart[index]._id
            const data = await orders({ pid, uid, cartid, PaymentType, totalamount, Paymentstatus })
        }
        toast("order placed successfully", { theme: "dark", type: "success" })
        setRemount(2)
        console.log({ token, addresses })
        const pay = await payments({ token, ucart })
        const { status } = pay.data
        console.log(status)
    }

    return (
        <div>
            <Navigation />
            {
                ucart && ucart.length != 0 ?
                    <div className={`row ${style.res} m-0`}>
                        <div className={`my-5 p-3 col-sm-12 col-lg-8 col-md-12 ${style.carts} col-sm-12`}>
                            <h3>CART:</h3>
                            {
                                loading === false ? ucart !== undefined && ucart.map((data) =>
                                    <div className=' m-3'>
                                        <table className='table'>
                                            <tr>
                                                <th className='text-center'>ITEM(S)</th>
                                                <th className='text-center'>Details</th>
                                                <th className='text-center'>QUANTITY</th>
                                                <th className='text-center'>TOTAL</th>
                                            </tr>
                                            <tr>
                                                <td> <img src={`/${data.product.img}`} className="card-img-top" style={{ width: "200px" }} alt="" /></td>
                                                <td className='text-center'>
                                                    <h5 className='px-3'>{data.product.productid}</h5>
                                                    <h5 className='px-3'>{data.product.productname}</h5>
                                                </td>
                                                <td className='text-center'><h4>1</h4>
                                                    <button className='btn-warning' onClick={() => removeitem(data._id)}>Remove</button>
                                                </td>
                                                <td className='text-center'>
                                                    <h5 className='px-3'>{data.product.price}</h5>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                ) :
                                    <div className='d-flex justify-content-center'>
                                        <img src={loadinggif} alt="not found" className='w-25' />
                                    </div>
                            }
                        </div>
                        <div className='mt-5 col-sm-12 col-lg-4 col-md-12  col-sm-12  px-0'>
                            <div>
                                <h3>ORDER SUMMARY</h3>
                                <div className='mt-5 py-3 text-white' style={{ backgroundColor: "black" }}>
                                    <h5 className='m-1'>ORDER DETAILS</h5>
                                </div>
                                <div className='mt-3'>
                                    <div className='row my-1 mx-2 justify-content-between'>
                                        <h6 className=''>ORDER TOTAL</h6>
                                        <div className='px-2 h5 d-flex flex-wrap'><strong> ₹{totalamount}</strong></div>
                                    </div>

                                    <div className='row my-1 mx-2 justify-content-between'>
                                        <h6 className=''>SHIPPING</h6>
                                        <div className='px-2 h5 d-flex flex-wrap'><strong>FREE</strong></div>
                                    </div>
                                    <div className='row my-2 mx-2 justify-content-between '>
                                        <h5 className=''><strong>YOU PAY</strong></h5>
                                        <div className='px-2 h5 d-flex flex-wrap'><strong>₹ {totalamount}</strong></div>
                                    </div>
                                    <div>
                                        <h6 className='px-2 h5 d-flex flex-wrap'>INCLUSIVE OF ALL TAXES*</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='mt-3 py-3 text-white' style={{ backgroundColor: "black" }}>
                                    <h5 className='m-1'>CUSTOMER DETAILS</h5>
                                </div>
                                <div className='d-flex align-items-center  my-2 mx-2'>
                                    <h6 className='' >NAME:</h6>
                                    <div className='px-2 h5 d-flex flex-wrap'>{userinfo.firstname}{userinfo.lastname}</div>
                                </div>
                                <div className='row my-2 mx-2'>
                                    <h6 > MOBILE NO:</h6>
                                    <div className='px-2 h5 d-flex flex-wrap'>{userinfo.mobile}</div>
                                </div>
                                <div className='row my-2 mx-2'>
                                    <h6 >ADDRESS:</h6>
                                    <div className='px-2 h5 d-flex flex-wrap'>{userinfo.address}</div>
                                </div>
                                <div className='bg-white'>
                                    <div className="accordion-body">
                                        <div className='mt-3 py-3 text-white' style={{ backgroundColor: "black" }}>
                                            <h5 className='m-1'>Select One Method to process</h5>
                                        </div>
                                        <div className='container'>
                                            <div className="form-check mt-4 d-flex">
                                                <input className="form-check-input" type="radio" value="COD" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => selecttype(e.target.value)} />
                                                <label className="form-check-label mx-1" htmlFor="flexRadioDefault1">
                                                    Cash on Delivery
                                                </label>
                                            </div>
                                            <div className="form-check mt-1 d-flex ">
                                                <div className='d-flex '>
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" value="Card" id="flexRadioDefault2" onChange={(e) => selecttype(e.target.value)} />
                                                    <label className="form-check-label mx-1" htmlFor="flexRadioDefault2" >
                                                        Credit and Debit card
                                                    </label>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div className=''><br />
                                                    {
                                                        PaymentType == "Card" ?
                                                            <StripeCheckout
                                                                stripeKey="pk_test_51KnyReSDCz2BE6zEMvc3yxS1J6ICmcvwXPwI3aoXJUd8IHsXTkrPYDfR81rRM6lfyWXscBJqEskbzOBF6EJDddUE00ba81M5O9"
                                                                token={handletoken}
                                                                name="Buy React"
                                                                amount={totalamount * 100}
                                                                currency='inr'
                                                                onClick={sendData}

                                                            >
                                                            </StripeCheckout>
                                                            : <button className='btn btn-dark' onClick={sendData}>Place Order</button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    :
                    <Link to="/" className='text-center m-5 '><h1>Something Order now!</h1></Link>
            }

            <Footer />
        </div >
    )
}
