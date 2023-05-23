import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchDestinations from "../../actions/destinations";
import cogoToast from "cogo-toast";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as destinationService from "../../services/destination";
import interpolate from "pinterpolate";
import config from "../../config";
import { getProfile, getUserBooking } from "../../actions/user";
import { AiFillHome } from "react-icons/ai";

function DestinationList() {
  const dispatch = useDispatch();
  const destinations = useSelector((store) => store.destination.destinations);
  const { profile, bookings, isLoading } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getUserBooking());
  }, []);

  function jumpToHome(e) {
    history.push("/");
  }

  const [destinationName, setdestinationName] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [images, setimages] = useState([""]);

  function fetchUser() {
    if (!profile || !profile?.isAdmin) {
      history.replace("/login");
      cogoToast.warn("You are not authorized-modify");
    }
  }

  async function onAddDestinations(e) {
    e.preventDefault();
    const destinationData = {
      destinationName: destinationName,
      price: price,
      description: description,
      images: images,
    };
    const url = `${config.apiUrl}${config.endpoints.destinations}`;
    axios
      .post(url, destinationData)
      .then((response) => {
        const { data } = response;
        // console.log(data);

        if (response.status === 200) {
          cogoToast.success("Added record Successfully");
          history.push("/");
          dispatch(fetchDestinations);
        }
      })
      .catch((err) => {
        const { response } = err;
        // console.log(response.data);
        cogoToast.error(response.data.message);
      });
  }

  function onDelete(id) {
    // e.preventDefault();
    const url = `${config.apiUrl}${config.endpoints.destination}`;
    axios
      .delete(interpolate(url, { id }))
      .then((response) => {
        const { data } = response;
        // console.log(data);

        if (response.status === 200) {
          cogoToast.success("Deleted record Successfully");
          dispatch(fetchDestinations);
          history.push("/");
        }
      })
      .catch((err) => {
        const { response } = err;
        // console.log(response.data);
        cogoToast.error(response.data.message);
      });
  }

  function addImage(index, value) {
    let newImages = [...images];
    newImages[index] = value;
    setimages(newImages);
  }

  useEffect(() => {
    dispatch(fetchDestinations);
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="recommend modify">
      <button className="landing-page " onClick={jumpToHome}>
        <AiFillHome />
      </button>
      <div className="add-destination">
        <div className="title">
          <h1> Add Destination</h1>
          <form onSubmit={onAddDestinations}>
            <fieldset>
              <legend>Destination Details:</legend>

              <div>
                <input
                  type="text"
                  className="mainLoginInput"
                  placeholder="Destination Name"
                  onChange={(e) => setdestinationName(e.target.value)}
                  value={destinationName}
                  required
                />{" "}
              </div>

              <div>
                <input
                  type="number"
                  className="mainLoginInput"
                  placeholder="Price"
                  onChange={(e) => setprice(e.target.value)}
                  value={price}
                  required
                />{" "}
              </div>

              <div>
                <textarea
                  className="mainLoginInput"
                  placeholder="Description"
                  onChange={(e) => setdescription(e.target.value)}
                  value={description}
                  rows="5"
                  cols="50"
                  required
                />{" "}
              </div>

              <div>
                <p>Images</p>
                {images.map((image, index) => (
                  <div key={index}>
                    <input
                      type="url"
                      className="mainLoginInput"
                      placeholder={`Image ${index + 1}`}
                      onChange={(e) => {
                        addImage(index, e.target.value);
                      }}
                      value={image}
                      required
                    />{" "}
                  </div>
                ))}
                <button
                  onClick={() => {
                    setimages([...images, ""]);
                  }}
                >
                  {" "}
                  Add another Image
                </button>
              </div>
            </fieldset>

            <div>
              <button type="submit">Add Destination</button>
            </div>
          </form>
        </div>
      </div>

      <div className="title">
        <h1> Delete Destinations</h1>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="destinations">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination">
              <h3>{destination.destinationName}</h3>
              <img
                className="modify-destination-img"
                src={destination.images[0]}
                alt={destination.destinationName}
              />
              <span>
                <button
                  onClick={() => {
                    onDelete(destination.id);
                  }}
                >
                  Delete
                </button>{" "}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="title">
        <h1> Update Destinations</h1>
        <button>
          <Link to={`/updatedestination`}>Update</Link>
        </button>
      </div>
    </div>
  );
}

export default DestinationList;
