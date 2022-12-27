import React from "react";
import logo from "../../images/logo.webp";
import { BubblyLink } from "react-bubbly-transitions";
import "./style/header.css";

const Header = (_) => {
  return (
    <header className="flex justify-around items-center py-4" id="header">
      <img src={logo} alt="logo" className="logo" />
      <nav className="flex gap-4">
        <BubblyLink to="/" colorStart="#71c373" colorEnd="#fff" duration={1500}>
          <span>Home</span>
        </BubblyLink>
        <BubblyLink
          to="/carbondioxide"
          colorStart="#71c373"
          duration={1500}
          colorEnd="#fff"
        >
          <span>Carbon Dioxide</span>
        </BubblyLink>
        <BubblyLink
          to="/GlobalTemp"
          colorStart="#71c373"
          duration={1500}
          colorEnd="#fff"
        >
          <span>Global Temperature</span>
        </BubblyLink>
        <BubblyLink
          to="/CarbonFoot"
          colorStart="#71c373"
          duration={1500}
          colorEnd="#fff"
        >
          <span>Carbon Footprint</span>
        </BubblyLink>
        <BubblyLink
          to="/Weather"
          colorStart="#71c373"
          duration={1500}
          colorEnd="#fff"
        >
          <span>Weather</span>
        </BubblyLink>
        <BubblyLink
          to="/arabic"
          colorStart="#71c373"
          duration={1500}
          colorEnd="#fff"
        >
          <span>Arabic</span>
        </BubblyLink>
      </nav>
    </header>
  );
};

export default Header;
