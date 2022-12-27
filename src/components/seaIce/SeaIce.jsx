import React from 'react'
import Header from '../header/Header'
import { Link } from "react-router-dom";
import seaIce from '../../images/seaIce.webp'
import video from '../../videos/Ice.webm'
import './style/seaIce.css'
import Footer from '../footer/Footer';

const SeaIce = _ => {
  return (
    <section className='sea-ice'>
        <df-messenger
          intent="WELCOME"
          chat-title="GreenArmy"
          agent-id="b24a5e7f-c923-4df5-8ee2-7a7765d3ed73"
          language-code="en"
          chat-icon="https://i.ibb.co/LPnB19d/support.png"
        ></df-messenger>
        <Header/>
        <div className="heading flex justify-between items-center">
            <h1 className='text-7xl font-thin mb-6 mt-20 pl-4'>SEA ICE</h1>
            <nav className='flex gap-6 mr-6'>
            <Link to="/SeaIce" className="link link--elara active">
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
                <p>Key Takeaway: Summer Arctic sea ice extent is shrinking by 12.6% per decade as a result of global warming.<br/>
Arctic sea ice reaches its minimum extent (the area in which satellite sensors show individual pixels to be <br/>at least 15% covered in ice) each September. September Arctic sea ice is now shrinking at a rate of 12.6%<br/> per decade, compared to its average extent during the period of 1981 to 2010. This graph shows the size of<br/> the Arctic sea ice each September since satellite observations started in 1979. The monthly value shown is<br/> the average of daily observations across the month of September during each year and is measured from satellites.
The animated map below shows the minimum size of the Arctic sea ice measured each year since 1979, based on satellite observations. The 2012 sea ice extent is the lowest in the satellite record.
                </p>
            </div>
        <div className="right-part w-full">
            <img src={seaIce} alt="Sea ICe" loading='lazy' className='mb-8' />
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

export default SeaIce