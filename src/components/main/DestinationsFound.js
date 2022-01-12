
const DestinationFound = (props) => {
    // sanity check
    console.log('this is props desData', props.destinationsData)
    console.log('this is desIncludeData', props.destinationsIncluded)

    const cityImage = []

    props.destinationsData.forEach(item => {
        // what is item
        // console.log('item', item)
        if (item.relationships.featured_photo) {
            if (item.relationships.featured_photo.data) {
                // does it go all the way to get the id of the image in data 
                // console.log('this is image id', item.relationships.featured_photo.data.id)
                cityImage.push({ cityImageId: item.relationships.featured_photo.data.id })
            }
            } else {
                console.log('no image found')
            }
        })
        // does it actually go into the array? YES!
        
        props.destinationsIncluded.forEach(item => {
            // what is item
            // console.log('item', item)
            if (item.type === 'photo') {
                // can i get the image url
                // console.log('this is a photo', item.attributes.image.large)
                cityImage.push({ imageUrl: item.attributes.image.large })
            }
        })
        // does it push into 
        // console.log('this is city images', cityImage)



    // const mapDestinationsData = []
    // props.destinations.forEach(place => {
    //     // console.log('this is place', place.id)
    //     if (place.attributes.long_name) {
    //         if (place.relationships.featured_photo.data.id) {
    //             images.forEach(item => {
    //                 // console.log('im going insane!', item)
    //                 if (item.id == place.relationships.featured_photo.data){
    //                     console.log('hello there')
    //                     mapDestinationsData.push({
    //                         image: <img src={item.imageUrl} alt={place.attributes.long_name} />,
    //                         name: <h1>{place.attributes.long_name}</h1>
    //                     })
    //             }})
    //         } else {
    //             console.log('there is not photo')
    //         }
    //         // console.log('the name', place)
    //         // images.forEach(item => {
    //         //     // console.log('im going insane!', item)
    //         //     if (item.id == place.relationships.featured_photo.data) {
    //         //         console.log('hello there')
    //         //         mapDestinationsData.push({
    //         //             image: <img src={item.imageUrl} alt={place.attributes.long_name} />,
    //         //             name: <h1>{place.attributes.long_name}</h1>
    //         //         }
    //                 // )
    //             }
    //         })
    return (
        <div>
            <h1>Destinations:</h1>
        </div>
    )
}

export default DestinationFound
