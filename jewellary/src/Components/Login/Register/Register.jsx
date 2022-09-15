import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Registeruser } from '../../../https/axios'

export default function Register() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobile, setMoblie] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')

    const senddata = async () => {
        const register = await Registeruser({ firstname, lastname, email, password, mobile, confirmpassword , address, pincode })
        if (register) {
            setFirstname('')
            setLastname('')
            setEmail('')
            setPassword('')
            setMoblie('')
            setAddress('')
            setPincode('')
            setConfirmpassword('')
            toast("User Register sucessfully", { theme: "dark", type: "success" })
       
        }
    }
  return (
<div>

<div className="card" style={{ padding: "20px 20px" }}>
    <h2 className="f-34 f-t text-center">Sign Up</h2>
    <div>
        <div className="row">
            <div className="col-lg-6">
                <div className="form-group">
                    <input type="text" name='firstname' value={firstname} onChange={e => { setFirstname(e.target.value) }}
                        className="form-control email-input text-dark border-bottom pb-4 pl-3  f-14 "
                        style={{ marginTop: "30px" }} placeholder="First Name" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <input type="text" name='lastname' value={lastname} onChange={e => { setLastname(e.target.value) }}
                        className="form-control email-input text-dark border-bottom pb-4 pl-3 f-14 "
                        style={{ marginTop: "30px" }} placeholder="Last Name" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="form-group">
                    <input type="email" name='email' value={email} onChange={e => { setEmail(e.target.value) }}
                        className="form-control email-input text-dark border-bottom pb-4 pl-3 f-14 "
                        style={{ marginTop: "30px" }} placeholder="Enter Your Email Address *" />
                </div>
            </div>
        </div>
      
        <div className="row">
            <div className="col-lg-12">
                <div className="form-group">
                    <input type="text" name='address' value={address} onChange={e => { setAddress(e.target.value) }}
                        className="form-control email-input text-dark border-bottom pb-4 pl-3 f-14 "
                        style={{ marginTop: "30px" }} placeholder="Enter Address *" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div className="form-group">
                    <input type="text" name='pincode' value={pincode} onChange={e => { setPincode(e.target.value) }}
                        className="form-control email-input text-dark border-bottom pb-4 pl-3  f-14 "
                        style={{ marginTop: "30px" }} placeholder="Enter Pincode" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                <input type="text" name='mobile' value={mobile} onChange={e => { setMoblie(e.target.value) }}
                        className="form-control email-input text-dark border-bottom pb-4 pl-3 f-14 "
                        style={{ marginTop: "30px" }} placeholder="Mobile number *" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div className="form-group">
                    <input type="password" name='password' value={password} onChange={e => { setPassword(e.target.value) }}
                        className="form-control email-input text-dark border-bottom pb-4 pl-3  f-14 "
                        style={{ marginTop: "30px" }} placeholder="Password" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <input type="password" name='confirmpassword' value={confirmpassword} onChange={e => { setConfirmpassword(e.target.value) }}
                        className="form-control email-input text-dark border-bottom pb-4 pl-3 f-14 "
                        style={{ marginTop: "30px" }} placeholder="Confirm Password" />
                </div>
            </div>
        </div>
        <div className="mt-2">
            <div className="form-group form-check ml-2 text-muted">
                <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                <label className="form-check-label" htmlFor="exampleCheck2">I Wish To Receive Newsletters,
                    Promotions Ans News
                    From Cadtrad Company.
                </label>
            </div>
        </div>
        <button className="btn btn-block btn-warning f-h f-18 mt-4" onClick={senddata} type="submit">Sign up</button>
    </div>
</div>
</div>
  )
}



