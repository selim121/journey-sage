"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import close from '../../images/icons/close.svg';
import open from '../../images/icons/hamburger-menu.svg';

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            document.querySelector('nav').classList.add('bg-gray-900');
        } else {
            document.querySelector('nav').classList.remove('bg-gray-900');
        }
    };

    return (
        <div>
            <nav className=' fixed top-0 left-0 right-0 z-10'>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/">
                                <h2 className="text-2xl text-[#FF9933] font-bold ">JourneySage</h2>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <Image src={close} width={30} height={30} alt="logo" />
                                    ) : (
                                        <Image
                                            src={open}
                                            width={30}
                                            height={30}
                                            alt="logo"
                                            className="focus:border-none active:border-none"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#FF9933]  border-[#FF9933]  md:hover:text-[#F48925] md:hover:bg-transparent">
                                    <Link href="/about" onClick={() => setNavbar(!navbar)}>
                                        About
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#F48925]  border-[#FF9933]  md:hover:text-[#F48925] md:hover:bg-transparent">
                                    <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                                        Blogs
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#F48925]  border-[#FF9933]  md:hover:text-[#F48925] md:hover:bg-transparent">
                                    <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                                        Contact
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#F48925]  border-[#FF9933]  md:hover:text-[#F48925] md:hover:bg-transparent">
                                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                                        Travel Trips
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
