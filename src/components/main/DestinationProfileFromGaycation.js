import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import React from 'react';
import { unstable_concurrentAct } from "react-dom/cjs/react-dom-test-utils.production.min";

const DestinationProfileFromGaycation = (props) => {
    const {pathname} = useLocation()
    const cityId = pathname.split('/')[3]

    const [cityData, setCityData] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [subVal, setSubVal] = useState("")
    
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
                console.log('this is clicked City', clickedCity.data[0])
                setCityData(clickedCity.data[0])
            })
            .catch(err => console.log(err))
        }

        useEffect(() => {
            handleClick()
        }, [])
        
        const handleChange = (e) => {
            // console.log('thisis value', e.target.value)
            setInputValue(e.target.value);
          };

        const createReview = (e) => {
            e.preventDefault()
            // console.log('created review', cityData._id)
            setSubVal(inputValue)
            console.log('inputbox', e.target.review.value)
            // console.log("body", inputValue)
            console.log('username', props.user.username)
            axios.post(`http://localhost:8000/reviews/${cityData._id}`, 
            { 
                review: {
                    username: props.user.username,
                    // userId: props.user.username,
                    body: e.target.review.value
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${props.user.token}`,
                },
            })
            .then(createdReview => {
                console.log('is created', createdReview)
            })
            .catch(err => console.log(err))
        }

        return (
            <div>
                <h1>{cityData.city}</h1>
                {cityData.image_url === 'There is no image for this city' ? <p>There is no image for this city</p> : <img src={cityData.image_url} alt={cityData.city} className="favPlaceImg" /> }
                <h3>Description: {cityData.description}</h3>
                <form onSubmit={createReview}>
                    <label htmlFor="review">Write a Review:</label>
                    <br />
                    <input onChange={handleChange} name="review" type="text" id="review" />
                    <input type="submit" />
                </form>
            </div>
        )
}

export default DestinationProfileFromGaycation