import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { categories, product } from '../../../../https/axios'

export default function Categorynavbar() {
    const [products, setProducts] = useState('')

    useEffect(() => {
        async function fetchProduct() {
            const soemthing = await categories()
            setProducts(soemthing.data.category)
        }
        fetchProduct()
    }, [])
    return (
        <div className="navbar navbar-expand-lg">
            <div className="container d-flex justify-content-between align-items-center">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className="text-white f-20 i-s"></span>
                </button>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="navbar-nav show d-flex justify-content-center">
                        <li className="nav-item px-xl-4 px-lg-3 px-md-2"><Link to="/"
                            className="nav-link text-white f-14">Home</Link></li>
                        <li className="nav-item px-xl-4 px-lg-3 px-md-2 dropdown">
                            <Link to="#" className="nav-link text-white f-14" data-toggle="dropdown">Ring<span
                                className="i-s ml-1"></span></Link>
                            <div className="dropdown-menu">
                                {
                                    products && products.map((data) =>
                                        data.category == 'Ring' &&
                                        <div>
                                            <Link to={`/product/${data.subcategory}`} className="dropdown-item f-14">{data.subcategory}</Link>
                                            <div className="dropdown-divider mx-auto" style={{ width: "90%" }}></div>
                                        </div>
                                    )
                                }
                            </div>
                        </li>
                        <li className="nav-item px-xl-4 px-lg-3 px-md-2 dropdown">
                            <Link to="#" className="nav-link text-white f-14" data-toggle="dropdown">Bracelets<span
                                className="i-s ml-1"></span></Link>
                            <div className="dropdown-menu">
                                {
                                    products && products.map((data) =>
                                        data.category == 'Bracelets' &&
                                        <div>
                                            <Link to={`/product/${data.subcategory}`} className="dropdown-item f-14">{data.subcategory}</Link>
                                            <div className="dropdown-divider mx-auto" style={{ width: "90%" }}></div>
                                        </div>
                                    )
                                }
                            </div>
                        </li>
                        <li className="nav-item px-xl-4 px-lg-3 px-md-2 dropdown">
                            <Link to="#" className="nav-link text-white f-14" data-toggle="dropdown">Pandant<span
                                className="i-s ml-1"></span></Link>
                            <div className="dropdown-menu">
                                {
                                    products && products.map((data) =>
                                        data.category == 'Pandant' &&
                                        <div>
                                            <Link to={`/product/${data.subcategory}`} className="dropdown-item f-14">{data.subcategory}</Link>
                                            <div className="dropdown-divider mx-auto" style={{ width: "90%" }}></div>
                                        </div>
                                    )
                                }
                            </div>
                        </li>
                        <li className="nav-item px-xl-4 px-lg-3 px-md-2 dropdown">
                            <Link to="#" className="nav-link text-white f-14" data-toggle="dropdown">Earrings<span
                                className="i-s ml-1"></span></Link>
                            <div className="dropdown-menu">
                                {
                                    products && products.map((data) =>
                                        data.category == 'Earrings' &&
                                        <div>
                                            <Link to={`/product/${data.subcategory}`} className="dropdown-item f-14">{data.subcategory}</Link>
                                            <div className="dropdown-divider mx-auto" style={{ width: "90%" }}></div>
                                        </div>
                                    )
                                }
                            </div>
                        </li>
                        <li className="nav-item px-xl-4 px-lg-3 px-md-2 dropdown">
                            <Link to="#" className="nav-link text-white f-14" data-toggle="dropdown">Necklace<span
                                className="i-s ml-1"></span></Link>
                            <div className="dropdown-menu">
                                {
                                    products && products.map((data) =>
                                        data.category == 'Necklace' &&
                                        <div>
                                            <Link to={`/product/${data.subcategory}`} className="dropdown-item f-14">{data.subcategory}</Link>
                                            <div className="dropdown-divider mx-auto" style={{ width: "90%" }}></div>
                                        </div>
                                    )
                                }
                            </div>
                        </li>
                        <li className="nav-item px-xl-4 px-lg-3 px-md-2 dropdown">
                            <Link to="#" className="nav-link text-white f-14" data-toggle="dropdown">Mangalsutra<span
                                className="i-s ml-1"></span></Link>
                            <div className="dropdown-menu">
                                {
                                    products && products.map((data) =>
                                        data.category == 'Mangalsutra' &&
                                        <div>
                                            <Link to={`/product/${data.subcategory}`} className="dropdown-item f-14">{data.subcategory}</Link>
                                            <div className="dropdown-divider mx-auto" style={{ width: "90%" }}></div>
                                        </div>
                                    )
                                }
                            </div>
                        </li>
                        <li className="nav-item px-xl-4 px-lg-3 px-md-2 dropdown">
                            <Link to="#" className="nav-link text-white f-14" data-toggle="dropdown">Men's jewellery<span
                                className="i-s ml-1"></span></Link>
                            <div className="dropdown-menu">
                                {
                                    products && products.map((data) =>
                                        data.category == 'Men jewellery' &&
                                        <div>
                                            <Link to={`/product/${data.subcategory}`} className="dropdown-item f-14">{data.subcategory}</Link>
                                            <div className="dropdown-divider mx-auto" style={{ width: "90%" }}></div>
                                        </div>
                                    )
                                }
                            </div>
                        </li>
                     
                     
                    </ul>
                </div>
                <div className="header-contact-show">
                    <Link to="#" className="f-14 text-white text-center">Email: cadtrad2@gmail.com</Link>
                </div>
            </div>
        </div>
    )
}
