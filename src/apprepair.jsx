import { useEffect, useRef, useState, useMemo } from 'react';
import HomePage from './components/homePage';
import Navbar from './components/navbar';
import Pagetwo from './components/Pagetwo';
import Pagethree from './components/Pagethree';
import Pagefour from './components/Pagefour';
import Threecard from './components/three_Card';
import Nightmode from './components/Nightmode';
import Nighttransitontwo from './components/Nighttransitiontwo';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const App = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [scrollPosition, setScrollPosition] = useState(0);

  // Refs for each section
  const homeRef = useRef(null);
  const pageTwoRef = useRef(null);
  const pageThreeRef = useRef(null);
  const pageFourRef = useRef(null);
  const threeCardRef = useRef(null);

  // Memoized array of section objects with IDs and references
  const sections = useMemo(() => [
    { id: 'HomePage', ref: homeRef, component: <HomePage /> },
    { id: 'PageTwo', ref: pageTwoRef, component: <Pagetwo /> },
    { id: 'Pagethree', ref: pageThreeRef, component: <Pagethree /> },
    { id: 'Pagefour', ref: pageFourRef, component: <Pagefour /> },
    { id: 'threecard', ref: threeCardRef, component: <Threecard /> },
  ], []);

  // Update scroll position for the parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to track visibility of each section
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set(prev).add(entry.target.id));
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [sections]);

  // Styles for the parallax layer to adjust scale and opacity based on scroll position
  const getNighttransitionStyles = () => {
    const opacity = scrollPosition > 0 ? Math.min(1, scrollPosition / window.innerHeight) : 0;
    const scale = scrollPosition > 0 ? 1 + (scrollPosition / window.innerHeight) * 0.5 : 1;

    return {
      opacity,
      transform: `scale(${scale})`,
    };
  };

  return (
    <div>
      <div className='fixed z-50'>
        <Navbar />
      </div>

      <div className='space-y-[120px]'>
        {sections.map(section => (
          <div
            key={section.id}
            id={section.id}
            ref={section.ref}
            className={`p-4 flex flex-col transition-opacity transform ${
              visibleSections.has(section.id) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {section.component}
          </div>
        ))}
      </div>

      {/* Parallax layers for visual effects */}
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0.05} style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}>
          <div id="Nightmode" className="p-4 bg-contain">
            <Nightmode />
          </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1} 
          speed={0.05} 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
            ...getNighttransitionStyles()
          }}
        >
          <div id="Nighttransitiontwo" className="p-4 bg-contain">
            <Nighttransitontwo />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
