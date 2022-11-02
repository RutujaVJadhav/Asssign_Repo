import React from 'react'
import { useState } from 'react'
import{Link} from 'react-router-dom'

const Book= () => {


  return (
    <div>
        <div className="container">
    
    <hr/>

   <center> <h1>Resevation</h1></center>

    <hr/>


    <form className="row g-3">
    <div>
    <div className="row">
        <div className="col">
        <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            />
         </div>
         <div className="col">
         <input
         type="text"
         className="form-control"
         placeholder="Last name"
         aria-label="Last name"
         />
        </div>
    </div>
    <div className="row">
        <div className="col-md-5">
    <label htmlFor="inputDate" className="form-label">
      Date
    </label>
    <input
      type="date"
      className="form-control"
      id="inputDate"
      placeholder="DD/MM/YY"
    />
    </div>
    <div className='col-md-5'>
    <label htmlFor="inputTime" className="form-label">
      Time
    </label>
    <input
      type="time"
      className="form-control"
      id="inputDate"
      placeholder="00:00"
    />
    </div>
   
</div>
</div>
</form>


    </div> 
    <br/>
    <div>
    <center><button type="submit" className='btn btn-primary'>
      Book Table
    </button>
    </center>
    </div> 
    
    </div>
  )
}

export default Book