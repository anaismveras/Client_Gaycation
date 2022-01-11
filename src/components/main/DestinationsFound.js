
const DestinationFound = (props) => {
    // console.log('this is props', props)
    const mapDestinationsData = props.destinations.map((place) => {
        if (place.attributes.long_name) {
            return (
             //    for checking
             //    console.log('this is place', place)
             <div>
                 <h1>{place.attributes.long_name}</h1>
                 <button>Add to your Gaycations</button>
             </div>
            )
        }
    })
    return (
        <div>
            <h1>Destinations:</h1>
            {mapDestinationsData}
        </div>
    )
}

export default DestinationFound
