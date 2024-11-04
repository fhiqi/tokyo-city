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
  const [scrollPosition, setScrollPosition] = useState("#");
  const [visibleSections, setVisibleSections] = useState(new Set());

  const homeRef = useRef(null);
  const pageTwoRef = useRef(null);
  const pageThreeRef = useRef(null);
  const pageFourRef = useRef(null);
  const threeCardRef = useRef(null);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity and scale for Nighttransitiontwo layer based on scroll position
  const getNighttransitionStyles = () => {
    const opacity = scrollPosition > 0 ? Math.min(1, scrollPosition / window.innerHeight) : 0;
    const scale = scrollPosition > 0 ? 1 + (scrollPosition / window.innerHeight) * 0 : 1;

    return {
      opacity,
      transform: `scale(${scale})`,
    };
  };

  const sections = useMemo(() => [
    { id: 'HomePage', ref: homeRef, component: <HomePage /> },
    { id: 'PageTwo', ref: pageTwoRef, component: <Pagetwo /> },
    { id: 'Pagethree', ref: pageThreeRef, component: <Pagethree /> },
    { id: 'Pagefour', ref: pageFourRef, component: <Pagefour /> },
    { id: 'threecard', ref: threeCardRef, component: <Threecard /> },
  ], []);

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

  return (
    <div>
      <div className='fixed z-50'>
        <Navbar />
      </div>

      <div id='transisielemen' className='space-y-[120px]'>
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

        {/* Move the parallax div here to be at the end of transisielemen */}
        <div className='parallax'>
          <Parallax pages={2} style={{ height: '100%', overflow:'hidden'}}>
            {/* Layer untuk Nightmode */}
            <ParallaxLayer offset={0} speed={0.05}>
              <div id="Nightmode" className="p-4 bg-contain">
                <Nightmode />
              </div>
            </ParallaxLayer>

            {/* Layer untuk Nighttransitiontwo dengan efek scroll */}
            <ParallaxLayer 
              offset={1} 
              speed={0.05}
              style={{
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
      </div>
    </div>
  );
};

export default App;
