import React from 'react'
import Header from '../header/Header'
import { Link } from "react-router-dom";
import level1 from '../../images/level-1.webp'
import level2 from '../../images/level-2.webp'
import './style/seaLevel.css'
import Footer from '../footer/Footer';

const SeaLevel = _ => {
  return (
    <section className='sea-level'>
        <df-messenger
            intent="WELCOME"
            chat-title="GreenArmy"
            agent-id="b24a5e7f-c923-4df5-8ee2-7a7765d3ed73"
            language-code="en"
            chat-icon="https://i.ibb.co/LPnB19d/support.png"
        ></df-messenger>
        <Header/>
        <div className="heading flex justify-between items-center">
            <h1 className='text-7xl font-thin mb-6 mt-20 pl-4'>SEA LEVEL</h1>
            <nav className='flex gap-6 mr-6'>
                <Link to="/SeaIce" className="link link--elara">
                    <span>SEA ICE</span>
                </Link>
                <Link to="/SeaLevel" className="link link--elara active">
                    <span>SEA LEVEL</span>
                </Link>
                <Link to="/Ocean" className="link link--elara">
                    <span>OCEAN WARMING</span>
                </Link>
            </nav>
        </div>
        <div className="upper flex gap-8 mb-8 p-4">
            <div className="left-part">
                <p>
                    Key Takeaway: Global sea levels are rising as a result of human-caused global warming,<br/> with recent rates being unprecedented over the past 2,500-plus years.
                    Sea level rise is caused<br/> primarily by two factors related to global warming: the added water from melting ice sheets<br/> and glaciers, and the expansion of seawater as it warms. The first graph tracks the change in<br/> global sea level since 1993, as observed by satellites.
                    The second graph, which is from coastal<br/> tide gauge and satellite data, shows how much the sea level changed from about 1900 to 2018.<br/> Items with pluses (+) are factors that cause the global sea level to increase, while minuses (-)<br/> are what cause the sea level to decrease. These items are displayed at the time they were affecting sea level.
                    The data shown are the latest available, with a four- to five-month delay needed for processing.
                </p>
            </div>
        <div className="right-part w-full">
            <img src={level1} alt="Sea level 1" loading='lazy' className='mb-8' />
            <img src={level2} alt="Sea level 2" loading='lazy' />
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default SeaLevel