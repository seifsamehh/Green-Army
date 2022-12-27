import React from "react";
import logo from "../../images/logo.webp";
import { BubblyLink } from "react-bubbly-transitions";
// import { Link } from "react-router-dom";
import "./style/headerAr.css";

const HeaderAr = (_) => {
  return (
    <header
      className="flex justify-around items-center py-4 headerAr"
      id="headerAr"
    >
      <nav className="flex gap-4">
        <BubblyLink
          to="/"
          colorStart="#71c373"
          colorEnd="#fff"
          className="link link--elara"
        >
          <span>انجليزى</span>
        </BubblyLink>
        <BubblyLink
          to="/WeatherAr"
          colorStart="#71c373"
          colorEnd="#fff"
          className="link link--elara"
        >
          <span>الطقس</span>
        </BubblyLink>
        <BubblyLink
          to="/CarbonFootAr"
          colorStart="#71c373"
          colorEnd="#fff"
          className="link link--elara"
        >
          <span>البصمة الكربونية</span>
        </BubblyLink>
        <BubblyLink
          to="/GlobalTempAr"
          colorStart="#71c373"
          colorEnd="#fff"
          className="link link--elara"
        >
          <span>درجة الحرارة العالمية</span>
        </BubblyLink>
        <BubblyLink
          to="/carbondioxideAr"
          colorStart="#71c373"
          colorEnd="#fff"
          className="link link--elara"
        >
          <span>ثاني أكسيد الكربون</span>
        </BubblyLink>
        <BubblyLink
          to="/arabic"
          colorStart="#71c373"
          colorEnd="#fff"
          className="link link--elara"
        >
          <span>الصفحة الرئيسية</span>
        </BubblyLink>
      </nav>
      <img src={logo} alt="logo" className="logo" />
    </header>
  );
};

export default HeaderAr;
