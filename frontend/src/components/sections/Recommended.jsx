import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import fetchDestinations from '../../actions/destinations';

function DestinationList() {
  const dispatch = useDispatch();
  const destinations= useSelector(store=>store.destination.destinations);
  const isLoading=useSelector((store)=>store.destination.isLoading)

    useEffect(() => {
      dispatch(fetchDestinations);
    }, []);

    return (
      <div className="recommend" id="recommend"> 
      <div className='title'>
        <h1> Recommended Destinations</h1>
        </div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className='destinations'>
          {destinations.map((destination) => (
            <div key={destination.id} className='destination'>
             <div className='image-wrapper'>
               <img
                src={destination?.images[0]}
                alt={destination.destinationName}
              />
               </div> 
               <div className='destination_details'>

              <a href={`/destinations/${destination.id}`}>
              <h3>{destination.destinationName}</h3>
              </a>
              <p>{destination.description?.slice(0, 200)}...<Link to={`/destinations/${destination.id}`}>See more</Link></p>
              <h4>Rs.{destination.price}</h4>
               </div>
            </div>
          ))}
          </div>
        )}
      </div>
    );
  }

  export default DestinationList;
