import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom"
import Navigation from '../../Homeui/Navigation/Navigation';
import Footer from '../../Homeui/Footer/Footer';
import { addtofav, deletewishlists, fetchwishlistes } from '../../../https/axios';
import { add } from '../../../redux/cartSlice/cartSlice';
import style from '../Mywishlist/Mywishlist.module.css'

export default function Mywishlist() {
    const dispatch = useDispatch();
    const [mywishlists, setMywishlists] = useState('')

    const removeitem = async (id, productId) => {
        const cart = await deletewishlists(id);
        if (cart) {
            setMywishlists(cart.data.data)
            toast("Product Removed From wishlist", { theme: "dark", type: "warning" })
        }
    }
    const addtocardid = async (id, product) => {
        dispatch(add(product))
        const cart = await addtofav(id);
        if (cart) {
            toast("Product Added To Cart", { theme: "dark", type: "success" })
        }
    }
    useEffect(() => {
        async function fetchData() {
            const { data } = await fetchwishlistes()
            console.log(data.cartdata)
            if (data) {
                setMywishlists(data.cartdata)
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            <Navigation />
            {
                mywishlists && mywishlists.length != 0 ?
            <div className={`my-5 ${style.wishlist}`}>
                <h3 className='mx-5 '>MY WISHLIST:</h3>
                <div className=' m-3'>
                    <table className='table'>
                        <tr>
                            <th className='text-center'>ITEM(S)</th>
                            <th className='text-center'>Details</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Product Id</th>
                            <th className='text-center'>Remove Wishlist</th>
                            <th className='text-center'>Buy now</th>

                        </tr>
                        {
                            mywishlists && my
                            
                            .map((data) =>
                                <tr>
                                    <td> <img src={`/${data.product.img}`} className="card-img-top" style={{ width: "200px" }} alt="" /></td>
                                    <td className='text-center'>
                                        <h5 className='px-3'>{data.product.description}</h5>
                                    </td>
                                    <td className='text-center'>
                                        <h5 className='px-3'>{data.product.price}</h5>
                                    </td>
                                    <td className='text-center'>
                                        <h5 className='px-3'>{data.product.productid}</h5>
                                    </td>
                                    <td className='text-center'>
                                        <button className='btn-warning' onClick={() => removeitem(data._id)}>Remove</button>
                                    </td>
                                    <td className='text-center'>
                                        <button type="button" className="btn btn-primary" onClick={() => addtocardid(data.product._id, data)}>
                                            AddToOrder
                                        </button>
                                    </td>

                                </tr>
                            )
                        }
                    </table>
                </div>
            </div>
               :
               <Link to="/" className='text-center m-5 '><h1>No Item in watchlist!</h1></Link>
       }
            <Footer />
                   
        </div>
    )
}
