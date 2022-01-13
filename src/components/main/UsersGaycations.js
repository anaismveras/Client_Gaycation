import React from "react"

const UsersGaycations = (props) => {
    
    const mapGaycations = props.gaycations.map(place => {
        // console.log('this is place', place)
        if ()
        return (
            <div>
                <h1>{place.city}</h1>
                <img src={place.image_url} alt={place.city} />
            </div>
        )
    })

    return (
        <div>
            <h1>Your Gaycation Destinations:</h1>
            {mapGaycations}
        </div>
        
    )



}

export default UsersGaycations