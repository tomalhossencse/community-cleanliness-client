import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
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
  EffectFade,
} from "swiper/modules";
const Banner = () => {
  return (
    <div className="mt-20 mb-10 max-w-7xl mx-auto">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="rounded-xl shadow-2xl"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/YT0kTZjZ/vvills-8am2t-EI6a-Eg-unsplash.jpg"
              alt="Community clean-up"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-5">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-3 text-center drop-shadow-lg">
              Keep Our City Clean
            </h1>
            <p className="text-lg md:text-xl max-w-4xl text-center mb-6 drop-shadow-md">
              Join hands to report garbage and ensure a cleaner, healthier
              community for everyone.
            </p>

            <button className="px-8 py-3 bg-green-500 text-white font-bold text-lg rounded-full shadow-xl hover:bg-green-600 transition duration-300 transform hover:scale-105">
              Report Garbage Now
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/Fb61zY3T/julianna-kuzmina-l-Ga-SLuba-QFQ-unsplash.jpg"
              alt="City construction view"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-5">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-3 text-center drop-shadow-lg">
              Stop Illegal Constructions
            </h1>
            <p className="text-lg md:text-xl max-w-4xl text-center mb-6 drop-shadow-md">
              Report unauthorized buildings or encroachments in your community.
              Together, we can protect public spaces and ensure safe urban
              development.
            </p>

            <button className="px-8 py-3 bg-red-600 text-white font-bold text-lg rounded-full shadow-xl hover:bg-red-700 transition duration-300 transform hover:scale-105">
              Report Unauthorized Building
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/HpgHhhq4/yves-cedric-schulze-s-Pi-E3gl-WEY-unsplash.jpg"
              alt="Broken street lamp"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-5">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-3 text-center drop-shadow-lg">
              Report Broken Public Property
            </h1>
            <p className="text-lg md:text-xl max-w-4xl text-center mb-6 drop-shadow-md">
              Help maintain your city! Report damaged benches, streetlights, or
              public structures to keep the environment safe and functional for
              everyone.
            </p>

            <button className="px-8 py-3 bg-indigo-500 text-white font-bold text-lg rounded-full shadow-xl hover:bg-indigo-600 transition duration-300 transform hover:scale-105">
              Report Damage
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/spvrbSsM/craig-chilton-13dud-PW47e-Q-unsplash.jpg"
              alt="Road pothole"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-5">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-3 text-center drop-shadow-lg">
              Report Road Damage
            </h1>
            <p className="text-lg md:text-xl max-w-4xl text-center mb-6 drop-shadow-md">
              Potholes and damaged roads cause accidents and delays. Report
              damaged roads in your area and help local authorities take quick
              action to ensure safe travel for everyone.
            </p>

            <button className="px-8 py-3 bg-yellow-500 text-black font-bold text-lg rounded-full shadow-xl hover:bg-yellow-600 transition duration-300 transform hover:scale-105">
              Report Pothole
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
