
const DestinationFound = (props) => {
    // sanity check
    // console.log('this is props desData', props.destinationsData)
    // console.log('this is desIncludeData', props.destinationsIncluded)

    const builtDestinationsSeparateInfo = []
    const builtDestinations = []
    const allInfo = props.destinationsData.concat(props.destinationsIncluded)



    allInfo.forEach(item => {
        // what is item
        if (item.relationships) {
            // console.log('featured image id', item.relationships.featured_photo.data)
            if (item.relationships.featured_photo.data != null) {
                // console.log('this is the image id',item.relationships.featured_photo.data.id)
                builtDestinationsSeparateInfo.push(
                    {cityImageId: item.relationships.featured_photo.data.id,
                    cityName: item.attributes.long_name})
            } else {
                // console.log('there is not image found')
                builtDestinationsSeparateInfo.push({
                    cityImageId: 'There is not image for this city',
                    ityName: item.attributes.long_name
                })
            }
        } else if (item.attributes.image) {
            // console.log('this is the image url', item.attributes.image.large)
            builtDestinationsSeparateInfo.push( 
                {imageUrl:item.attributes.image.large }
                // item.attributes.image.large
                )
        } 
        console.log('this is allInfo', builtDestinationsSeparateInfo)
        })

        builtDestinationsSeparateInfo.map(item => {
            console.log('this is item', item.imageUrl)
            if (item.imageUrl || item.cityImageId) {
                builtDestinations.push(
                    {
                        CityInfo: item.cityImageId,
                        CityImage: item.cityImageUrl
                    }
                )
            }
        })
        console.log('this is everything', builtDestinations)





        // console.log('there are a match', builtDestinationsSeparateInfo)
        // does it actually go into the array? YES!
        
        // props.destinationsIncluded.forEach(item => {
        //     // what is item
        //     // console.log('item', item)
        //     if (item.type === 'photo') {
        //         // can i get the image url
        //         // console.log('this is a photo', item.attributes.image.large)
        //         builtDestinations.push( item.attributes.image.large )
        //     }
        // })
        // does it push into 
        // console.log('this is city images', builtDestinations )

        // // testing if images show up on the page
        // const mapImages = cityImage.map(image => {
        //     return <img src={image.imageUrl} alt=""/>
        // })

        // // // testing if names show up on the page
        // const mapNames = props.destinationsData.map(data => {
        //     return <h1>{data.attributes.long_name}</h1>
        // })

        // const mapDestinations = props.destinationsData.map(place => {
        //     // return console.log('this is the data', place.relationships.featured_photo.data[0])
        //     if (place.relationships.featured_photo.data !== null) {
        //         // checking to see if i can get ti the id
        //         // return console.log('this better work', place.relationships.featured_photo.data.id)
        //         cityImage.map(image => {
        //             if (image.imageUrl.includes(place.relationships.featured_photo.data.id)) {
        //                 return ( 
        //                     // console.log('this works', image.imageUrl)
        //                         // console.log('this is place name', place.attributes.long_name)
        //                         console.log('this is bullshit')
        //                     // <div>
        //                     //     <h1>{place.attributes.long_name}</h1>
        //                     //     <img src={image.imageUrl} />
        //                     //     <button>Add to your Gaycations</button>
        //                     //  </div>
        //                 )
        //             }}
        //             )
        //     } else {
        //          console.log('this image is null')
        //     }
        // })

    return (
        <div>
            <h1>Destinations:</h1>
            {/* {mapDestinations} */}
        </div>
    )
}

export default DestinationFound
