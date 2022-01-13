import axios from "axios"
import React from "react"
import { useEffect, Link, useState } from "react"

const UsersGaycations = (props) => {

    // const [gaycations, setGaycations] = useState([])

    // // create function that called the delete route
    // // const handleDelete = () => {

    // // }
    // const getGaycations = () => {
	// 	if (user !== null) {
	// 		axios.get('http://localhost:8000/destinations',{
	// 			headers: {
	// 				"Authorization": `Bearer ${user.token}`
	// 			}
	// 		})
	// 		.then(foundGaycations => {
	// 			console.log('this is faves', foundGaycations)
	// 			setGaycations(foundGaycations)
	// 		})
	// 	}
    // }

	// useEffect(() => {
	// 	getGaycations()
	// }, [props.user])

    const mapGaycations = props.gaycations.map(place => {
        // console.log('this is place length', place.image_url)
        if (place.image_url.length === 31) {
            return (
                // add an onsubmit(handledelete)
                <form>
                <h1>{place.city}</h1>
                <p>There is no image for this city</p>
                <input type="Submit" value="Delete Gaycation" />
                </form>
            )
        } else {
            return (
                // add an onsubmit(handledelete)
                <form >
                    <h1>{place.city}</h1>
                    <img src={place.image_url} alt={place.city} />
                    <input type="Submit" value="Delete Gaycation"/>
                </form>
            )
        }
    })


    return (
        <div>
            <h1>Your Gaycation Destinations:</h1>
            {mapGaycations}
        </div>
        
    )
}

export default UsersGaycations
