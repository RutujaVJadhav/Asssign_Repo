import React from 'react'
import { useState } from 'react'

const Register= () => {

    const [Name,setName] = useState('')
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const validateUser=()=>{

        console.log(`Name : ${Name}`);
        console.log(`Email : ${Email}`);
        console.log(`Password : ${Password}`);
        console.log(`confirmPassword : ${confirmPassword}`);
        
    }


    const readName = (e)=>{

        setName(e.target.value)
    }

    const readEmail = (e) =>{
        setEmail(e.target.value)
    }

    const readPassword = (e) =>{
        setPassword(e.target.value)
    }

    const readConfirmPassword=(e)=>{
        setConfirmPassword(e.target.value)

    }

  return (
    <div>
        <div className="container">
    
    <hr/>

    <h1>Register</h1>

    <hr/>

    <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">
      Email
    </label>
    <input type="email" className="form-control" id="inputEmail4" placeholder='abc@gmail.com' />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">
      Password
    </label>
    <input type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">
      Address
    </label>
    <input
      type="text"
      className="form-control"
      id="inputAddress"
      placeholder="1234 Main St"
    />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">
      Address 2
    </label>
    <input
      type="text"
      className="form-control"
      id="inputAddress2"
      placeholder="Apartment, studio, or floor"
    />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">
      City
    </label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">
      State
    </label>
    <select id="inputState" className="form-select">
      <option selected="">Choose...</option>
      <option>Maharashtra</option>
      <option>Gujrat</option>
      <option>Madhya Pradesh</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label" placeholder='400022'>
      Zip
    </label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">
      Sign in
    </button>
  </div>
</form>


    </div>  
    </div>
  )
}

export default Register