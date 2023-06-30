import AOS from 'aos';
import 'aos/dist/aos.css';

const initializeAOS = () => {
  AOS.init({
    // Add your AOS configuration options here
    duration: 800, // Duration of animations (in milliseconds)
    easing: 'ease-in-out', // Easing function for animations
    once: true, // Whether animations should only happen once
    mirror: false, // Whether elements should animate out while scrolling past them
  });
};

export default initializeAOS;
