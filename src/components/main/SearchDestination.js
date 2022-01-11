import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
// import apiUrl from "../../apiConfig"
import DestinationFound from "./DestinationsFound"

const SearchDestination = (props) => {

    const [inputValue, setInputValue] = useState('')
    const [subValue, setSubValue] = useState('')
    const [destinations, setDestinations] = useState({})

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
            // console.log('this is found destinations\n:')
            // for checking
            // console.log('destinations\n:', foundDestinations)
            const allDestinations = []
            foundDestinations.data.data.forEach(item => {
                allDestinations.push(item)
            })
            foundDestinations.data.included.forEach(item => {
                allDestinations.push(item)
            })
            setDestinations(allDestinations)
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
                <DestinationFound destinations={destinations} />
        </div>
    )
}

export default SearchDestination