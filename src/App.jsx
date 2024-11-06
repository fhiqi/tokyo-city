import React, { useState, useEffect } from "react";
import HomePage from "./components/homePage";
import Navbar from "./components/Navbar";
import LampuOit from "./components/lampuiot";
import HomePageDark from "./components/homePageDark";
import NavbarDark from "./components/navbarDark";

const App = () => {
  return (
    <div>
      <div className="">
        <NavbarDark />

        <HomePageDark />
      </div>
    </div>
  );
};

export default App;
