import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { credentials } from './credential'
console.log(credentials)

const Register = () => {

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const changeFullname = (e) => {
    setFullname(e.target.value)
  }

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }


  const handleRegister = (e) => {
    e.preventDefault()
    console.log(fullname)
    console.log(email)
    console.log(password)

    console.log(credentials)
    credentials.push({
      fullname: fullname,
      email: email,
      password: password
    })
    console.log(credentials)
  }


  return (
    <div>
      <div className="container">

        <center> <h1>Sign-up</h1></center>



        <hr />

        <form onSubmit={handleRegister} className="row g-3">
          <div className="row">
            <div className="col">
              <input
                onChange={changeFullname}
                type="text"
                className="form-control"
                placeholder="Full name"
                aria-label="Full name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input onChange={changeEmail} type="email" className="form-control" id="inputEmail4" placeholder='abc@gmail.com' />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input onChange={changePassword} type="password" className="form-control" id="inputPassword4" />
          </div>

          <div className="col-12">
            <button className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>


      </div>
    </div>
  )
}

export default Register