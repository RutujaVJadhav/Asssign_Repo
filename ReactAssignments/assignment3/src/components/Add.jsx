import React, { useState } from 'react'
import { Hotels } from './Hotels'

export default function Add() {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [contact, setContact] = useState('')
    const [allhotels, setAllhotels] = useState(Hotels)

    const addHotel = () => {
        let newHotel = {
            id: Hotels.length + 1,
            name: name,
            desc: desc,
            contact: contact
        }
        setAllhotels([...allhotels, newHotel])
        Hotels.push(newHotel)
    }


    return (
        <div>
            <center><h1>Add Hotel</h1></center>
            <div>
                <div className='form-group'>
                    <label>Hotel name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} className='form-control' placeholder="Hotel name"></input>
                </div>
                <br />
                <div className='form-group'>
                    <label>Hotel desc</label>
                    <textarea onChange={(e) => setDesc(e.target.value)} className="form-control" placeholder="Hotel desc" rows='3'></textarea>
                </div>
                <br />
                <div className='form-group'>
                    <label>Contact no</label>
                    <input onChange={(e) => setContact(e.target.value)} type="text" className='form-control' placeholder="Contact no"></input>
                </div>
                <br />
                <button onClick={addHotel} className='btn btn-primary'>Add Hotel</button>
            </div>


            <div>
                {allhotels.map((hotel, index) => {
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
