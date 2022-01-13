import { useState, useEffect } from "react"
import axios from "axios"
// import apiUrl from "../../apiConfig"
import DestinationFound from "./DestinationsFound"
import DestinationProfile from "./DestinationProfile"
import { useParams } from "react-router-dom"

const SearchDestination = (props) => {

    // All states
    const [inputValue, setInputValue] = useState('')
    const [subValue, setSubValue] = useState('')
    const [destinationsData, setDestinationsData] = useState([])
    const [destinationsIncluded, setDestinationsIncluded] = useState([])
    // const [cityData, setCityData] = useState([])
    // const [cityIncluded, setCityIncluded] = useState([])

    const handleChange = (e) => {
        // for checking
        // console.log('this is what im writing', inputValue)
        setInputValue(e.target.value)
    }

    // calling backend RoatGoat API to get cities
    const submitDestination = (e) => {
        e.preventDefault()
        // console.log('submitting', inputValue)
        setSubValue(inputValue)
        axios.get(`http://localhost:8000/destinations/${inputValue}`,
        {
            headers: {
                "Authorization": `Bearer ${props.user.token}`
            }
        })
        .then(foundDestinations => {
            // console.log('this is found destinations\n:')
            // for checking
            // console.log('destinations\n:', foundDestinations)
            const allDestinationsData = []
            const allDestinationsIncluded = [] 
            foundDestinations.data.data.forEach(item => {
                allDestinationsData.push(item)
            })
            foundDestinations.data.included.forEach(item => {
                allDestinationsIncluded.push(item)
            })
            setDestinationsData(allDestinationsData)
            // console.log('this is the data.attribute', allDestinationsData)
            setDestinationsIncluded(allDestinationsIncluded)
        })
        .catch(err => console.log(err))
    }

    // checking code
    // console.log('this is the detinaitionsData', destinationsData)
    // // console.log('this is destinationsIncluded', destinationsIncluded)
    // console.log('this is destinations', destinations

    // const handleClick = (e) => {
    //     // do i get whats in the click?
    //     // console.log('what is this', e.target)
    //     console.log('this is clicked', clicked)
    //     // axios.get(
    //     //   `http://localhost:8000/destinations/${clicked}`,
    //     //   {
    //     //     headers: {
    //     //       Authorization: `Bearer ${props.user.token}`,
    //     //     },
    //     //   }
    //     // )
    //     // .then(clickedCity => {
    //     //     // checking what is clickedCity
    //     //     // console.log('this city was clicked', clickedCity)
    //     //     const allCitiesData = []
    //     //     const allCitiesIncluded = []
    //     //     clickedCity.data.data.forEach(item => {
    //     //         allCitiesData.push(item)
    //     //     })
    //     //     clickedCity.data.included.forEach(item => {
    //     //         allCitiesIncluded.push(item)
    //     //     })
    //     //     setCityData(allCitiesData)
    //     //     setCityIncluded(allCitiesIncluded)
    //     // })
    //     // .catch(err => console.log(err))
    //   }


    return (
        <div className="searchButton">
            <form onSubmit={submitDestination}>
                <label htmlFor="destinationName"></label>
                <input type="text" className="searchBar" placeholder="Search  by  City,  State,  or  Country" onChange={handleChange} />
                <input type="submit" className="submitButton" />
            </form>
                <DestinationFound 
                destinationsData={destinationsData} 
                destinationsIncluded={destinationsIncluded} 
                user={props.user}
                />
        </div>
    )
}

export default SearchDestination