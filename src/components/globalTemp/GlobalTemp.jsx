import React from 'react'
import Header from '../header/Header'
import { Link } from "react-router-dom";
import temp from '../../images/temp.webp'
import video from '../../videos/global.webm'
import './style/globaltemp.css'
import Footer from '../footer/Footer';

const GlobalTemp = _ => {
  return (
    <section className='global-temp'>
      <df-messenger
          intent="WELCOME"
          chat-title="GreenArmy"
          agent-id="b24a5e7f-c923-4df5-8ee2-7a7765d3ed73"
          language-code="en"
          chat-icon="https://i.ibb.co/LPnB19d/support.png"
        ></df-messenger>
      <Header/>
      <div className="heading flex justify-between items-center">
        <h1 className='text-7xl font-thin mb-6 mt-20 pl-4'>GLOBAL TEMPERATURE</h1>
        <nav className='flex gap-6 mr-6'>
          <Link to="/SeaIce" className="link link--elara">
            <span>SEA ICE</span>
          </Link>
          <Link to="/SeaLevel" className="link link--elara">
            <span>SEA LEVEL</span>
          </Link>
          <Link to="/Ocean" className="link link--elara">
            <span>OCEAN WARMING</span>
          </Link>
        </nav>
      </div>
      <div className="upper flex gap-8 mb-8 p-4">
        <div className="left-part">
          <p>Key Takeaway:Earth’s global average surface temperature in 2020 tied with 2016 as the hottest year on record,<br/> continuing a long-term warming trend due to human activities.
            This graph shows the change in global surface<br/> temperature compared to the long-term average from 1951 to 1980. Nineteen of the hottest years have occurred<br/> since 2000, with the exception of 1998. The year 2020 tied with 2016 for the hottest year on record since recordkeeping<br/> began in 1880 (source: NASA/GISS). NASA’s analyses generally match independent analyses prepared by the Climatic<br/> Research Unit and the National Oceanic and Atmospheric Administration (NOAA).
            The animation on the right shows<br/> the change in global surface temperatures. Dark blue shows areas cooler than average. Dark red shows areas warmer<br/> than average. Short-term variations are smoothed out using a 5-year running average to make trends more visible<br/> in this map.
            The “Global Temperature” figure on the home page dashboard shows global temperature change since 1880, compared to NASA’s 1951-1980 baseline.
            The data shown are the latest available, updated annually.
          </p>
        </div>
        <div className="right-part">
          <img src={temp} alt="global temperature" loading='lazy' className='mb-8' />
        </div>
      </div>
      <div className="bottom flex justify-center">
        <video controls muted loop>
          <source src={video} type='video/webm' />
        </video>
      </div>
      <Footer/>
    </section>
  )
}

export default GlobalTemp