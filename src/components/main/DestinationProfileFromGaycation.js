import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import React from "react";

const DestinationProfileFromGaycation = (props) => {
  useEffect(() => {
    handleClick();
  }, []);

  const { pathname } = useLocation();
  const cityId = pathname.split("/")[3];

  const [cityData, setCityData] = useState([]);

  // call the API to get one destination
  const handleClick = () => {
    axios
      .get(`http://localhost:8000/destinations/gaycations/${cityId}`, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((clickedCity) => {
        // console.log('this is clicked City', clickedCity.data[0])
        setCityData(clickedCity.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createReview = (e) => {
    e.preventDefault();
    // console.log('created review', cityData._id)

    axios
      .post(
        `http://localhost:8000/reviews/${cityData._id}`,
        {
          review: {
            username: props.user.username,
            body: e.target.review.value,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${props.user.token}`,
          },
        }
      )
      // .then(createdReview => {
      //     console.log('is created', createdReview)
      // })
      .catch((err) => console.log(err));
  };

    const allReviews = []
      if (cityData.length == 0) {
        //   console.log("this is city Data", cityData);
            <h1>...Data Loading...</h1>
      } else {
              cityData.reviews.map((word) => {
                // console.log("word", word);
                allReviews.push(word)
              });
      }

    //   console.log('all reviews', allReviews)
      const mapAllReviews = allReviews.map(review => {
          return (
              <div>
                  <h6>{review.username}</h6>
                  <p>{review.body}</p>
                  <button>Delete Review</button>
                  <button>Edit Review</button>
              </div>
          )
      })

  return (
    <div className="desProfGayPage">
        <h1>{cityData.city}</h1>
        <p>Description: {cityData.description}</p>
        {cityData.image_url === "There is no image for this city" ? (
          <p>There is no image for this city</p>
        ) : (
          <img
            src={cityData.image_url}
            alt={cityData.city}
            className="favPlaceImg"
          />
        )}
        <div className="cityAttributes">
        <form onSubmit={createReview}>
          <label htmlFor="review">Write a Review:</label>
          <br />
          <input name="review" type="text" id="review" />
          <input type="submit" />
        </form>
        {mapAllReviews}
      </div>
    </div>
  );
};

export default DestinationProfileFromGaycation;
