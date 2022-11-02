import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';



const Admin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()  // Prevent form default property of submitting
        if (email == 'admin@gmail.com' && password == '12345') {
            navigate('/Dashboard')
        }
        else {
            alert('Wrong Credentials')
        }
    }

    return (
        <div>


            <div className="container">
                <hr />
                <h1>Login Form</h1>
                <hr />
                <form onSubmit={handleLogin}>
                    <div className='form-group'>
                        <label>Email address</label>
                        <input type="email" onChange={changeEmail} className='form-control' placeholder="Enter email"></input>
                    </div>

                    <div className='form-group'>
                        <label>Password</label>
                        <input onChange={changePassword} type="password" className='form-control' placeholder="Password"></input>
                    </div>




                    <br />

                    <button className='btn btn-primary'>
                        Login
                    </button>

                </form>

            </div>


        </div>
    )
}

export default Admin