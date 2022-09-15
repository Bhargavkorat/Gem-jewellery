import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchcart, fetchwishlistes } from '../../../../https/axios'

export default function Cartnavbar() {
    const [cart, setCart] = useState('')
    const items = useSelector((state) => state.cart)
    const { isLoggedIn } = useSelector(state => state.userinfo)
    const [wishlist, setwishlist] = useState('')

    useEffect(() => {
        async function fetchData() {
            const data = await fetchcart()
            if (data) {
                setCart(data.data.cartdata)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        async function fetchData() {
            const data = await fetchwishlistes()
            setwishlist(data.data.cartdata)
            // }
        }
        fetchData()
    }, [])

    return (

        <div>
            <div className="nav-center">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <div className="header-contact">
                            <Link to="#" className="f-14 text-dark mr-2">Phone: +91 7600313019</Link>
                            <Link to="#" className="f-14 text-dark">Email: cadtrad2@gmail.com</Link>
                        </div>
                        <Link to="/" className="brand-logo"><img src="images/logo.png" alt="logo" className="img-fluid" /></Link>
                        <div className="d-flex">
                            <div className="text-dark f-14 mr-3 i-s"><Link to="/mywishlist"
                                className="badge badge-warning ml-xl-2 ml-md-1 f-14 f-h">{isLoggedIn == true ? wishlist.length == 0 ? 0 : wishlist.length : 0}</Link></div>
                            <div className="text-dark f-14 i-s"><Link to="/cart"
                                className="badge badge-warning ml-xl-2 ml-1 f-14 f-h">{isLoggedIn == true ? cart.length == 0 ? 0 : cart.length : 0}</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


