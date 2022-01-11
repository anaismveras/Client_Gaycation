import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
// import apiUrl from "../../apiConfig"
import DestinationFound from "./DestinationsFound"

const SearchDestination = (props) => {

    const [inputValue, setInputValue] = useState('')
    const [subValue, setSubValue] = useState('')
    const [destinationsData, setDestinationsData] = useState([])
    const [destinationsIncluded, setDestinationsIncluded] = useState([])

    const handleChange = (e) => {
        // for checking
        // console.log('this is what im writing', e.target.value)
        setInputValue(e.target.value)
    }

    const submitDestination = (e) => {
        e.preventDefault()
        // console.log('submitting', inputValue)
        setSubValue(inputValue)
        axios.get(`http://localhost:8000/destinations/${inputValue}`)
        .then(foundDestinations => {
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
            setDestinationsIncluded(allDestinationsIncluded)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form>
                <label htmlFor="destinationName">Destination Name:</label>
                <input type="text" onChange={handleChange} />
                <button onClick={submitDestination}>Submit</button>
            </form>
                <DestinationFound destinationsData={destinationsData} destinationsIncluded={destinationsIncluded} />
        </div>
    )
}

export default SearchDestination