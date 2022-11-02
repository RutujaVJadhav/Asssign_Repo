import React from 'react'
const First =()=> {
    const car = {
    model: 'i20',
    company: 'Hyundai',
    price: 20,
    configuration: {
     color: 'gray',
     fuel: 'petrol',
     cylinder: 4,
     fuelTankCapacity: 37,
     mileage: {
     city: 14,
     highway: 20,
     },
     },
    features: ['touch screen ,', 'bluetooth,', 'alloy wheels,', 'powersteering,'],
    }
    return(
        <div>
            <h1>
                List
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
            <div> Features{car.features}</div>
        </div>
    )
}

    export default First