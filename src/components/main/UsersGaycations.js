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

    const handleDelete = (e) => {
        // console.log('this is delete', e.target)
        e.preventDefault()
        if (props.user !== null) {
            axios.delete(`http://localhost:8000/destination/${e.target.value}`, {
                headers: {
                    "Authorization": `Bearer ${props.user.token}`
                }
            })
            .catch(err => console.log(err))
        }
    }
    
    useEffect(() => {
        getGaycations()
    }, [gaycations])

    const mapGaycations = gaycations.map(place => {
        // console.log('this is place', place._id)
        if (place.image_url.length === 31) {
            return (
                <div className="favPlace">
                    <h3>{place.city}</h3>
                    <p>There is no image for this city</p>
                    <button onClick={handleDelete} value={place._id}>Delete Gaycation</button>
                </div>
            )
        } else {
            return (
                <div className="favPlace">
                        <h3>{place.city}</h3>
                        <img src={place.image_url} alt={place.city} className="favPlaceImg" /><br></br>
                        <button onClick={handleDelete} value={place._id}>Delete Gaycation</button>
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
