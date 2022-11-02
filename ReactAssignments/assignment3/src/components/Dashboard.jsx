import React from 'react'
import {Link} from'react-router-dom'
export default function Dashboard() {
  return (
    <div>
        <center><h1>Dashboard</h1></center>
        <div class="container text-center">
  <div class="row">
    <div class="col">
    <div className="card" style={{ width: "18rem" }}>
  <img src="images/travel.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Add Hotel</h5>
    <p className="card-text">
     
    </p>
        <Link className="btn btn-primary"to='/Add'>View</Link>

    
  </div>
  </div>
    </div>
    <div class="col">
    <div className="card" style={{ width: "18rem" }}>
  <img src="images/travel.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Bookings</h5>
    <p className="card-text">
      
    </p>
     
    <Link className="btn btn-primary"to='/'>View</Link>
  </div>
</div>
    </div>
    <div class="col">
    <div className="card" style={{ width: "18rem" }}>
  <img src="images/travel.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Cancelled Bookings</h5>
    <p className="card-text">
    
    </p>
    <Link className="btn btn-primary"to='/Book'>View</Link>

    
  </div>
</div>
    </div>
  </div>
</div>

    
    </div>

  )
}
