import { useEffect, useRef, useState } from 'react';
import "./App.css"
import FirstPage from "./components/homePage"
import Vopening from './assets/Video/opening.mp4';
import Navbar from './components/navbar';
import Pagetwo from './components/Pagetwo';
import Pagethree from './components/Pagethree';
import Pagefour from './components/Pagefour';
import Threecard from './components/three_Card';
import Chocolate from './components/Coba parallax/chocolate';
import Sora from "./components/SoraTransition"
import Darkmode from "./components/ihzan/homePageDark";
import Ninja from "./assets/chocolate/ladysamurai.jpeg" 
import "./components/Landingggg/Slider.css"


const App = () => {
  const [isSoraFixed, setIsSoraFixed] = useState(false); // State untuk posisi Sora
  const soraPlaceholderRef = useRef(null); // Ref untuk placeholder Sora
  const soraRef = useRef(null); // Ref untuk elemen Sora
  const [showVideo, setShowVideo] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);



  // Intersection Observer untuk elemen Sora
  useEffect(() => {
    const handleScroll = () => {
      if (soraPlaceholderRef.current && soraRef.current) {
        const placeholderTop = soraPlaceholderRef.current.getBoundingClientRect().top;

        if (placeholderTop <= 100) {
          setIsSoraFixed(true);
        } else {
          setIsSoraFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Function to handle video end
  const handleVideoEnd = () => {
    setFadeOut(true); // Start fading out
    setTimeout(() => {
      setShowVideo(false); // Hide video after fade-out
    }, 1000); // Duration of fade-out (match CSS transition)
  };

  return (
    <div className='flex flex-col width: "100wh", height:"100vh"'>
        {showVideo && (
            <div
            className={`fixed inset-0 z-50 bg-black flex justify-center items-center transition-opacity duration-1000 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
            >
            <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                onEnded={handleVideoEnd}
            >
                <source src={Vopening} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
        )}
        <div className="fixed z-50">
          <header>
           <Navbar/>
          </header>
        </div>
        <div style={{paddingBottom:"100px"}} className='Slider'>
          <FirstPage/>
        </div>
        <div className='p-4 space-y-[120px]'>
            <div>
                <Pagetwo/>
            </div>
            <div>
                <Pagethree/>
            </div>
            <div>
                <Pagefour/>
            </div>
            <div className='pb-[100px]'>
                <Threecard/>
            </div>
        </div>
      
        <div style={{ position: "relative", width: "100wh", height:"100vh",top:"40px" }}>
          {/* Nightmode akan berada di bawah */}
          
            <div className="App">
                <Chocolate />
            </div>
            <div className='relative mb-[10%]'>
                <Darkmode/>
            </div>
            <footer>
                <div className='ninjacontainer'>
                    <div className='imagemask2'>
                        <img src={Ninja} alt="Ninja" />    
                    </div>
                </div>

                <div
                ref={soraPlaceholderRef}
                style={{
                    height: soraRef.current?.offsetHeight || 0, // Tinggi placeholder sama dengan tinggi elemen Sora
                }}
                />
                
                {/* Elemen Sora */}
                <div
                ref={soraRef}
                style={{
                    position: isSoraFixed ? 'fixed' : 'relative',
                    top: 0,
                    left: 0,
                    width:'100vw',
                    zIndex: 10,
                }}
                >
                <Sora />
                </div>
            </footer>
        </div>
    </div>
  );
};

export default App;
