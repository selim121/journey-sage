/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';
import './Header.css';
import img1 from '../../images/slider/1.jpeg';
import img2 from '../../images/slider/2.jpeg';
import img3 from '../../images/slider/3.jpeg';
import img4 from '../../images/slider/4.jpeg';
import img5 from '../../images/slider/5.jpeg';
import Image from 'next/image';

const Header = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <Swiper
                spaceBetween={30}
                effect='fade'
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='h-full md:h-[700px] w-full'>
                        <Image src={img1} alt='' />
                        <div className="slide-content">
                            <div data-aos="zoom-in"
                                data-aos-duration="1000">
                                <h3 className='text-xl md:text-3xl lg:text-6xl xl:text-8xl'><span className="font-bold">Tanguar</span> Haor</h3>
                            </div>
                            <div data-aos="zoom-in"
                                data-aos-duration="2000" className="mt-5 hover:text-white">
                                <button className='bg-[#FF9933] px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3'>Learn more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full md:h-[700px] w-full'>
                        <Image src={img2} alt='' />
                        <div className="slide-content">
                            <div className="">
                                <h3 className='text-xl md:text-3xl lg:text-6xl xl:text-8xl'><span className="font-bold">Saint Martin</span> Island</h3>
                            </div>
                            <div className="mt-5 hover:text-white">
                                <button className='bg-[#FF9933] px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3'>Learn more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full md:h-[700px] w-full'>
                        <Image src={img3} alt='' />
                        <div className="slide-content">
                            <div className="">
                                <h3 className='text-xl md:text-3xl lg:text-6xl xl:text-8xl'><span className="font-bold">Tinap</span> Saitor</h3>
                            </div>
                            <div className="mt-5 hover:text-white">
                                <button className='bg-[#FF9933] px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3'>Learn more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full md:h-[700px] w-full'>
                        <Image src={img4} alt='' />
                        <div className="slide-content">
                            <div className="">
                                <h3 className='text-xl md:text-3xl lg:text-6xl xl:text-8xl'><span className="font-bold">Kaptai</span> Lake</h3>
                            </div>
                            <div className="mt-5 hover:text-white">
                                <button className='bg-[#FF9933] px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3'>Learn more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full md:h-[700px] w-full'>
                        <Image src={img5} alt='' />
                        <div className="slide-content">
                            <div className="">
                                <h3 className='text-xl md:text-3xl lg:text-6xl xl:text-8xl'><span className="font-bold">Cox's</span> Bazar</h3>
                            </div>
                            <div className="mt-5 hover:text-white">
                                <button className='bg-[#FF9933] px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3'>Learn more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
};

export default Header;
