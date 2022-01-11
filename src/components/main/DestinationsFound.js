
const DestinationFound = (props) => {
    // console.log('this is props', props)
    const mapDestinationsData = props.destinationsData.map((place) => {
        // console.log('this is the destination name', place)
    })
    // const mapDestinationsIncluded = props.destinationsIncluded.map((image) => {
    //     if (image.attributes.image) {
    //         // console.log('this is the destination images', image)
    //         return (
    //             <img src={image.attributes.image.large} alt="" />
    //         )
    //     } 
    //     // return <h1>{place.attributes.long_name}</h1>
    // })
    return (
        <div>
            <h1>Destinations:</h1>
        </div>
    )
}

export default DestinationFound
