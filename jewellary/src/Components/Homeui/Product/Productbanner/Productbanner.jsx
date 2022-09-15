import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function Productbanner() {
  
  const { subcatagory } = useParams()
  return (
    <div>
      <section className="cetgory-banner">
        <div className="container d-flex">
          <div className="m-auto">
            <h3 className="text-center f-t f-55 text-white">{subcatagory}</h3>
            <h6 className="text-center text-white">Home <Link to="#" className="text-white ml-3">Subcategory</Link></h6>
          </div>
        </div>
      </section>
    </div>
  )
}
