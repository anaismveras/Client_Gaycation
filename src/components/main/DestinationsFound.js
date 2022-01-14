import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DestinationFound = (props) => {
  const builtDestinationsCityInfo = [];
  const builtDestinationsImageInfo = [];
  const allInfo = props.destinationsData.concat(props.destinationsIncluded);

  allInfo.forEach((item) => {
    // what is item
    // console.log('this is item', item)
    if (item.relationships) {
      // console.log('featured image id', item.relationships.featured_photo.data)
      if (item.relationships.featured_photo.data != null) {
        builtDestinationsCityInfo.push({
          cityImageId: item.relationships.featured_photo.data.id,
          cityName: item.attributes.long_name,
          cityId: item.id,
          cityCountry: item.attributes.name,
          cityDescription: item.attributes.destination_type,
        });
      } else {
        // console.log('there is not image found')
        builtDestinationsCityInfo.push({
          cityImageId: "There is no image for this city",
          cityName: item.attributes.long_name,
          cityId: item.id,
          cityCountry: item.attributes.name,
          cityDescription: item.attributes.destination_type,
        });
      }
    } else if (item.type == "photo") {
      // console.log('this is the image url', item.id)
      builtDestinationsImageInfo.push({
        imageUrl: item.attributes.image.large,
        cityImageId: item.id,
      });
    }
  });
  // console.log('this is city info', builtDestinationsCityInfo)
  // console.log('this is image array', builtDestinationsImageInfo)

  const allCityInfo = builtDestinationsCityInfo.map((e) => {
    let temp = builtDestinationsImageInfo.find(
      (element) => element.cityImageId === e.cityImageId
    );
    // console.log('this is temp', temp)
    if (temp) {
      e.imageUrl = temp.imageUrl;
    }
    return e;
  });
  // console.log('this is everything', allCityInfo)

  const saveCity = (place) => {
    // console.log('place', allCityInfo[place])
    axios.post(
        `http://localhost:8000/destinations`,
        {
          body: allCityInfo[place],
        },
        {
          headers: {
            Authorization: `Bearer ${props.user.token}`,
          },
        }
      )
      .catch((err) => console.log(err));
  };

  const mapDestinations = allCityInfo.map((place, i) => {
    // console.log('this is place', place)
    if (place.imageUrl) {
      return (
        <div className="favPlace">
          <Link to={`/destination-profile/${place.cityId}`}>
            <div className="favPlaceName">
              <h3>{place.cityName}</h3>
            </div>
          </Link>
          <img
            src={place.imageUrl}
            alt={place.cityName}
            className="favPlaceImg"
          />
          <br></br>
          <button
            className="addFavBtn"
            onClick={() => {
              saveCity(i);
            }}
          >
            Add to your Gaycations
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <Link
            onClick={props.handleClick}
            to={`/destination-profile/${place.cityId}`}
          >
            <div className="favPlaceName">
              <h3>{place.cityName}</h3>
            </div>
          </Link>
          <p>{place.cityImageId}</p>
          <button
            className="addFavBtn"
            onClick={() => {
              saveCity(i);
            }}
          >
            Add to your Gaycations
          </button>
        </div>
      );
    }
  });

  return (
    <div class="destinations">
      <br></br>
      <h1>
        <u>Destinations</u>
      </h1>
      {mapDestinations}
    </div>
  );
};

export default DestinationFound;
