    import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom"
import { toast } from 'react-toastify'
import { addtofav, oneproduct, wishlists } from '../../../https/axios';
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import { add } from '../../../redux/cartSlice/cartSlice'
import Productbanner from '../Product/Productbanner/Productbanner';

export default function Productdetail() {
    const dispatch = useDispatch();
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const [data, setData] = useState('')

    useEffect(() => {
        async function fetchData() {
            const product = await oneproduct(id)
            console.log(product.data.productinfo)
            setData(product.data.productinfo)
        }
        fetchData()
    }, [id])

    const addtocardid = async (id, product) => {
        dispatch(add(product))
        const cart = await addtofav(id);
        if (cart) {
            toast("Product Added To Cart", { theme: "dark", type: "success" })
        }
    }
    const wishlist = async (id, product) => {
        const cart = await wishlists(id);
        if (cart) {
            toast("Product Add Mywishlist", { theme: "dark", type: "success" })
        }
    }
    return (
        <div>
            <Navigation />
            <Productbanner />
            <section className="m-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="exzoom" id="exzoom">
                                <div className="exzoom_img_box">
                                    <ul className='exzoom_img_ul'>
                                        <li><img src={`/${data.img}`} style={{ width: "500px" }} /></li>
                                        {/* <li><img src="../images/banner-1.jpg" /></li> */}
                                        {/* <li><img src="../images/banner-2.jpg" /></li> */}
                                    </ul>
                                </div>
                                <div className="exzoom_nav"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center">
                                <div className="product-heading f-h f-20 mb-3 f-b">{data.productid}</div>
                                <div className="product-sub-heading mb-2">{data.productid}</div>
                                <p className="product-p">
                                    {data.description}
                                </p>
                                <div className="product-star i-s f-16 text-muted mt-3">     </div>
                                <div className="f-h f-18 mt-4">
                                    Price:<br />{data.price}
                                </div>
                                <div className="mt-4">
                                    <button type="button" className="btn btn-primary" onClick={() => addtocardid(data._id, data)}>
                                        AddToOrder
                                    </button>
                                    <button onClick={() => wishlist(data._id, data)} className="btn btn-outline-warning f-14 i-s ml-2"></button>
                                </div>
                                <div className="f-16 mt-3">File Format: JewelCAD (.jcad, .jcd)</div>
                                <ul className="d-flex m-0 p-0 justify-content-center mt-2">
                                    <li><Link to="" className="i-b f-30 yellow px-2 text-center"></Link></li>
                                    <li><Link to="" className="i-b f-30 yellow px-2 text-center"></Link></li>
                                    <li><Link to="" className="i-b f-30 yellow px-2 text-center"></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   

                </div>
            </section>
            <Footer />

        </div>
    )
}
