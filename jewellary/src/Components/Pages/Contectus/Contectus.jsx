import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { contactmessage } from '../../../https/axios'
import Footer from '../../Homeui/Footer/Footer'
import Navigation from '../../Homeui/Navigation/Navigation'

export default function Contectus() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [message, setMessage] = useState('')

    const senddata = async () => {
        const contactUs = await contactmessage({ name, email, mobile, message })
        toast("Message send sucessfully", { theme: "dark", type: "success" })
        setMobile('')
        setName('')
        setEmail('')
        setMessage('')
    }
    return (
        <div>
            <Navigation />
            <section className="cetgory-banner">
                <div className="container d-flex">
                    <div className="m-auto">
                        <h3 className="text-center f-t f-55 text-white">Contact Us</h3>
                        <h6 className="text-center text-white">Home <a href="#" className="text-white ml-3">Contact Us</a></h6>
                    </div>
                </div>
            </section>
            <section className="m-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card" style={{ padding: "20px 20px; border: none" }}>
                                <h2 className="f-34 f-t text-center">Contact Us</h2>
                                <div className="mt-4">
                                    <f className="f-25 f-b f-h"><span className="i-s mr-2"></span>  Address</f>
                                    <p className=" mt-3 ">DTC building 306-307-308, Dalagiya maholo, Mahidharpura,
                                        Surat, Gujarat, India</p>
                                </div>
                                <hr style={{ margin: "20px 0" }} />
                                <div className="mt-2">
                                    <f className="f-25 f-b f-h"><span className="i-s mr-2"></span>Phone</f>
                                    <p className=" mt-3 "> Mobile: +91 7600313019</p>
                                    <p className=" mt-3 ">  Hotline: +91 7600313019</p>
                                </div>
                                <hr style={{ margin: "20px 0" }} />
                                <div className="mt-2">
                                    <f className="f-25 f-b f-h"><span className="i-s mr-2"></span>E-mails</f>
                                    <p className=" mt-3 ">cadtrad2@gmail.com</p>
                                    <p className=" mt-3 ">cadtrad2@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card" style={{ padding: "20px 20px" }}>
                                <h2 className="f-34 f-t text-center">Write Us Your Massage</h2>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text"
                                                    className="form-control email-input text-dark border-bottom pb-4 pl-3 f-14 "
                                                    style={{ marginTop: "30px" }} value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name *" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="email"
                                                    className="form-control email-input text-dark border-bottom pb-4 pl-3 f-14 "
                                                    style={{ marginTop: "30px" }} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Address *" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text"
                                                    className="form-control email-input text-dark border-bottom pb-4 pl-3 f-14 "
                                                    style={{ marginTop: "30px" }} value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Your Mobile Number *" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea cols="12" rows="4"
                                                    className="form-control email-input text-dark border-bottom pb-4 pl-3 f-14 "
                                                    style={{ marginTop: "30px" }} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter Your Massage Here *"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-block btn-warning f-h f-18 mt-4" onClick={senddata} type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
