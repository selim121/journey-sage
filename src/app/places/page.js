/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import img1 from '../../images/places/bisanakandi.jpeg';
import img2 from '../../images/places/coxsbazar.jpeg';
import img3 from '../../images/places/jaflong.jpeg';
import img4 from '../../images/places/kuakata.jpeg';
import img5 from '../../images/places/lalbag.jpeg';
import img6 from '../../images/places/mohasthan.jpeg';
import img7 from '../../images/places/rangamati.jpeg';
import img8 from '../../images/places/ratargul.jpeg';
import img9 from '../../images/places/saintmartin.jpeg';
import img10 from '../../images/places/sajek.jpeg';
import img11 from '../../images/places/sitakundu.jpeg';
import img12 from '../../images/places/sremangal.jpeg';
import img13 from '../../images/places/sundarban.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

const PlaceLists = () => {
    return (
        <>
            <div className="h-[350px] w-60 md:h-[700px] md:w-[600px]">
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent">
                                <p className="text-2xl text-white absolute bottom-0 p-6">Bisanakandi <br /> <span className="text-[#FF9933]">5999 BDT</span></p>
                            </div>
                            <Image src={img1} alt='' className='h-[350px] w-60 md:h-[700px] md:w-[600px] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent">
                                <p className="text-2xl text-white absolute bottom-0 p-6">Cox's Bazar <br /> <span className="text-[#FF9933]">9999 BDT</span></p>
                            </div>
                            <Image src={img2} alt='' className='h-[350px] w-60 md:h-[700px] md:w-[600px] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent">
                                <p className="text-2xl text-white absolute bottom-0 p-6">Jaflong <br /> <span className="text-[#FF9933]">6999 BDT</span></p>
                            </div>
                            <Image src={img3} alt='' className='h-[350px] w-60 md:h-[700px] md:w-[600px] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent">
                                <p className="text-2xl text-white absolute bottom-0 p-6">Kuakata <br /> <span className="text-[#FF9933]">2999 BDT</span></p>
                            </div>
                            <Image src={img4} alt='' className='h-[350px] w-60 md:h-[700px] md:w-[600px] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent">
                                <p className="text-2xl text-white absolute bottom-0 p-6">Lalbag <br /> <span className="text-[#FF9933]">999 BDT</span></p>
                            </div>
                            <Image src={img5} alt='' className='h-[350px] w-60 md:h-[700px] md:w-[600px] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent">
                                <p className="text-2xl text-white absolute bottom-0 p-6">Mohasthan Garh <br /> <span className="text-[#FF9933]">3999 BDT</span></p>
                            </div>
                            <Image src={img6} alt='' className='h-[350px] w-60 md:h-[700px] md:w-[600px] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent">
                                <p className="text-2xl text-white absolute bottom-0 p-6">Rangamati <br /> <span className="text-[#FF9933]">7999 BDT</span></p>
                            </div>
                            <Image src={img7} alt='' className='h-[350px] w-60 md:h-[700px] md:w-[600px] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent">
                                <p className="text-2xl text-white absolute bottom-0 p-6">Ratargul <br /> <span className="text-[#FF9933]">5999 BDT</span></p>
                            </div>
                            <Image src={img8} alt='' className='h-[350px] w-60 md:h-[700px] md:w-[600px] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent">
                                <p className="text-2xl text-white absolute bottom-0 p-6">Saint Martin Island <br /> <span className="text-[#FF9933]">11999 BDT</span></p>
                            </div>
                            <Image src={img9} alt='' className='h-[350px] w-60 md:h-[700px] md:w-[600px] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent">
                                <p className="text-2xl text-white absolute bottom-0 p-6">Sajek Valley <br /> <span className="text-[#FF9933]">6999 BDT</span></p>
                            </div>
                            <Image src={img10} alt='' className='h-[350px] w-60 md:h-[700px] md:w-[600px] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent">
                                <p className="text-2xl text-white absolute bottom-0 p-6">Sitakundu <br /> <span className="text-[#FF9933]">5999 BDT</span></p>
                            </div>
                            <Image src={img11} alt='' className='h-[350px] w-60 md:h-[700px] md:w-[600px] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent">
                                <p className="text-2xl text-white absolute bottom-0 p-6">Sremangal <br /> <span className="text-[#FF9933]">7999 BDT</span></p>
                            </div>
                            <Image src={img12} alt='' className='h-[350px] w-60 md:h-[700px] md:w-[600px] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent">
                                <p className="text-2xl text-white absolute bottom-0 p-6">Sundarban <br /> <span className="text-[#FF9933]">7999 BDT</span></p>
                            </div>
                            <Image src={img13} alt='' className='h-[350px] w-60 md:h-[700px] md:w-[600px] object-cover' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default PlaceLists;
