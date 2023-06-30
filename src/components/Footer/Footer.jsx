import React from 'react';
import './Footer.css';
import Link from 'next/link';
import { AiFillFacebook, AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai';

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    const currentYear = getCurrentYear();

    return (
        <div>
            <div className="hero footer-bg">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex flex-col py-16">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-white border-b space-x-9 pb-6">
                        <div className="md:py-12 space-y-2">
                            <h1 className="text-[#FF9933] text-3xl font-bold pb-6">JourneySage</h1>
                            <p>10/7, Shekhertek, Adabor, Dhaka - 1207</p>
                            <p>+8801773407976</p>
                            <p>selimhossain.sh1@gmail.com</p>
                        </div>
                        <div className="flex flex-col border-l ps-4 space-y-2 uppercase">
                            <Link href={'#about'}>About</Link>
                            <Link href={'#blogs'}>Blogs</Link>
                            <Link href={'#contact'}>contact</Link>
                            <Link href={'#travel-tips'}>Travel Tips</Link>
                            <Link href={'#gallery'}>Gallery</Link>
                        </div>
                        <div className="flex flex-col border-l ps-4 space-y-2 uppercase">
                            <p>Cox&#39;s Bazar</p>
                            <p>Tangoar Haor</p>
                            <p>Bandarban</p>
                            <p>Saint Martin</p>
                            <p>Sitakundu</p>
                        </div>
                        <div className="uppercase border-l ps-4 space-y-2">
                            <p>Follow us</p>
                            <div className="grid grid-cols-2">
                                <AiFillFacebook size={35} />
                                <AiFillLinkedin size={35} />
                                <AiFillGithub size={35} />
                                <AiFillTwitterSquare size={35} />
                            </div>
                            <div className="join text-black">
                                <input className="input input-bordered join-item" placeholder="Email" />
                                <button className="btn bg-[#FF9933] join-item rounded-r-full">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <p className="font-light text-white text-sm py-6">Copyright <span>&copy; {currentYear} Selim. All Right Reserved</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;