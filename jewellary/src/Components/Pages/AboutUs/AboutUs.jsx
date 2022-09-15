import React from 'react'
import Footer from '../../Homeui/Footer/Footer'
import Navigation from '../../Homeui/Navigation/Navigation'

export default function AboutUs() {
    const myComponentStyle = {
        abouticon: {
            fontSize: '40px',
        }
    }
    return (
        <>
        <Navigation/>
            <section className="cetgory-banner">
                <div className="container d-flex">
                    <div className="m-auto">
                        <h3 className="text-center f-t f-55 text-white">About Us</h3>
                        <h6 className="text-center text-white">Home <a href="#" className="text-white ml-3">Subcategory</a></h6>
                    </div>
                </div>
            </section>
            <section className="m-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-3">
                            <div className="f-h f-25 f-b text-uppercase">welcome to our store</div>
                            <div className="f-18 f-h mt-3">We are a team of designers to make a design <br />as per your requirements
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="../images/about-img.png" alt="" className="img-fluid rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="m-100" style={{ backgroundColor: 'var(--dark)', padding: '40px 0 30px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 my-2">
                            <div className="about-icon text-center yellow i-s" style={myComponentStyle.abouticon}></div>
                            <div className="f-30 f-h f-b text-center text-white" id="number1">0</div>
                            <div className="f-25 text-center text-white">Total Modal</div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-2">
                            <div className="about-icon text-center yellow i-s" style={myComponentStyle.abouticon}></div>
                            <div className="f-30 f-h f-b text-center text-white" id="number2">0</div>
                            <div className="f-25 text-center text-white">Free Model</div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-2">
                            <div className="about-icon text-center yellow i-s" style={myComponentStyle.abouticon}></div>
                            <div className="f-30 f-h f-b text-center text-white" id="number3">0</div>
                            <div className="f-25 text-center text-white">Country Cover</div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-2">
                            <div className="about-icon text-center yellow i-s" style={myComponentStyle.abouticon}></div>
                            <div className="f-30 f-h f-b text-center text-white" id="number4">0</div>
                            <div className="f-25 text-center text-white">Happy Customer</div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

