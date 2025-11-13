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
    <div className="mt-18 mb-10 bg-[#F5F7FA]">
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
        className="max-w-7xl mx-auto"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between bg-[#F5F7FA] px-6 md:px-10">
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-accent">
                Keep Our City Clean
              </h1>
              <p className="text-md md:text-lg text-accent">
                Join hands to report garbage and ensure a cleaner, healthier
                community for everyone.
              </p>
              <button className="px-6 py-3 bg-green-500 text-white font-bold text-md rounded-md shadow-md hover:bg-black transition-transform hover:scale-105">
                Report Garbage Now
              </button>
            </div>

            <div className="md:w-1/2 flex justify-center py-8">
              <img
                src="https://i.ibb.co.com/0Wb5JZW/garbage.png"
                className="md:h-[400px] h-[200px]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between bg-[#F5F7FA]  px-6 md:px-10">
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-accent">
                Sort Smart, Live Green
              </h1>
              <p className="text-md md:text-lg text-accent">
                Proper recycling is the first step to a litter-free city. Learn
                the local guidelines and help us keep valuable materials out of
                our landfills.
              </p>
              <button className="px-6 py-3 bg-green-500 text-white font-bold text-md rounded-md shadow-md hover:bg-black transition-transform hover:scale-105">
                View Recycling Guidelines
              </button>
            </div>

            <div className="md:w-1/2 flex justify-center py-8">
              <img
                src="https://i.ibb.co.com/tTqNhNmB/recycling.png"
                className="md:h-[400px] h-[200px]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between bg-[#F5F7FA]  px-6 md:px-10">
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-accent">
                Plant a Tree, Grow Our Future
              </h1>
              <p className="text-md md:text-lg text-accent">
                Participate in our urban greening initiative. Trees clean our
                air, reduce energy costs, and make our neighborhoods more
                beautiful and sustainable.
              </p>
              <button className="px-6 py-3 bg-green-500 text-white font-bold text-md rounded-md shadow-md hover:bg-black transition-transform hover:scale-105">
                Join a Planting Event
              </button>
            </div>

            <div className="md:w-1/2 flex justify-center py-8">
              <img
                src="https://i.ibb.co.com/gMkqL7zZ/Asset-1.png"
                className="md:h-[400px] h-[200px]"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
