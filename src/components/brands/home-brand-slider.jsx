'use client'
import Image from 'next/image'; 
import { Swiper, SwiperSlide } from 'swiper/react';

// brands 
import brand_1 from '@assets/img/brand/brand-2.png';
import brand_2 from '@assets/img/brand/brand-3.png';
import brand_3 from '@assets/img/brand/brand-4.png';
import brand_4 from '@assets/img/brand/brand-5.png';
import brand_5 from '@assets/img/brand/brand-6.png';

const brand_slider = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_1, brand_2, brand_3, brand_4, brand_5,]


const HomeBrandSlider = () => { 
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        className="brand__slider-active swiper-container"
        pagination={{
          el: ".brand-slider-dot",
          clickable: true,
        }}
        breakpoints={{
          '1200': {
            slidesPerView: 5,
          },
          '992': {
            slidesPerView: 3,
          },
          '768': {
            slidesPerView: 3,
          },
          '576': {
            slidesPerView: 2,
          },
          '0': {
            slidesPerView: 2,
          },
        }}
      >
        {brand_slider.map((item, i) => 
          <SwiperSlide key={i} className="brand__thumb">
            <Image src={item} alt="brand" />
          </SwiperSlide>        
        )} 
      </Swiper>
    </>
  );
};

export default HomeBrandSlider;