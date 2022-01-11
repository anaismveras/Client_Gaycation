import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import apiUrl from "../../apiConfig"

const SearchDestination = (props) => {

    const [inputValue, setInputValue] = useState('')
    const [subValue,setSubValue] = useState('')
    const [destinations, setDestinations] = useState([])
    const navigate = useNavigate()

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
            console.log('destinations\n:', foundDestinations.data)
            setDestinations(foundDestinations.data)
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
        </div>
    )
}

export default SearchDestination