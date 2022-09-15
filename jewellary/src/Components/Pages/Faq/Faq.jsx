import React from 'react'
import Footer from '../../Homeui/Footer/Footer'
import style from '../Faq/Faq.module.css'

export default function Faq() {
    return (
        <>
            <section className="cetgory-banner">
                <div className="container d-flex">
                    <div className="m-auto">
                        <h3 className="text-center f-t f-55 text-white">Faqs</h3>
                        <h6 className="text-center text-white">Home <a href="#" className="text-white ml-3">faqs</a></h6>
                    </div>
                </div>
            </section>
            <section className="m-100">
                <div className="container">
                    <h2 className="f-30 mb-4 f-h f-b">Below are frequently asked questions, you may find the answer for yourself
                    </h2>
                    <div className={`${style.accordion}`} id="accordionExample">
                        <div className={`${style.card}`}>
                            <div className={`card-header ${style.cardheader}`} id="headingOne">
                                <h2 className="mb-0">
                                    <div className="btn btn-block text-left text-white" type="button" data-toggle="collapse"
                                        data-target="#collapseOne">
                                        1. Can We Download Free Design ?
                                    </div>
                                </h2>
                            </div>

                            <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                <div className="card-body">
                                    Yes
                                </div>
                            </div>
                        </div>
                        <div className={`${style.card}`}>
                            <div className={`card-header ${style.cardheader}`} id="headingTwo">
                                <h2 className="mb-0">
                                    <div className="btn btn-block text-left collapsed text-white" type="button"
                                        data-toggle="collapse" data-target="#collapseTwo">
                                        2. Free Design Download Need To Create Account ?
                                    </div>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                                <div className="card-body">
                                    Yes
                                </div>
                            </div>
                        </div>
                        <div className={`${style.card}`}>
                            <div className={`card-header ${style.cardheader}`} id="headingThree">
                                <h2 className="mb-0">
                                    <div className="btn btn-block text-left collapsed text-white" type="button"
                                        data-toggle="collapse" data-target="#collapseThree">
                                        3. My All Details Secure ?
                                    </div>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                <div className="card-body">
                                    Yes, Your all details secure, you can check our privacy policy page.
                                </div>
                            </div>
                        </div>
                        <div className={`${style.card}`}>
                            <div className={`card-header ${style.cardheader}`} id="headingFour">
                                <h2 className="mb-0">
                                    <div className="btn btn-block text-left collapsed text-white" type="button"
                                        data-toggle="collapse" data-target="#collapseFour">
                                        4. Which Payment Method Provide ?
                                    </div>
                                </h2>
                            </div>
                            <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                                <div className="card-body">
                                    We provide Paypal, UPI, Wallet, Net Banking, All type Card
                                </div>
                            </div>
                        </div>
                        <div className={`${style.card}`}>
                            <div className={`card-header ${style.cardheader}`} id="headingFive">
                                <h2 className="mb-0">
                                    <div className="btn btn-block text-left collapsed text-white" type="button"
                                        data-toggle="collapse" data-target="#collapseFive">
                                        5. You Provide Cash On Delivery ?
                                    </div>
                                </h2>
                            </div>
                            <div id="collapseFive" className="collapse" data-parent="#accordionExample">
                                <div className="card-body">
                                    We selling design so not provide COD
                                </div>
                            </div>
                        </div>
                        <div className={`${style.card}`}>
                            <div className={`card-header ${style.cardheader}`} id="headingSix">
                                <h2 className="mb-0">
                                    <div className="btn btn-block text-left collapsed text-white" type="button"
                                        data-toggle="collapse" data-target="#collapseSix">
                                        6. If We Have Special Requirnment, Can You Create Design Base On That ?
                                    </div>
                                </h2>
                            </div>
                            <div id="collapseSix" className="collapse" data-parent="#accordionExample">
                                <div className="card-body">
                                    Yes, we will do that<br />Please contact by email , phone
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}


