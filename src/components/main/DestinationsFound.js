import React from 'react'
// import noImage from '../images/main/noImage.jpeg'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const DestinationFound = (props) => {

    const builtDestinationsCityInfo = []
    const builtDestinationsImageInfo = []
    const allInfo = props.destinationsData.concat(props.destinationsIncluded)

    allInfo.forEach(item => {
        // what is item
        // console.log('this is item', item)
        if (item.relationships) {
            // console.log('featured image id', item.relationships.featured_photo.data)
            if (item.relationships.featured_photo.data != null) {
                builtDestinationsCityInfo.push(
                    {
                        cityImageId: item.relationships.featured_photo.data.id,
                        cityName: item.attributes.long_name,
                        cityId: item.id,
                        cityCountry: item.attributes.name,
                        cityDescription: item.attributes.destination_type,
                    })
            } else {
                // console.log('there is not image found')
                builtDestinationsCityInfo.push({
                    cityImageId: "There is no image for this city",
                    cityName: item.attributes.long_name,
                    cityId: item.id,
                    cityCountry: item.attributes.name,
                    cityDescription: item.attributes.destination_type,
                })
            }
        } else if (item.type == 'photo') {
            // console.log('this is the image url', item.id)
            builtDestinationsImageInfo.push( 
                {
                    imageUrl:item.attributes.image.large,
                    cityImageId: item.id
                }
                )
        } 
    })
    // console.log('this is city info', builtDestinationsCityInfo)
    // console.log('this is image array', builtDestinationsImageInfo)

        const allCityInfo = builtDestinationsCityInfo.map((e) => {
            let temp = builtDestinationsImageInfo.find(element => element.cityImageId === e.cityImageId)
            // console.log('this is temp', temp)
                if (temp) {
                    e.imageUrl = temp.imageUrl
                } 
                return e
        })
        // console.log('this is everything', allCityInfo)

        const saveCity = (place) => {
            // console.log('place', allCityInfo[place])
                axios.post(`http://localhost:8000/destinations`, {
                    body: allCityInfo[place]
                },
                {
                    headers: {
                        "Authorization": `Bearer ${props.user.token}`
                    }
                })
                .then()
        }

        const mapDestinations = allCityInfo.map((place, i) => {
            // console.log('this is place', place)
            if (place.imageUrl) {
                return (
                    <div className="favPlace">
                    <Link to='destination-profile'><div class="favPlaceName"><h3>{place.cityName}</h3></div></Link>
                    <img src={place.imageUrl} alt={place.cityName} className="favPlaceImg" /><br></br>
                    <button class="addFavBtn" onClick={() => {saveCity(i)}}>Add to your Gaycations</button>
                </div>
                )
            } else {
                return (
                    <div>
                    <Link to='destination-profile'><div class="favPlaceName"><h3>{place.cityName}</h3></div></Link>
                    <p>{place.cityImageId}</p>
                    <button class="addFavBtn" onClick={() => {saveCity(i)}}>Add to your Gaycations</button>
                </div>
                )
            }
        })

    return (
        <div class="destinations">
            <br></br><h1>Destinations:</h1>
            {mapDestinations}
        </div>
    )
}

export default DestinationFound
