
const DestinationFound = (props) => {
    // sanity check
    console.log('this is props desData', props.destinationsData)
    console.log('this is desIncludeData', props.destinationsIncluded)

    const cityImage = []
    // const allDestinationInfo = props.destinationsData.concat(props.destinationsIncluded)
    // console.log('this is all the info', allDestinationInfo)

    // props.destinationsData.forEach(item => {
    //     // what is item
    //     // console.log('item', item)
    //     if (item.relationships.featured_photo) {
    //         if (item.relationships.featured_photo.data) {
    //             // does it go all the way to get the id of the image in data 
    //             // console.log('this is image id', item.relationships.featured_photo.data.id)
    //             cityImage.push({ cityImageId: item.relationships.featured_photo.data.id })
    //         }
    //         } else {
    //             console.log('no image found')
    //         }
    //     })
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
        console.log('this is city images', cityImage)

        const mapDestinations = props.destinationsData.map(place => {
            // return console.log('this is the data', place.relationships.featured_photo.data[0])
            if (place.relationships.featured_photo.data !== null) {
                // checking to see if i can get ti the id
                // return console.log('this better work', place.relationships.featured_photo.data.id)
                cityImage.map(image => {
                    if (image.imageUrl.includes(place.relationships.featured_photo.data.id)) {
                        return ( 
                            // console.log('this works', image.imageUrl)
                                // console.log('this is place name', place.attributes.long_name)
                            <div>
                                <h1>{place.attributes.long_name}</h1>
                                <img src={image.imageUrl} />
                                <button>Add to your Gaycations</button>
                            </div>
                        )
                    }
                })
            } else {
                //  console.log('this image is null')
            }
        })
    return (
        <div>
            <h1>Destinations:</h1>
            {mapDestinations}
        </div>
    )
}

export default DestinationFound
