import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import Navigation from '../Homeui/Navigation/Navigation'
import Register from './Register/Register'
import Footer from '../Homeui/Footer/Footer'
import { login } from '../../https/axios'
import { setLogIn, setUser } from '../../redux/userloginSlice/userSlice'

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const sendlogin = async () => {
        const loginUser = await login({ email, password })
        if (loginUser.data.success === 1) {
            dispatch(setUser(loginUser.data.user))
            dispatch(setLogIn(true))
            navigate("/")
            toast("Login Sucessfully", { theme: "dark", type: "success" })
        } else {
            navigate("/login")
        }
    }

    return (
        <div>
            <Navigation />
            <section className="cetgory-banner">
                <div className="container d-flex">
                    <div className="m-auto">
                        <h3 className="text-center f-t f-55 text-white">Account</h3>
                        <h6 className="text-center text-white">Home <Link to="/" className="text-white ml-3">Account</Link></h6>
                    </div>
                </div>
            </section>
            <section className="m-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card" style={{ padding: "20px 20px" }}>
                                <h2 className="f-34 f-t text-center">Log in</h2>
                                <div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="email" value={email} onChange={e => { setEmail(e.target.value) }}
                                                    className="form-control email-input text-dark border-bottom pb-4 pl-3  f-14 "
                                                    style={{ marginTop: "30px" }} placeholder="Enter Your E-mail Address" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="password" value={password} onChange={e => { setPassword(e.target.value) }}
                                                    className="form-control email-input text-dark border-bottom pb-4 pl-3 f-14 "
                                                    style={{ marginTop: "30px" }} placeholder="Enter Your Password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div className="form-group form-check ml-2 text-muted">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                        </div>
                                        <Link to="#" className="text-muted"><u>Forgot Password ?</u></Link>
                                    </div>
                                    <button className="btn btn-block btn-warning f-h f-18 mt-4" onClick={sendlogin} type="submit">Log In</button>
                                    <ul className="mt-3" style={{ listStyle: "square padding: 0 20px" }}>
                                        <li className="text-muted" style={{ padding: "5px 0" }}>We do not share your personal details
                                            with anyone.</li>
                                        <li className="text-muted" style={{ padding: "5px 0" }}>We will only ask you for information
                                            necessary to make the
                                            order process faster and easier.</li>
                                        <li className="text-muted" style={{ padding: "5px 0" }}> Your personal data will be used to
                                            support your experience
                                            throughout this website, to manage access to your account.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Register />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}







