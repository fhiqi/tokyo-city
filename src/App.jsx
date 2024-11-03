import React, { useState, useEffect } from 'react';
import HomePage from './components/homePage';
import Navbar from './components/navbar';

const App = () => {

  return (
    <div>
        <div className="">
          <Navbar />
          <HomePage />
        </div>
    </div>
  );
};

export default App;
