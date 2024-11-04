import { useEffect, useRef, useState } from 'react';
import HomePage from './components/homePage';
import Navbar from './components/navbar';
import Pagetwo from './components/Pagetwo';
import Pagethree from './components/Pagethree';
import Pagefour from './components/Pagefour';
import Threecard from './components/three_Card';
import Nightmode from './components/Nightmode';
import Nighttransiton from './components/Nighttransition';

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  const homeRef = useRef(null);
  const pageTwoRef = useRef(null);
  const pageThreeRef = useRef(null);
  const pageFourRef = useRef(null);
  const threeCardRef = useRef(null);
  const nightModeRef = useRef(null);
  const nightTransitionRef = useRef(null);

  const sections = [
    { ref: homeRef, component: <HomePage /> },
    { ref: pageTwoRef, component: <Pagetwo /> },
    { ref: pageThreeRef, component: <Pagethree /> },
    { ref: pageFourRef, component: <Pagefour /> },
    { ref: threeCardRef, component: <Threecard /> },
    { ref: nightModeRef, component: <Nightmode /> },
    { ref: nightTransitionRef, component: <Nighttransiton /> },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust threshold for when the section becomes "visible"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
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
      
      <div className=''>
        <div id="HomePage" ref={homeRef} className={`p-4 flex flex-col ${activeSection === 'HomePage' ? 'transition-opacity opacity-100' : 'transition-opacity opacity-0'}`}>
          <HomePage />
        </div>
        <div id="PageTwo" ref={pageTwoRef} className={`p-4 flex-col ${activeSection === 'PageTwo' ? 'transition-opacity opacity-100' : 'transition-opacity opacity-0'}`}>
          <Pagetwo />
        </div>
        <div id="Pagethree" ref={pageThreeRef} className={`p-4 flex-col ${activeSection === 'Pagethree' ? 'transition-opacity opacity-100' : 'transition-opacity opacity-0'}`}>
          <Pagethree />
        </div>
        <div id="Pagefour" ref={pageFourRef} className={`p-4 flex-col ${activeSection === 'Pagefour' ? 'transition-opacity opacity-100' : 'transition-opacity opacity-0'}`}>
          <Pagefour />
        </div>
        <div id="threecard" ref={threeCardRef} className={`p-4 flex-col ${activeSection === 'threecard' ? 'transition-opacity opacity-100' : 'transition-opacity opacity-0'}`}>
          <Threecard />
        </div>
        <div id="Nightmode" ref={nightModeRef} className={`p-4 flex-col ${activeSection === 'Nightmode' ? 'transition-opacity opacity-100' : 'transition-opacity opacity-0'}`}>
          <Nightmode />
        </div>
        <div id="Nighttransition" ref={nightTransitionRef} className={`p-4 flex-col ${activeSection === 'Nighttransition' ? 'transition-opacity opacity-100' : 'transition-opacity opacity-0'}`}>
          <Nighttransiton />
        </div>
      </div>
    </div>
  );
};

export default App;
