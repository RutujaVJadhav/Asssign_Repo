import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { credentials } from './credential'
console.log(credentials)


// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';



const Login = () => {
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
        let auth = false

        credentials.map((user) => {
            if ((user.email == email) && (user.password == password)) {
                console.log('welcome')
                auth = true
            }
        })

        if(auth == true){
            navigate('/hotel')
        }else{
            alert("wrong credentials")
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

                    <div className='form-group form-check'>
                        <input type="checkbox" className='form-check-input' id="exampleCheck1"></input>
                        <label className='form-check-label' for="exampleCheck1">Check me out</label>
                    </div>
                    <br />
                    <div>

                        <Link className='toAdmin' to='/Admin'>
                            Login as a administrator
                        </Link>

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

export default Login