import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//images

import SliderOne from "../../../assets/Banner.png";
import shopii from "../../../assets/shopii.png";

const SlideBanner = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-full w-full cover">
            <img src={SliderOne} alt="" />
            <div className="slider-text">
              <h2>
                Personalized Eyeglass <br />
                Shopping
              </h2>
              <button className="mt-12  py-4 px-[2.5rem] bg-[#383838] border rounded-[5px] text-[#FFFFFF] flex items-center space-x-3">
                <div className="w-4 h-4">
                  <img src={shopii} className="w-full h-full" alt="" />
                </div>
                <h1 className="text-lg">Buy Now</h1>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full cover">
            <img src={SliderOne} alt="" />
            <div className="slider-text">
              <h2>
                Personalized Eyeglass <br />
                Shopping
              </h2>
              <button className="mt-12  py-4 px-[2.5rem] bg-[#383838] border rounded-[5px] text-[#FFFFFF] flex items-center space-x-3">
                <div className="w-4 h-4">
                  <img src={shopii} className="w-full h-full" alt="" />
                </div>
                <h1 className="text-lg">Buy Now</h1>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full cover">
            <img src={SliderOne} alt="" />
            <div className="slider-text">
              <h2>
                Personalized Eyeglass <br />
                Shopping
              </h2>
              <button className="mt-12  py-4 px-[2.5rem] bg-[#383838] border rounded-[5px] text-[#FFFFFF] flex items-center space-x-3">
                <div className="w-4 h-4">
                  <img src={shopii} className="w-full h-full" alt="" />
                </div>
                <h1 className="text-lg">Buy Now</h1>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SlideBanner;
