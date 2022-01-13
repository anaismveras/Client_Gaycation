import React from "react"
import { useState } from "react"
import axios from "axios"



const UsersGaycations = () => {
    
    const [gaycations, setGaycations] = useState([])

    // const getGaycations = (e) => {
    //     e.preventDefault()
    //     axios.get('http://localhost:8000/destinations',{
    //         headers: {
    //             "Authorization": `Bearer ${props.user.token}`
    //         }
    //     })
    //     .then(gaycations => {
    //         console.log('this is faves', gaycations)
    //     })
    // }

    return (
        <h1>Your Gaycation Destinations:</h1>
    )



}

export default UsersGaycations