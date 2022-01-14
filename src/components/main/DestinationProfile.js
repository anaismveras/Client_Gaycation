import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"


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
          // console.log('this city was clicked', clickedCity.data)
          // console.log('this city was clicked', clickedCity.data.included)
          const allCitiesIncluded = []
          clickedCity.data.included.forEach(item => {
              allCitiesIncluded.push(item)
          })
          setCityData(clickedCity.data.data)
          setCityIncluded(allCitiesIncluded)
      })
      .catch(err => console.log(err))
    }
    // console.log('this is destination Data', cityData)
    // console.log('this is city included', cityIncluded)
    useEffect(() => {
      handleClick()
    }, [])


    return (
      <div className="desProfPage"><br></br><h1><u>Destination Information</u></h1>
      </div>
    )
}

export default DestinationProfile