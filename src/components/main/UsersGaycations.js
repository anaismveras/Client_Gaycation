import axios from "axios"
import React, { useEffect, useState } from "react"


const UsersGaycations = (props) => {

    const [gaycations, setGaycations] = useState([])

    const getGaycations = () => {
		if (props.user !== null) {
			axios.get('http://localhost:8000/destinations',{
				headers: {
					"Authorization": `Bearer ${props.user.token}`
				}
			})
			.then(foundGaycations => {
				// console.log('this is faves', foundGaycations.data)
				setGaycations(foundGaycations.data)
			})
		}
    }

    useEffect(() => {
       getGaycations()
    }, [])


    const mapGaycations = gaycations.map(place => {
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
            {
                gaycations.length > 0
                ? <div><h1>Your Gaycation Destinations:</h1> {mapGaycations}</div>
                : <h1>No Gaycations Found</h1>
            }
        </div>
    )
}

export default UsersGaycations
