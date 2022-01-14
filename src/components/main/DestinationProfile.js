import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import React from 'react';

const DestinationProfile = (props) => {
    const {pathname} = useLocation()
    const cityId = pathname.split('/')[2]

    const [cityData, setCityData] = useState([])
    const [cityIncluded, setCityIncluded] = useState([])

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
          const allCitiesIncluded = []
          clickedCity.data.included.forEach(item => {
              allCitiesIncluded.push(item)
          })
          setCityData(clickedCity.data.data)
          setCityIncluded(allCitiesIncluded)
      })
      .catch(err => console.log(err))
    }
    useEffect(() => {
      handleClick()
    }, [])
    
    console.log('this is destination Data', cityData)
    console.log('this is city included', cityIncluded)

    return (
      <div className="desProfPage"><br></br><h1><u></u></h1>
      </div>
    )
}

export default DestinationProfile