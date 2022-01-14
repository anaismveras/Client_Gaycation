import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import React from 'react';

const DestinationProfileFromGaycation = (props) => {
    useEffect(() => {
        handleClick()
    }, [])

    const {pathname} = useLocation()
    const cityId = pathname.split('/')[3]

    const [cityData, setCityData] = useState([])
    
    // call the API to get one destination 
    const handleClick = () => {
        axios.get(
            `http://localhost:8000/destinations/gaycations/${cityId}`,
            {
                headers: {
                    Authorization: `Bearer ${props.user.token}`,
                },
            }
            )
            .then(clickedCity => {
                // console.log('this is clicked City', clickedCity.data[0])
                setCityData(clickedCity.data[0])
            })
            .catch(err => {
                console.log(err)
            })
        }
        
        const createReview = (e) => {
            e.preventDefault()
            // console.log('created review', cityData._id)

            axios.post(`http://localhost:8000/reviews/${cityData._id}`, 
            { 
                review: {
                    username: props.user.username,
                    body: e.target.review.value
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${props.user.token}`,
                },
            })
            // .then(createdReview => {
            //     console.log('is created', createdReview)
            // })
            .catch(err => console.log(err))
        }
        
        console.log('this is city Data', cityData)

        const mapingReviews = () => {
            if (cityData.reviews.length === 0) {
               return <h1>...Reviews Loading...</h1>
            } else {
                return (
                cityData.reviews.map(word => {
                console.log('word', word)
            }))
        } }

        return (
            <div>
                <h1>{cityData.city}</h1>
                {cityData.image_url === 'There is no image for this city' ? <p>There is no image for this city</p> : <img src={cityData.image_url} alt={cityData.city} className="favPlaceImg" /> }
                <h3>Description: {cityData.description}</h3>
                <form onSubmit={createReview}>
                    <label htmlFor="review">Write a Review:</label>
                    <br />
                    <input name="review" type="text" id="review" />
                    <input type="submit" />
                </form> 
                {mapingReviews}
            </div>
        )
}

export default DestinationProfileFromGaycation