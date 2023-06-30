"use client"
import { useEffect } from 'react';
import Header from '../components/Header/Header.jsx';
import initializeAOS from '../../aosConfig.js';
import AboutPage from './about/page.js';

const Home = () => {

  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <AboutPage />
    </main>
  )
}

export default Home;