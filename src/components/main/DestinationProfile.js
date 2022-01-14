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
          const allCitiesIncluded = []
          clickedCity.data.included.forEach(item => {
              allCitiesIncluded.push(item)
          })
          setCityData(clickedCity.data.data.attributes)
          // setCityIncluded(allCitiesIncluded)
      })
      .catch(err => console.log(err))
    }
    useEffect(() => {
      handleClick()
    }, [])
    console.log('this is destination Data', cityData)
    console.log('this is city included', cityIncluded)
    
    if (!cityData) {
      return (
        <p>"NOTHING"</p>
      )
    } else {

      return (
        <div className="desProfPage"><h1><u>Destination Information</u></h1><br></br>
      <div className="cityAttributes">
        <h3>{cityData ? cityData.short_name : ''}</h3>
        <a href={cityData ? cityData.url : ''}>Travel-Guides</a><br></br>
        General Rating: {cityData ? cityData.average_rating : ''}<br></br>
        Population: {cityData ? cityData.population : ''}<br></br>    

        {/* 
      Top Cities and Towns: {cityData.attributes.top_cities_and_towns[0].name}, {cityData.attributes.top_cities_and_towns[1].name}, {cityData.attributes.top_cities_and_towns[2].name}<br></br> 
      {/* General Safety: "{cityData.attributes.safety.China.subText}"<br></br>  */}
                        {/* Budget: "{cityData.attributes.budget.China.subText}"<br></br>  */}
      </div>
      {/* <div className="cityAttrImgs">
      Currency: {cityData.attributes.currency_name}<br></br> 
      <img src={place.imageUrl} alt={place.cityName} className="favPlaceImg" /><br></br>
    </div> */}
      </div>
    )
  }
}

export default DestinationProfile

