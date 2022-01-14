import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersGaycations = (props) => {
  const [gaycations, setGaycations] = useState([]);

  const getGaycations = () => {
    if (props.user !== null) {
      axios.get('http://localhost:8000/destinations', {
          headers: {
            Authorization: `Bearer ${props.user.token}`,
          },
        })
        .then((foundGaycations) => {
          setGaycations(foundGaycations.data);
        });
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (props.user !== null) {
      axios.delete(`http://localhost:8000/destination/${e.target.value}`, {
          headers: {
            Authorization: `Bearer ${props.user.token}`,
          },
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getGaycations()
  }, [])

  const mapGaycations = gaycations.map((place) => {
    // in the db destinations without an image is saved as "There is no image for this city" that is ALWAYS 31 characters
    return (
        <div className="favPlace">
            <Link to={`/destination-profile/gaycation/${place.roadGoatId}`}>
            <h3>{place.city}</h3>
           </Link>
            {place.image_url === 'There is no image for this city' ? <p>There is no image for this city</p> : <img src={place.image_url} alt={place.city} className="favPlaceImg" /> }
            <br />
            <button onClick={handleDelete} value={place._id}>Delete Gaycation</button>
        </div>
    )
  })

  return (
    <div>
      {gaycations.length > 0 ? (
        <div className="gDestPage">
          <br></br>
          <h1>
            <u>Your Gaycation Destinations</u>
          </h1>{" "}
          {mapGaycations}
        </div>
      ) : (
        <h1>No Gaycations Found</h1>
      )}
    </div>
  );
};

export default UsersGaycations;
