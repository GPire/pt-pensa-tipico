import React from "react";
import PropType from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const SliderCard = ({ title /*, products */ }) => {
  return (
    <div className="row">
      <div className="col">
        <p>{title}</p>
        <Swiper slidesPerView={3} spaceBetween={20} navigation={true} modules={[Navigation]} className="mySwiper">
          <div className="col-5 col-sm-5 col-md-8">
            <div className="col">
              <SwiperSlide>Turriga 2008 </SwiperSlide>

              <SwiperSlide>Papassini </SwiperSlide>

              <SwiperSlide>Pesto</SwiperSlide>

              <SwiperSlide>Akenta Sub</SwiperSlide>

              <SwiperSlide>Seadas </SwiperSlide>

              <SwiperSlide>Focaccia </SwiperSlide>

              <SwiperSlide>Slide 7 </SwiperSlide>

              <SwiperSlide>Slide 8 </SwiperSlide>

              <SwiperSlide>Slide 9 </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

SliderCard.propTypes = {
  title: PropType.string,
  products: PropType.array,
};

export default SliderCard;
