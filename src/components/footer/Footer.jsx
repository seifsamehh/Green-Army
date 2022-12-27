import React from 'react'
import { Scrollchor, linear } from 'react-scrollchor';
import logo from '../../images/logo-white.webp'
import arrow from '../../images/arrow-up-circle.svg'
import './style/footer.css'

const Footer = _ => {
  return (
    <footer className='flex justify-around items-center px-8 py-4'>
      <div className="left w-full">
        <img src={logo} alt="logo" loading='lazy' className='logo' />
      </div>
      <div className="middle w-full text-center">
        <p>ALL RIGHT RESERVED &copy; 2022<br/> GREEN ARMY</p>
        <p>Programmed by <a href="https://seif-sameh.vercel.app/" target="_blank" className='underline'><strong>Seif Sameh</strong></a></p>
      </div>
      <div className="right w-full flex justify-end">
        <Scrollchor to='header' animate={{ duration: 1000, easing: linear }}>
          <img src={arrow} alt="arrow" className='logo' />
        </Scrollchor>
      </div>
    </footer>
  )
}

export default Footer