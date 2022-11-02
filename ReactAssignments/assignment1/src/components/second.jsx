import React from 'react'

    const second=(props)=>{
    const {car} =props
    return(
        <div>
            <h1>
                List 2
            </h1>
            <div> model:{car.model}</div>
            <div> company:{car.company}</div>
            <div> price:{car.price}</div>
            <div> color:{car.configuration.color}</div>
            <div> fuel:{car.configuration.fuel}</div>
            <div> cylinder:{car.configuration.cylinder}</div>
            <div> fuelTankCapacity:{car.configuration.fuelTankCapacity}</div>
            <div> city:{car.configuration.mileage.city}</div>
            <div> highway:{car.configuration.mileage.highway}</div>
            <div> Features:{car.features}</div>
        </div>
            )
    }
    export default second 