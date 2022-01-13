import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"


const DestinationProfile = (props) => {
    const {pathname} = useLocation()
    const cityId = pathname.split('/')[2]

    const [cityData, setCityData] = useState([])
    const [cityIncluded, setCityIncluded] = useState([])

    const handleClick = (e) => {
      // console.log('this is clicked', clicked)
      axios.get(
        `http://localhost:8000/destination/${cityId}`,
        {
          headers: {
            Authorization: `Bearer ${props.user.token}`,
          },
        }
      )
      .then(clickedCity => {
          console.log('this city was clicked', clickedCity)
          // const allCitiesData = []
          // const allCitiesIncluded = []
          // clickedCity.data.data.forEach(item => {
          //     allCitiesData.push(item)
          // })
          // clickedCity.data.included.forEach(item => {
          //     allCitiesIncluded.push(item)
          // })
          // setCityData(allCitiesData)
          // setCityIncluded(allCitiesIncluded)
      })
      .catch(err => console.log(err))
    }

    useEffect(() => {
      handleClick()
    }, [])


    return (
      <div className="desProfPage"><br></br><h1><u>Destination Information</u></h1>
      </div>
      // console.log('this is gaycation')
    )
}

export default DestinationProfile