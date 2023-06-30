import AOS from 'aos';
import 'aos/dist/aos.css';

const initializeAOS = () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });
};

export default initializeAOS;
