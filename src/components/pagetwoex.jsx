import { useEffect, useRef, useState } from 'react';
import shinkansenImage from '../assets/shinkansenbg.svg'; // Sesuaikan path gambar

const Pagetwo = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Aktifkan saat 50% teks terlihat
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

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="p-4 flex flex-col items-center">
      <img src={shinkansenImage} alt="Shinkansen" className="w-full h-auto rounded-lg shadow-lg" />
      <h2
        ref={textRef}
        className={`mt-4 text-3xl font-bold text-gray-800 transition-opacity duration-700 ${
          isTextVisible ? 'slide-in-bottom' : 'opacity-0'
        }`}
      >
        Shinkansen
      </h2>
    </div>
  );
};

export default Pagetwo;
