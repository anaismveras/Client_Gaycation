import { useState, useEffect } from "react"
import axios from "axios"


const DestinationProfile = (props) => {
    
    const handleClick = (e) => {
        // console.log('what is this', e.target.innerText)
        let clicked = e.target.innerText
        axios.get(
          `http://localhost:8000/destinations/${clicked}`,
          {
            headers: {
              Authorization: `Bearer ${props.user.token}`,
            },
          }
        )
        .then(clickedCity => {
            console.log('this city was clicked', clickedCity)
        })
      };

    return (
        <h1>Gaycation:</h1>
    )
}

export default DestinationProfile