<<<<<<< HEAD
// import React from "react"
// import { useEffect } from "react"

// const UsersGaycations = (props) => {

//     // useEffect(() => {
//     // }, [props])

//     // const mapGaycations = props.gaycations.map(place => {
//     //     // console.log('this is place length', place.image_url)
//     //     if (place.image_url.length === 31) {
//     //         return (
//     //             <form>
//     //             <h1>{place.city}</h1>
//     //             <p>There is no image for this city</p>
//     //             <input type="Submit" value="Delete Gaycation" />
//     //             </form>
//     //         )
//     //     } else {
//     //         return (
//     //             <form>
//     //                 <h1>{place.city}</h1>
//     //                 <img src={place.image_url} alt={place.city} />
//     //                 <input type="Submit" value="Delete Gaycation"/>
//     //             </form>
//     //         )
//     //     }
//     // })


//     // return (
//     //     <div>
//     //         <h1>Your Gaycation Destinations:</h1>
//     //         {mapGaycations}
//     //     </div>
        
//     // )
// }

// export default UsersGaycations
=======
import React from "react"
import { useState } from "react"
import axios from "axios"



const UsersGaycations = (props) => {
    
    const [gaycations, setGaycations] = useState([])

    const getGaycations = (e) => {
        e.preventDefault()
        axios.get('http://localhost:8000/destinations',{
            headers: {
                "Authorization": `Bearer ${props.user.token}`
            }
        })
        .then(gaycations => {
            console.log('this is faves', gaycations)
        })
    }

    return (
        <h1>Your Gaycation Destinations:</h1>
    )



}

export default UsersGaycations
>>>>>>> d161d4d24d83b87d98710df3c6624734a5172a16
