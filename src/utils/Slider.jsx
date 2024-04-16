import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Mail from "../assets/mail.svg";

import { Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className={"flex items-center justify-center"}>
          <img src={Mail} className={"w-36 flex"} alt="" />
        </SwiperSlide>

        <SwiperSlide className={"flex items-center justify-center"}>
          <img src={Mail} className={"w-36 flex"} alt="" />
        </SwiperSlide>

        <SwiperSlide className={"flex items-center justify-center"}>
          <img src={Mail} className={"w-36 flex"} alt="" />
        </SwiperSlide>

        <SwiperSlide className={"flex items-center justify-center"}>
          <img src={Mail} className={"w-36 flex"} alt="" />
        </SwiperSlide>

        <SwiperSlide className={"flex items-center justify-center"}>
          <img src={Mail} className={"w-36 flex"} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
