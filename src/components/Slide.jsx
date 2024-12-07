import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';

import c19 from '../assets/c19.png';
import c18 from '../assets/c18.png';
import c17 from '../assets/c17.png';
import c16 from '../assets/c16.png';
import c15 from '../assets/c15.png';
import c14 from '../assets/c14.png';
import c13 from '../assets/c13.png';
import c12 from '../assets/c12.png';
import c11 from '../assets/c11.png';
import c10 from '../assets/c10.png';
import c9 from '../assets/c9.png';
import c8 from '../assets/c8.png';
import c7 from '../assets/c7.png';
import c6 from '../assets/c6.png';
import c5 from '../assets/c5.png';
import icpepcert from '../assets/icpepcert.png';
import c4 from '../assets/c4.png';
import c3 from '../assets/c3.png';
import c2 from '../assets/c2.png';
import c1 from '../assets/c1.png';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

const Slide = () => {
  return (
    <div>
      <h2 className='flex justify-center items-center font-bold text-white'>CERTIFICATES</h2>
      <br/>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: -75,
          depth: 250,
          modifier: 3.5,
          slidesShadows: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
      >
      
        <SwiperSlide><img src={c19} alt='c19.png' /></SwiperSlide>
        <SwiperSlide><img src={c18} alt='c18.png' /></SwiperSlide>
        <SwiperSlide><img src={c17} alt='c17.png' /></SwiperSlide>
        <SwiperSlide><img src={c16} alt='c16.png' /></SwiperSlide>
        <SwiperSlide><img src={c15} alt='c15.png' /></SwiperSlide>
        <SwiperSlide><img src={c14} alt='c14.png' /></SwiperSlide>
        <SwiperSlide><img src={c13} alt='c13.png' /></SwiperSlide>
        <SwiperSlide><img src={c12} alt='c12.png' /></SwiperSlide>
        <SwiperSlide><img src={c11} alt='c11.png' /></SwiperSlide>
        <SwiperSlide><img src={c10} alt='c10.png' /></SwiperSlide>
        <SwiperSlide><img src={c9} alt='c9.png' /></SwiperSlide>
        <SwiperSlide><img src={c8} alt='c8.png' /></SwiperSlide>
        <SwiperSlide><img src={c7} alt='c7.png' /></SwiperSlide>
        <SwiperSlide><img src={c6} alt='c6.png' /></SwiperSlide>
        <SwiperSlide><img src={c5} alt='c5.png' /></SwiperSlide>
        <SwiperSlide><img src={icpepcert} alt='icpepcert.png' /></SwiperSlide>
        <SwiperSlide><img src={c4} alt='c4.png' /></SwiperSlide>
        <SwiperSlide><img src={c3} alt='c3.png' /></SwiperSlide>
        <SwiperSlide><img src={c2} alt='c2.png' /></SwiperSlide>
        <SwiperSlide><img src={c1} alt='c1.png' /></SwiperSlide>
        
        <div className='slider-nav'>
          <div className='swiper-button-prev'>
            <ArrowLeft size={20} />
          </div>
          <div className='swiper-button-next'>
            <ArrowRight size={20} />
          </div>
        </div>
      </Swiper>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Slide;
