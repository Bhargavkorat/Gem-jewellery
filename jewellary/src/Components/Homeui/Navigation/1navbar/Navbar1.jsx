import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLogIn, setUser } from '../../../../redux/userloginSlice/userSlice'
import { logout } from '../../../../https/axios'

export default function Navbar1() {
    const { isLoggedIn } = useSelector((state) => state.userinfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const signout = () => {
        const logoutfun = logout()
        dispatch(setLogIn(false))
        dispatch(setUser(''))
        navigate("/login")
    }
    return (

        <div className="nav">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="nav-top">
                        <Link to="/contectus" className="f-14 text-white mr-3">Contact us</Link>
                        <Link to="#" className="f-14 text-white">Check Out</Link>
                    </div>
                    <div className="f-14 text-white welcome">Welcome to CADTRAD</div>
                    <div className="d-flex currency">
                        <div className="dropdown">
                            <div className="f-14 text-white dropdown-toggle mr-3" data-toggle="dropdown"
                                style={{ cursor: "pointer" }} id="currInput">Indian rupees</div>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item f-14" id="curr1">Indian rupees</li>
                                <div className="dropdown-divider mx-auto" style={{ width: "90%" }}></div>
                                <li className="dropdown-item f-14" id="curr2">Us dollors</li>
                            </ul>

                        </div>
                        <div className="dropdown">
                            <div className="f-14 text-white dropdown-toggle" data-toggle="dropdown"
                                style={{ cursor: "pointer" }}>My Account
                                <ul className="dropdown-menu" id="account">
                                    {
                                        isLoggedIn == true ?

                                            <li className="dropdown-item f-14">
                                                <p onClick={signout} className="text-dark mb-0">Log out</p>
                                            </li>
                                            :
                                            <li className="dropdown-item f-14">
                                                <Link to="/login" className="text-dark">log in/Register</Link>
                                            </li>

                                    }
                                    {/* <div className="dropdown-divider mx-auto" style={{ width: "90%" }}></div> */}
                                    {/* <li className="dropdown-item f-14">
                                <Link to="/login" className="text-dark">Register</Link></li> */}
                                    <div className="dropdown-divider mx-auto" style={{ width: "90%" }}></div>
                                    <li className="dropdown-item f-14">
                                        <Link to="/mywishlist" className="text-dark">My wishlist</Link>
                                    </li>
                                    <div className="dropdown-divider mx-auto" style={{ width: "90%" }}></div>
                                    <li className="dropdown-item f-14">
                                        <Link to="/myorder" className="text-dark">My oreders</Link>
                                    </li>
                                    <div className="dropdown-divider mx-auto" style={{ width: "90%" }}></div>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

