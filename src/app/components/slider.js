"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import '../style/slider.css';

export default function App() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                navigation
                autoplay={{ delay: 5000 }}
                loop
                className="mySwiper"
            >
                <SwiperSlide><img src="/homeSlider1.jpeg" alt="Zirex_Kağıt_Home_Slider.jpeg" /></SwiperSlide>
                <SwiperSlide><img src="/homeSlider2.jpeg" alt="Zirex_Kağıt_Home_Slider.jpeg" /></SwiperSlide>
                <SwiperSlide><img src="/homeSlider3.jpeg" alt="Zirex_Kağıt_Home_Slider.jpeg" /></SwiperSlide>
                <SwiperSlide><img src="/homeSlider4.jpeg" alt="Zirex_Kağıt_Home_Slider.jpeg" /></SwiperSlide>
            </Swiper>
        </>
    );
}
