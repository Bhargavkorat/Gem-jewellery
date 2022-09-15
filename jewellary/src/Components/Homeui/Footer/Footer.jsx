import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <section className="footer dark-bg m-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="f-h text-white f-30 f-b">Sign Up For Our Email</h2>
                            <h6 className=" text-white f-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        </div>
                        <div className="col-md-6 mt-2">
                            <form className="input-group">
                                <input type="email" className="form-control email-input dark-bg text-white"
                                    placeholder="Enter Your E-mail Address" required="" />
                                <div className="input-group-append">
                                    <button className="input-group-text  text-white" type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-5">
                            <img src="images/logo.png" alt="" />
                            <p className="f-14 text-white mt-3">We are a team of designers to make a design as per<br />
                                your requirements!</p>
                            <ul className="d-flex m-0 p-0">
                                <li><a href="#" className="i-b f-20 yellow px-2"></a></li>
                                <li><a href="#" className="i-b f-20 yellow px-2"></a></li>
                                <li><a href="#" className="i-b f-20 yellow px-2"></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="p-0">
                                <li className="mb-2">
                                    <div className="f-16 yellow f-h f-b">Help</div>
                                </li>
                                <li className="py-1"><Link to='/aboutus' className="f-14 text-white">About Us</Link></li>
                                <li className="py-1"><Link to='/faq' className="f-14 text-white">FAQ</Link></li>
                                <li className="py-1"><Link to='/privacypolicy' className="f-14 text-white">Privacy Policy</Link>
                                </li>
                                <li className="py-1"><Link to='/termscondition' className="f-14 text-white">Terms And
                                    Condition</Link></li>
                                <li className="py-1"><a href='/contactus' className="f-14 text-white">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="p-0">
                                <li className="mb-2">
                                    <div className="f-16 yellow f-h f-b">Get In Touch</div>
                                </li>
                                <li className="py-1"><a href="#" className="f-14 text-white"><span className="i-s mr-2"> </span> DTC
                                    building 306-307-308,Dalagiya maholo, Mahidharpura, Surat, Gujarat, India</a></li>
                                <li className="py-1"><a href="#" className="f-14 text-white"><span className="i-s mr-2"> </span>+91
                                    7600313019</a></li>
                                <li className="py-1"><a href="#" className="f-14 text-white"><span className="i-s mr-2">
                                </span>cadtrad2@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <h5 className="f-14 text-white text-center">Copyright © 2021 Cadtrad All rights reserved.</h5>
                    <h5 className="f-20 text-white text-center i-b">    </h5>
                </div>
            </section>
        </div>
    )
}

