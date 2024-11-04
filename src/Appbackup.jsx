import HomePage from './components/homePage';
import Navbar from './components/navbar';
import Pagetwo from './components/Pagetwo';
import Pagethree from './components/Pagethree';
import Pagefour from './components/Pagefour';
import Threecard from './components/three_Card'
import Nightmode from './components/Nightmode';
import Nighttransiton from './components/Nighttransition';

const App = () => {
  return (
    <div className=''>
      <div className='fixed z-50'>
        <Navbar />
      </div>
      
        <div id="HomePage" className="p-4 flex flex-col">
          <HomePage />
        </div>
        <div className='space-y-[180px]'>
          <div id="" className="p-4 flex-col">
            <Pagetwo />
          </div>
          <div id="Pagethree" className="p-4 flex-col">
            <Pagethree />
          </div>
          <div id="Pagefour" className="p-4 flex-col">
            <Pagefour />
          </div>
          <div id="threecard" className="p-4 flex-col">
            <Threecard />
          </div>
          <div id="Nightmode" className="p-4 flex-col">
            <Nightmode />
          </div>
          <div id="Nightmode" className="p-4 flex-col">
            <Nighttransiton />
          </div>
        </div>
    </div>
  );
};

export default App;
