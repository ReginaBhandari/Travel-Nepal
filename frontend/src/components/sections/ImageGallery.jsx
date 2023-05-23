import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as destinationService from "../../services/destination";
import "../../assests/css/destination.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import "swiper/css";

function ImageGallery(props) {
  const [destination, setDestination] = useState({});
  const { name } = props;
  useEffect(() => {
    const fetchDestinations = async () => {
      const destination = await destinationService.fetchDestinationsById(name);

      setDestination(destination);
    };
    fetchDestinations();
  }, []);

  return (
    <>
      <div className="swiper-block">
        {(destination.images?.length>0) &&<Swiper
          // install Swiper modules
          modules={[Navigation]}
          centeredSlides={false}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop
        >
          {destination.images?.map((image,index) => (
            <SwiperSlide key={index}>
              <div className="swiper-image">
                <img src={image} alt="Images" />
              </div>
            </SwiperSlide>
          ))}
        
        </Swiper>}
      </div>
    </>
  );
}

export default ImageGallery;
