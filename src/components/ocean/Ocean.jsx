import React from 'react'
import Header from '../header/Header'
import { Link } from "react-router-dom";
import ocean1 from '../../images/ocean-1.webp'
import ocean2 from '../../images/ocean-2.webp'
import './style/ocean.css'
import Footer from '../footer/Footer';

const Ocean = _ => {
  return (
    <section className='ocean'>
        <df-messenger
            intent="WELCOME"
            chat-title="GreenArmy"
            agent-id="b24a5e7f-c923-4df5-8ee2-7a7765d3ed73"
            language-code="en"
            chat-icon="https://i.ibb.co/LPnB19d/support.png"
        ></df-messenger>
        <Header/>
        <div className="heading flex justify-between items-center">
            <h1 className='text-7xl font-thin mb-6 mt-20 pl-4'>OCEAN WARMING</h1>
            <nav className='flex gap-6 mr-6'>
                <Link to="/SeaIce" className="link link--elara">
                    <span>SEA ICE</span>
                </Link>
                <Link to="/SeaLevel" className="link link--elara">
                    <span>SEA LEVEL</span>
                </Link>
                <Link to="/Ocean" className="link link--elara active">
                    <span>OCEAN WARMING</span>
                </Link>
            </nav>
        </div>
        <div className="upper flex gap-8 mb-8 p-4">
            <div className="left-part">
                <p>
                Ninety percent of global warming is occurring in the ocean, causing the water’s internal heat to increase<br/> since modern recordkeeping began in 1955, as shown in the upper chart. (The shaded blue region indicates<br/> the 95% margin of uncertainty.) This chart shows annual estimates for the first 2,000 meters of ocean depth.<br/>
                Each data point in the upper chart represents a five-year average. For example, the 2018 value represents the<br/> average change in ocean heat content (since 1955) for the years 2016 to and including 2021.
                The lower chart<br/> tracks monthly changes in ocean heat content for the entire water column (from the top to the bottom of the ocean)<br/> from 1992 to 2019, integrating observations from satellites, in-water instruments, and computer models.
                Heat stored in<br/> the ocean causes its water to expand, which is responsible for one-third to one-half of global sea level rise. Most of the added energy is stored at the surface, at a depth of zero to 700 meters. The last 10 years were the ocean’s warmest decade since at least the 1800s. The year 2021 was the ocean’s warmest recorded year and saw the highest global sea level.
                </p>
            </div>
        <div className="right-part w-full">
            <img src={ocean1} alt="ocean warming 1" loading='lazy' className='mb-8' />
            <img src={ocean2} alt="ocean warming 2" loading='lazy' />
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Ocean