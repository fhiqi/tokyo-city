import { useEffect, useRef, useState } from 'react';
import shinkansenImg from "../assets/shinkansenbg.svg";

const Pagetwo = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // Aktifkan saat 50% teks terlihat
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsTextVisible(true); // Aktifkan efek transisi
          observer.unobserve(entry.target); // Hentikan pengamatan setelah terlihat pertama kali
        }
      });
    }, observerOptions);

    if (textRef.current) {
      observer.observe(textRef.current);
    }

  }, []);

  return (
    <div id="Pagetwo" className="w-auto font-figtree ">
        <h1 ref={textRef}
          className={`ml-2 text-8xl font-medium  leading-[128px] text-black transition-opacity duration-700 ${
            isTextVisible ? 'slide-in-bottom' : 'opacity-0'
          }`}
        >
        Shinkansen</h1>

        <div className="bg-cover bg-center self-stretch" style={{ backgroundImage: `url(${shinkansenImg})`,height: '324px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center' }}>
        </div>
        <div className="text-lg mt-4">
            <span> The 
                <span className="text-orange-500"> Shinkansen </span>, also known as the bullet train, is Japan’s high-speed rail network, renowned for its precision, efficiency, and cutting-edge technology, offering seamless travel across the country</span>
        </div>
    </div>
  );
};

export default Pagetwo;
