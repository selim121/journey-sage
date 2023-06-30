import React from 'react';
import img from '../../../images/others/waterfall.webp';
import Image from 'next/image';
import { VscDebugBreakpointLog } from 'react-icons/vsc';

const AboutPage = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-20 px-4">
                <div className="md:col-span-2 space-y-4">
                    <h1 className='text-4xl font-bold border-l-8 border-[#FF9933] ps-3'>Why do you choose us?</h1>
                    <div className="flex flex-row items-center px-6 gap-4">
                        <VscDebugBreakpointLog size={'50'} color='#FF9933' />
                        <p className="text-justify">
                            <span className="font-bold">Travel Advice:</span> JourneySage offers a wealth of travel advice, tips, and recommendations, helping travelers plan their trips effectively and navigate through various destinations.
                        </p>
                    </div>
                    <div className="flex flex-row items-center px-6 gap-4">
                        <VscDebugBreakpointLog size={'50'} color='#FF9933' />
                        <p className="text-justify">
                            <span className="font-bold">Destination Exploration:</span> JourneySage enables users to explore a diverse range of destinations worldwide, uncovering hidden gems and popular attractions alike. It offers detailed information about cities, landmarks, cultural sites, and natural wonders.
                        </p>
                    </div>
                    <div className="flex flex-row items-center px-6 gap-4">
                        <VscDebugBreakpointLog size={'50'} color='#FF9933' />
                        <p className="text-justify">
                            <span className="font-bold">Personalized Itineraries:</span> JourneySage assists travelers in creating personalized itineraries based on their preferences, interests, and available time. It suggests optimized routes, must-see attractions, dining options, and accommodations to suit their specific needs.
                        </p>
                    </div>
                    <div className="flex flex-row items-center px-6 gap-4">
                        <VscDebugBreakpointLog size={'50'} color='#FF9933' />
                        <p className="text-justify">
                            <span className="font-bold">Local Insights:</span> JourneySage leverages local knowledge and expertise, providing authentic and off-the-beaten-path recommendations to help travelers discover unique experiences and immerse themselves in local culture.
                        </p>
                    </div>
                    <div className="flex flex-row items-center px-6 gap-4">
                        <VscDebugBreakpointLog size={'50'} color='#FF9933' />
                        <p className="text-justify">
                            <span className="font-bold">Travel Resources:</span> JourneySage serves as a comprehensive resource hub, offering practical tools such as currency converters, weather forecasts, language translation guides, and transportation information to facilitate seamless travel planning.
                        </p>
                    </div>
                    <div className="flex flex-row items-center px-6 gap-4">
                        <VscDebugBreakpointLog size={'50'} color='#FF9933' />
                        <p className="text-justify">
                            <span className="font-bold">Community Interaction:</span> JourneySage fosters an engaged community of travelers who can share their own experiences, tips, and recommendations, creating a platform for exchanging travel stories and connecting with like-minded explorers.
                        </p>
                    </div>
                    <div className="flex flex-row items-center px-6 gap-4">
                        <VscDebugBreakpointLog size={'50'} color='#FF9933' />
                        <p className="text-justify">
                            <span className="font-bold">Visual Inspiration:</span> JourneySage showcases stunning visuals, including captivating photographs, immersive virtual tours, and 360-degree views, inspiring travelers and igniting their wanderlust.
                        </p>
                    </div>
                </div>
                <div className="">
                    <Image src={img} alt='waterfall' />
                </div>
            </div>
        </>
    );
};

export default AboutPage;