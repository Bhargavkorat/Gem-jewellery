import React from 'react'
import DiamandBanner from '../Diamandbanner/DiamandBanner'
import Footer from '../Footer/Footer'
import Homeproduct from '../Homeproduct/Homeproduct'
import Mainbanner from '../MainBanner/Mainbanner'
import Navigation from '../Navigation/Navigation'
import Product from '../Product/Product'

export default function Home() {
    return (
        <div>
            <Navigation />
            <Mainbanner />
            <Homeproduct />
            <DiamandBanner />
            <Footer />
        </div>
    )
}

