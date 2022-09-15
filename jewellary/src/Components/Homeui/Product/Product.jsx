import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from "react-router-dom"
import { toast } from 'react-toastify'
import { addtofav, product, productsdata, wishlists } from '../../../https/axios'
import loadinggif from "../../../images/threedotsloading.gif"
import { add } from '../../../redux/cartSlice/cartSlice'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import PriceFilter from './PriceFilter/PriceFilter'
import Productbanner from './Productbanner/Productbanner'

export default function Product() {
    const { subcatagory } = useParams()
    const dispatch = useDispatch();
    const [products, setProducts] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            const soemthing = await productsdata(subcatagory)
            console.log(soemthing.data.productinfo)
            setLoading(false)
            setProducts(soemthing.data.productinfo)
        }
        fetchProduct()
    }, [subcatagory])
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
            toast("Product Added To Cart", { theme: "dark", type: "success" })
        }
    }
    return (
        <div>
            <Navigation />
            <Productbanner />
            <PriceFilter />
            <section className="product">
                <div className="container">
                    <div className="row" id="product">
                        {
                            loading === false ? products && products.map((data) =>

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
                                    <img src={loadinggif} className="justify-content-center" style={{ width: "80px" }} alt="not found" />
                                </div>
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
