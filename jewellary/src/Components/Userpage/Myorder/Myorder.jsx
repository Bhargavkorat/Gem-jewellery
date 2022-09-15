import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { displayorder } from '../../../https/axios'
import Footer from '../../Homeui/Footer/Footer'
import Navigation from '../../Homeui/Navigation/Navigation'

export default function Myorder() {
  const [morder, setMorder] = useState('')

  useEffect(() => {
    async function fetchData() {
      const { data } = await displayorder()
      if (data) {
        setMorder(data.cartdata)
      }
    }
    fetchData()
  }, [])
 
  return (
    <div>
      <Navigation />
      <div className='m-5 p-3 '>
        <h3>MY ORDER DETAILS:</h3>
        {
          morder && morder.map((data) =>
            <div className=' m-3'>
              <table className='table'>
                <tr>
                  <th className='text-center'>ITEM(S)</th>
                  <th className='text-center'>Details</th>
                  <th className='text-center'>Price</th>
                  <th className='text-center'>Product Id</th>
                  <th className='text-center'>PaymentType </th>
                  <th className='text-center'>Paymentstatus</th>

                </tr>
                <tr>
                  <td> <img src={`/${data.pid.img}`} className="card-img-top" style={{ width: "200px" }} alt="" /></td>
                  <td className='text-center'>
                    <h5 className='px-3'>{data.pid.description}</h5>
                  </td>
                  <td>
                    <h5 className='px-3'>{data.pid.price}</h5>
                  </td>
                  <td>
                    <h5 className='px-3'>{data.pid.productid}</h5>
                  </td>
                  <td>
                    <h5 className='px-3'>{data.PaymentType}</h5>
                  </td>
                  <td>
                    <h5 className='px-3'>{data.Paymentstatus.toString() ? "paid" : "unpaid"}</h5>
                  </td>
                </tr>
              </table>
            </div>

          )
        }


      </div>
      <Footer />
    </div>
  )
}

