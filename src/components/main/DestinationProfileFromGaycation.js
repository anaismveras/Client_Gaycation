import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import React from 'react';

const DestinationProfileFromGaycation = () => {
    // const {pathname} = useLocation()
    // const cityId = pathname.split('/')[3]

    return <h1>This Gaycation</h1>
    // const [cityData, setCityData] = useState([])
    // const [cityIncluded, setCityIncluded] = useState([])

    // const handleClick = () => {
    //   axios.get(
    //     `http://localhost:8000/destination/${cityId}`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${props.user.token}`,
    //       },
    //     }
    //   )
    //   .then(clickedCity => {
    //       const allCitiesIncluded = []
    //       clickedCity.data.included.forEach(item => {
    //           allCitiesIncluded.push(item)
    //       })
    //       setCityData(clickedCity.data.data)
    //       setCityIncluded(allCitiesIncluded)
    //   })
    //   .catch(err => console.log(err))
    // }
    // useEffect(() => {
    //   handleClick()
    // }, [])

}

export default DestinationProfileFromGaycation