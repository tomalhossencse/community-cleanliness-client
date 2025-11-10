import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
const Banner = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("Slide changed")}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/7JL7jG4y/engin-akyurt-M2-W0-J6-Sqi-Sg-unsplash.jpg"
              alt="Community"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Keep Our City Clean
            </h1>
            <p className="text-lg md:text-xl max-w-4xl text-center">
              Join hands to report garbage and ensure a cleaner, healthier
              community for everyone.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/Fb61zY3T/julianna-kuzmina-l-Ga-SLuba-QFQ-unsplash.jpg"
              alt="Community"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Stop Illegal Constructions
            </h1>
            <p className="text-lg md:text-xl max-w-4xl text-center">
              Report unauthorized buildings or encroachments in your community.
              Together, we can protect public spaces and ensure safe urban
              development.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/7JL7jG4y/engin-akyurt-M2-W0-J6-Sqi-Sg-unsplash.jpg"
              alt="Community"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Report Broken Public Property
            </h1>
            <p className="text-lg md:text-xl max-w-4xl text-center">
              Help maintain your city! Report damaged benches, streetlights, or
              public structures to keep the environment safe and functional for
              everyone.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/7JL7jG4y/engin-akyurt-M2-W0-J6-Sqi-Sg-unsplash.jpg"
              alt="Community"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Report Road Damage
            </h1>
            <p className="text-lg md:text-xl max-w-4xl text-center">
              Potholes and damaged roads cause accidents and delays. Report
              damaged roads in your area and help local authorities take quick
              action to ensure safe travel for everyone.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
