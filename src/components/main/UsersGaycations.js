import axios from "axios"
import React, { useEffect, useState } from "react"


const UsersGaycations = (props) => {

    const [gaycations, setGaycations] = useState([])

    const getGaycations = () => {
        if (props.user !== null) {
            axios.get('http://localhost:8000/destinations', {
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
                <div className="favPlace">
                <form>
                    <h3>{place.city}</h3>
                    <p>There is no image for this city</p>
                    <input type="Submit" value="Delete Gaycation" />
                </form>
                </div>
            )
        } else {
            return (
                // add an onsubmit(handledelete)
                <div className="favPlace">
                    <form>
                        <h3>{place.city}</h3>
                        <img src={place.image_url} alt={place.city} className="favPlaceImg" /><br></br>
                        <input type="Submit" value="Delete Gaycation" />
                    </form>
                </div>
            )
        }
    })


    return (
        <div>
            {
                gaycations.length > 0
                    ? <div className="gDestPage"><br></br><h1><u>Your Gaycation Destinations</u></h1> {mapGaycations}</div>
                    : <h1>No Gaycations Found</h1>
            }
        </div>
    )
}

export default UsersGaycations
