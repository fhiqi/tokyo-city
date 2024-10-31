import React, { useState, useEffect } from 'react';
import HomePage from './components/homePage';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <div>
        <div className='p-4'>
          <Navbar />
          <HomePage />
        </div>
    </div>
  );
};

export default App;
