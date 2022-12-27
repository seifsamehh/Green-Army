import React from 'react'
import carbon1 from '../../images/carbon-1.webp'
import carbon2 from '../../images/carbon-2.webp'
import video from '../../videos/co2.webm'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './style/carbon.css'

const Carbon = _ => {
  return (
    <section className="carbon">
        <df-messenger
          intent="WELCOME"
          chat-title="GreenArmy"
          agent-id="b24a5e7f-c923-4df5-8ee2-7a7765d3ed73"
          language-code="en"
          chat-icon="https://i.ibb.co/LPnB19d/support.png"
        ></df-messenger>
      <Header/>
      <h1 className='text-7xl font-thin mb-6 mt-20 pl-4'>CARBON DIOXIDE</h1>
      <div className="upper flex gap-8 mb-8 p-4">
        <div className="left-part">
          <p>Carbon dioxide (CO<sub>2</sub>) is an important heat-trapping gas, or greenhouse gas, that comes<br/> from the extraction and burning of fossil fuels (such as coal, oil, and natural gas), from<br/> wildfires, and from natural processes like volcanic eruptions. The first graph shows atmospheric<br/> CO<sub>2</sub> levels measured at Mauna Loa Observatory, Hawaii, in recent years, with natural, seasonal<br/> changes removed. The second graph shows CO<sub>2</sub> levels during Earth’s last three glacial cycles, as<br/> captured by air bubbles trapped in ice sheets and glaciers. Since the beginning of industrial times<br/> (in the 18th century), human activities have raised atmospheric CO<sub>2</sub> by 50% – meaning the amount<br/> of CO<sub>2</sub> is now 150% of its value in 1750. This is greater than what naturally happened at the end of<br/> the last ice age 20,000 years ago. The animated map shows how global carbon dioxide has changed<br/> over time. Note how the map changes colors as the amount of CO<sub>2</sub> rises from 365 parts per million<br/> (ppm) in 2002 to over 400 ppm currently. (“Parts per million” refers to the number of carbon dioxide<br/> molecules per million molecules of dry air.) These measurements are from the mid-troposphere, the layer of Earth's atmosphere that is 8 to 12 kilometers (about 5 to 7 miles) above the ground.</p>
        </div>
        <div className="right-part">
          <img src={carbon1} alt="carbon 1" loading='lazy' className='mb-8' />
          <img src={carbon2} alt="carbon 2" loading='lazy' />
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

export default Carbon