import React, { useState } from "react";
import axios from "axios";
import FooterAr from "../footerAr/FooterAr";
import HeaderAr from "../headerAr/HeaderAr";
import "./style/weather-ar.css";

const WeatherAr = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=72acfd01bf6ad5578782dc5effa0122d`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <>
      <HeaderAr />
      <section className="weather-ar">
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="اسم المدينة"
            type="text"
          />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <h1>{data.name}</h1>
            </div>
            <div className="temp">
              {data.main ? <p>{data.main.temp.toFixed()}°F</p> : null}
            </div>
            <div className="description">
              {data.weather ? <h1>{data.weather[0].main}</h1> : null}
            </div>
          </div>

          {data.name !== undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°F</p>
                ) : null}
                <h1>الاحساس كأنها</h1>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <h1>رطوبة</h1>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                ) : null}
                <h1>سرعة الرياح</h1>
              </div>
            </div>
          )}
        </div>
      </section>
      <FooterAr />
    </>
  );
};

export default WeatherAr;
