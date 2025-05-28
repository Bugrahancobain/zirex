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
                <SwiperSlide><img src="/homeSlider1.png" alt="Zirex_Kağıt_Home_Slider.png" /></SwiperSlide>
                <SwiperSlide><img src="/homeSlider2.png" alt="Zirex_Kağıt_Home_Slider.png" /></SwiperSlide>
                <SwiperSlide><img src="/homeSlider3.png" alt="Zirex_Kağıt_Home_Slider.png" /></SwiperSlide>
                <SwiperSlide><img src="/homeSlider4.png" alt="Zirex_Kağıt_Home_Slider.png" /></SwiperSlide>
            </Swiper>
        </>
    );
}
