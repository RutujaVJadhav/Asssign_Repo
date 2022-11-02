import React from 'react'
import { Link } from 'react-router-dom'
import { Hotels } from './Hotels'

function Hotel_Lists() {
  return (
    <div>
      <centre>
        <h1>Welcome!!</h1>
      </centre>

      <div>
       
        {Hotels.map((hotel, index) => {
          return (
            <div key={index}>
              <div>{hotel.id}</div>
              <div>{hotel.name}</div>
              <div>{hotel.desc}</div>
              <div>{hotel.contact}</div>
              <br />
              <br />
            </div>
          )
        })}
      </div>
    </div>

  )
}
export default Hotel_Lists