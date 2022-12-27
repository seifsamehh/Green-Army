import React, { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";
import AnimatedCursor from "react-animated-cursor";
import Spline from "@splinetool/react-spline";
import { Offline, Online } from "react-detect-offline";
import {
  Arabic,
  Carbon,
  CarbonAr,
  CarbonFoot,
  CarbonFootAr,
  GlobalTemp,
  GlobalTempAr,
  Home,
  Ocean,
  OceanAr,
  SeaIce,
  SeaIceAr,
  SeaLevel,
  SeaLevelAr,
  Weather,
  WeatherAr,
} from "./components";
import "./App.css";

export const ThemeContext = createContext(null);
const App = (_) => {
  // theme
  const [theme, setTheme] = useState("dark");
  const toogleTheme = (_) =>
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  // loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color="113,195,115"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      {loading ? (
        <div className="loading flex justify-center items-center flex-col h-screen bg-black overflow-hidden">
          <h1>WELCOME TO GREEN ARMY WEBSITE</h1>
          <Spline scene="https://prod.spline.design/OLDH8GJrmCbDyJjQ/scene.splinecode" />
        </div>
      ) : (
        <>
          <Online>
            <ThemeContext.Provider value={{ theme, toogleTheme }}>
              <main id={theme}>
                <label className="switch">
                  <input type="checkbox" onChange={toogleTheme} />
                  <span className="slider"></span>
                </label>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/carbondioxide" element={<Carbon />} />
                  <Route path="/carbondioxideAr" element={<CarbonAr />} />
                  <Route path="/GlobalTemp" element={<GlobalTemp />} />
                  <Route path="/GlobalTempAr" element={<GlobalTempAr />} />
                  <Route path="/SeaIce" element={<SeaIce />} />
                  <Route path="/SeaIceAr" element={<SeaIceAr />} />
                  <Route path="/SeaLevel" element={<SeaLevel />} />
                  <Route path="/SeaLevelAr" element={<SeaLevelAr />} />
                  <Route path="/Ocean" element={<Ocean />} />
                  <Route path="/OceanAr" element={<OceanAr />} />
                  <Route path="/CarbonFoot" element={<CarbonFoot />} />
                  <Route path="/CarbonFootAr" element={<CarbonFootAr />} />
                  <Route path="/Weather" element={<Weather />} />
                  <Route path="/WeatherAr" element={<WeatherAr />} />
                  <Route path="/arabic" element={<Arabic />} />
                </Routes>
                <BubblyContainer />
              </main>
            </ThemeContext.Provider>
          </Online>
          <Offline>
            <AnimatedCursor
              innerSize={10}
              outerSize={10}
              color="255,255,255"
              outerAlpha={0.2}
              innerScale={0.7}
              outerScale={5}
            />
            <section className="offline h-screen flex justify-center items-center flex-col">
              <h1>NO INTERNET PLEASE CHECK YOUR NETWORK</h1>
              <q>We won’t have a society if we destroy the environment.</q>
              <p>Margaret Mead</p>
            </section>
          </Offline>
        </>
      )}
    </>
  );
};

export default App;
