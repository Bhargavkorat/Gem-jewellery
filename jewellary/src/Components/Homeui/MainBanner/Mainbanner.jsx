import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../../https/axios'


export default function Mainbanner() {

  return (

    <div>
      <section className="main-banner">
        <div className="container d-flex" style={{ height: "100%" }}>
          <div className="my-auto">
            <h3 className="banner-heading yellow">New Classic <br /> Earrings</h3>
            <h6 className="text-white f-14 banner-p my-3">Lorem Ipsum is simply dummy text of the printing and <br />
              Lorem Ipsum has been the industry's dummy.</h6>
            <div>
            <Link to="/product/Mangalsutra" className="btn btn-outline-warning banner-btn f-14">View Collection</Link>
              
            </div>
          </div>
        </div>
      </section>
      <div className="service">
        <div className="container">
          <div className="row justify-content-between text-white">
            <div className="col-md-3 col-6">
              <div className="subheader-item text-center f-14 my-2">
                <span className="i-s"></span>&nbsp; &nbsp;Order With Special Requirnments
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="subheader-item text-center f-14 my-2">
                <span className="i-s"></span>&nbsp; &nbsp;100% Clients Satisfaction
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="subheader-item text-center f-14 my-2">
                <span className="i-s"></span>&nbsp; &nbsp;Free Model Available
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="subheader-item text-center f-14 my-2">
                <span className="i-s"> </span>&nbsp; &nbsp;Live Support
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="m-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-img-1 d-flex justify-content-center flex-column mb-2">
                <div className="banner-title-1 f-34 f-b f-h yellow">New <br />Collaction</div>
                <div className="banner-prize f-14 text-white my-2">Starting at ₹800</div>
                <div>
                  <Link to="/product/Cocktail Ring" className="btn btn-outline-warning banner-btn f-14 mt-2">View Collection</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-img-2 d-flex justify-content-center flex-column ">
                <div className="banner-title-1 f-34 f-b f-h yellow text-right">New <br />Collaction</div>
                <div className="banner-prize f-14 text-white my-2 text-right">Starting at ₹800</div>
                <div className="d-flex justify-content-end">
                  <Link to="/product/Casual" className="btn btn-outline-warning banner-btn f-14 mt-2">View Collection</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
