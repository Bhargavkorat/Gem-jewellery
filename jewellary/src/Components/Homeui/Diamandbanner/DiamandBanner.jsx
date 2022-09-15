import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addtofav, product,  } from '../../../https/axios'
import { add } from '../../../redux/cartSlice/cartSlice'
import loadinggif from "../../../images/threedotsloading.gif"
import { useDispatch } from 'react-redux'


export default function DiamandBanner() {
    const [products, setProducts] = useState('')
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {
        async function fetchProduct() {
            const soemthing = await product()
            setLoading(false)
            setProducts(soemthing.data)
        }
        fetchProduct()
    }, [])
    const addtocardid = async (id, product) => {
        dispatch(add(product))
        const cart = await addtofav(id);
        if (cart) {
            toast("Product Added To Cart", { theme: "dark", type: "success" })
        }
    }
    const wishlist = async (id, product) => {
        const cart = await (id);
        if (cart) {
            toast("Product Added To Cart", { theme: "dark", type: "success" })
        }
    }
    return (
        <div>
            <div>
                <section className="m-100 dimond-banner">
                    <div className="container">
                        <div className="">
                            <h5 className="f-45 f-t yellow">Great Collection of Dimond Jewellary</h5>
                            <p className="text-white f-14 my-2 mb-4">jewellery may be made from a wide range of materials. Gemstones and
                                similar<br />
                                materials such as amber and coral, precious metals, beads, and shells have been widely<br />
                                used, and enamel has often been important. In most cultures jewellery can be<br />
                                understood as a status symbol,</p>
                            <Link to="/casual" className="btn btn-warning f-14">View Collection</Link>
                        </div>
                    </div>
                </section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/" className="btn btn-block text-white dark-bg f-h f-20 f-b my-2">SPECIAL REQUIRNMENT</Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="/" className="btn btn-block text-white dark-bg f-h f-20 f-b my-2">FREE DESIGN</Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="/" className="btn btn-block text-white dark-bg f-h f-20 f-b my-2">OUR PAKAGES</Link>
                        </div>
                    </div>
                </div>
                <section className="m-100">
                    <div className="container">
                        <div className="title d-flex flex-column align-items-center">
                            <div className="f-t f-55 text-center">Trending Collaction</div>
                            <img src="images/title.png" alt="" className="title-img" />
                        </div>
                        <div className="row owl-carousel owl-theme" id="product">

                        </div>
                        <div className='d-flex flex-wrap'>
                            {
                                loading === false ? products && products.slice(0, 4).map((data) =>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <div className="card">
                                            <Link to={`/productdetails/${data._id}`}>
                                                <img src={`/${data.img}`} className="card-img-top px-4 py-5" />
                                                <div className="card-body text-center">
                                                    <h5 className="card-title f-14 mb-1 text-dark">{data.productname}</h5>
                                                    <p className="card-text f-16 f-b mb-1 text-dark">{data.price}</p>
                                                    <button onClick={() => addtocardid(data._id, data)} className="btn btn-warning f-14">Add to Cart</button>
                                                    <button onClick={() => wishlist(data._id, data)} className="btn btn-outline-warning f-14 i-s ml-2"></button>

                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ) :
                                    <div className='col-12 d-flex justify-content-center'>
                                        <img src={loadinggif} className="justify-content-center" style={{width:"80px"}} alt="not found" />
                                 </div>
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
