
const DestinationFound = (props) => {
    // sanity check
    // console.log('this is props', props)
    
    const images = []
    props.destinations.forEach(item => {
        if (item.attributes.image) {
            // console.log('this is image id', item.id)
            //     images.push(item.attributes.image.large)
                images.push({ 
                    id: item.id,
                    imageUrl: item.attributes.image.large
                })
            } else {
                console.log('no image found')
            }
        })
        // checking if images are going into an array
        // console.log('this is the array', images)

    const mapDestinationsData = []
    props.destinations.forEach(place => {
        // console.log('this is place', place.id)
        if (place.attributes.long_name) {
            if (place.relationships.featured_photo.data.id) {
                images.forEach(item => {
                    // console.log('im going insane!', item)
                    if (item.id == place.relationships.featured_photo.data){
                        console.log('hello there')
                        mapDestinationsData.push({
                            image: <img src={item.imageUrl} alt={place.attributes.long_name} />,
                            name: <h1>{place.attributes.long_name}</h1>
                        })
                }})
            } else {
                console.log('there is not photo')
            }
            // console.log('the name', place)
            // images.forEach(item => {
            //     // console.log('im going insane!', item)
            //     if (item.id == place.relationships.featured_photo.data) {
            //         console.log('hello there')
            //         mapDestinationsData.push({
            //             image: <img src={item.imageUrl} alt={place.attributes.long_name} />,
            //             name: <h1>{place.attributes.long_name}</h1>
            //         }
                    // )
                }
            })
    console.log('this is mapdesarray', mapDestinationsData)
    return (
        <div>
            <h1>Destinations:</h1>
        </div>
    )
}

export default DestinationFound
