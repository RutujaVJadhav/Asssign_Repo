import React from 'react'
import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';



const Login= () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const validateUser = () =>{

        console.log(`email = ${email}`)
        console.log(`password = ${password}`)

  }
  
  const readEmail = (e)=> {

        setEmail(e.target.value)
    
  }

  const readPassword = (p)=>{

        setPassword(p.target.value)
    
  }

  return (
    <div>
           

        <div className="container">
    
        <hr/>

        <h1>Login Form</h1>

        <hr/>
    
        <form>

            <div className='form-group'>
                <label htmlFor=''>Email address</label>
                <input onChange={readEmail} type="email" className='form-control'  placeholder="Enter email"></input>
                {/* <small id="emailHelp" className='form-text text-muted'>We'll never share your email with anyone else.</small> */}
            </div>

            <div className='form-group'>
                <label htmlFor=''>Password</label>
                <input onChange={readPassword} type="password" className='form-control' placeholder="Password"></input>
            </div>

            <div className='form-group form-check'>
                <input type="checkbox" className='form-check-input' id="exampleCheck1"></input>
                <label className='form-check-label' for="exampleCheck1">Check me out</label>
            </div>

            


            <button onClick={validateUser} type="submit" className='btn btn-primary'>Login</button>

        </form>
   
        </div>       
   
    </div>
  )
}

export default Login