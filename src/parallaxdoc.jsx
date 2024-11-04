import { useEffect, useRef, useState } from 'react';
import HomePage from './components/homePage';
import Navbar from './components/navbar';
import Pagetwo from './components/Pagetwo';
import Pagethree from './components/Pagethree';
import Pagefour from './components/Pagefour';
import Threecard from './components/three_Card';
import Nightmode from './components/Nightmode';
//import Nighttransiton from './components/Nighttransition';
import Nighttransitontwo from './components/Nighttransitiontwo';
//import nightMountain from "./assets/Mountainight.svg"
import nigtMode from "./assets/natureNightmode.svg"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import shinkansenImg from "./assets/shinkansenbg.svg";

const App = () => {
  const [visibleSections, setVisibleSections] = useState(new Set()); // Track visible sections

  const homeRef = useRef(null);
  const pageTwoRef = useRef(null);
  const pageThreeRef = useRef(null);
  const pageFourRef = useRef(null);
  const threeCardRef = useRef(null);
  const nightModeRef = useRef(null);
  //const nightTransitionRef = useRef(null);
  const nightTransitiontwoRef = useRef(null);

  const sections = [
    { id: 'HomePage', ref: homeRef, component: <HomePage /> },
    { id: 'PageTwo', ref: pageTwoRef, component: <Pagetwo /> },
    { id: 'Pagethree', ref: pageThreeRef, component: <Pagethree /> },
    { id: 'Pagefour', ref: pageFourRef, component: <Pagefour /> },
    { id: 'threecard', ref: threeCardRef, component: <Threecard /> },
    { id: 'Nightmode', ref: nightModeRef, component: <Nightmode /> },
    //{ id: 'Nighttransition', ref: nightTransitionRef, component: <Nighttransiton /> },
    { id: 'Nighttransitiontwo', ref: nightTransitiontwoRef, component: <Nighttransitontwo /> },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set(prev).add(entry.target.id)); // Add to visible sections
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [sections]);

  return (
    <div>
      <div className='fixed z-50'>
        <Navbar />
      </div>
      
      <div className='space-y-[px]'>
        {sections.map(section => (
          <div
            key={section.id}
            id={section.id}
            ref={section.ref}
            className={`p-4 flex flex-col transition-opacity transform ${
              visibleSections.has(section.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {section.component}
          </div>
        ))}
      </div>
      <div>
        <Parallax pages={4}>
          <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${shinkansenImg})`,
            backgroundSize:'cover'
          }}
          >
          
          </ParallaxLayer>

          <ParallaxLayer offset={3.2} speed={2}>
          <div id="Nighttransitontwo" className="p-4 flex-col">
            <Nighttransitontwo />
          </div>
          </ParallaxLayer>

          <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${nigtMode})`,
            backgroundSize:'contain'
          }}
          >
          
          </ParallaxLayer>

          <ParallaxLayer offset={0.2} speed={0.05}>
          <div id="Nightmode" className="p-4 flex-col">
            <Nightmode />
          </div>
          </ParallaxLayer>

        </Parallax>
      </div>
    </div>
  );
};

export default App;
