import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar1 from './1navbar/Navbar1'
import Cartnavbar from './cartnavbar/Cartnavbar'
import Categorynavbar from './categorynavber/Categorynavbar'

export default function Navigation() {
  
  return (
    <div>
        
        <>
            <section className="header">
                <Navbar1 />
                <Cartnavbar />
                <Categorynavbar />
            </section>
        </>

    </div>
  )
}

