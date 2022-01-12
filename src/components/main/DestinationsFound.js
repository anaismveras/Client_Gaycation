// import noImage from 'src/images/No_Image_Available.jpeg'

const DestinationFound = (props) => {

    const builtDestinationsCityInfo = []
    const builtDestinationsImageInfo = []
    const allInfo = props.destinationsData.concat(props.destinationsIncluded)

    allInfo.forEach(item => {
        // what is item
        // console.log('this is item', item)
        if (item.relationships) {
            // console.log('featured image id', item.relationships.featured_photo.data)
            if (item.relationships.featured_photo.data != null) {
                // console.log('this is the image id',item.relationships.featured_photo.data.id)
                builtDestinationsCityInfo.push(
                    {cityImageId: item.relationships.featured_photo.data.id,
                    cityName: item.attributes.long_name})
            } else {
                // console.log('there is not image found')
                builtDestinationsCityInfo.push({
                    cityName: item.attributes.long_name,
                    cityImageId: "There is no image for this city"
                })
            }
        } else if (item.type == 'photo') {
            console.log('this is the image url', item.id)
            builtDestinationsImageInfo.push( 
                {
                    imageUrl:item.attributes.image.large,
                    cityImageId: item.id
                }
                )
        } 
    })
    // console.log('this is city info', builtDestinationsCityInfo)
    // console.log('this is image array', builtDestinationsImageInfo)

        const allCityInfo = builtDestinationsCityInfo.map((e) => {
            // console.log('this is item', item)
            let temp = builtDestinationsImageInfo.find(element => element.cityImageId === e.cityImageId)
            // console.log('this is temp', temp)
                if (temp) {
                    e.imageUrl = temp.imageUrl
                } 
                return e
        })
        // console.log('this is everything', allCityInfo)

        const mapDestinations = allCityInfo.map(place => {
            // console.log('this is place', place)
            if (place.imageUrl) {
                return (
                <div>
                    <h1>{place.cityName}</h1>
                    <img src={place.imageUrl} alt={place.cityName} />
                    <button>Add to your Gaycations</button>
                </div>
                )
            } else {
                return (
                    <div>
                    <h1>{place.cityName}</h1>
                    {/* <img src={noImage} alt=""/> */}
                    <button>Add to your Gaycations</button>
                </div>
                )
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
