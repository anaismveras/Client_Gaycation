import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import React from 'react';

const DestinationProfileFromGaycation = (props) => {
    const {pathname} = useLocation()
    const cityId = pathname.split('/')[3]

    const [cityData, setCityData] = useState([])
    
    const handleClick = () => {
        axios.get(
            `http://localhost:8000/destination/${cityId}`,
            {
                headers: {
                    Authorization: `Bearer ${props.user.token}`,
                },
            }
            )
            .then(clickedCity => {
                console.log('this is clicked City', clickedCity)
            })
            .catch(err => console.log(err))
        }
        
        useEffect(() => {
            handleClick()
        }, [])
        
        return (
            <h1>Gaycation Profile</h1>
        )
}

export default DestinationProfileFromGaycation