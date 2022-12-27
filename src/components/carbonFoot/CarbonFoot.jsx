import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import footprint from '../../images/carbon-footprint.webp'
import './style/carbonfoot.css'

const CarbonFoot = _ => {
  return (
    <section className='footprint'>
        <df-messenger
            intent="WELCOME"
            chat-title="GreenArmy"
            agent-id="b24a5e7f-c923-4df5-8ee2-7a7765d3ed73"
            language-code="en"
            chat-icon="https://i.ibb.co/LPnB19d/support.png"
        ></df-messenger>
        <Header/>
        <div className="content flex flex-col justify-center items-center gap-8 p-8">
            <h1 className='text-6xl font-thin mb-6'>How To Calculate Your Carbon Footprint ?</h1>
            <h2 className='text-4xl'>“What is a carbon footprint?” you ask.</h2>
            <p className='text-center'>
                We all leave a mark on our planet. Think of your carbon footprint as your personal impact.
                In technical terms, your carbon footprint is the amount of greenhouse gas you produce in units of carbon dioxide. This footprint is determined by your daily lifestyle and activities, such as travel (car, plane, train, etc), electrical use, consumption of products and services, foods you eat, etc.
                greenhouse gases are the primary contributors to many of today’s environmental issues, including pollution, climate change, and global warming.
            </p>
            <img src={footprint} alt="carbon footprint" loading='lazy' />
            <p className='text-center'>There are a number of free resources online that show how to calculate your carbon footprint, including our handy calculator, this calculator from The Nature Conservancy, or this one from the EPA.
                Alexandra Shimo-Barry, author of “The Environment Equation,” has come up with a formula that explains how to calculate your carbon footprint at home, too! Simply follow the below steps.
                Multiply your monthly electric bill by 105
                Multiply your monthly gas bill by 105
                Multiply your monthly oil bill by 113
                Multiply your total yearly mileage on your car by .79
                Multiply the number of flights you’ve taken in the past year (4 hours or less) by 1,100
                Multiply the number of flights you’ve taken in the past year (4 hours or more) by 4,400
                Add 184 if you do NOT recycle newspaper
                Add 166 if you do NOT recycle aluminum and tin
                Add 1-8 together for your total carbon footprint
                Keep in mind that an “ideal” carbon footprint (or a “low” footprint) is anywhere from 6,000 to 15,999 pounds per year. 16,000-22,000 is considered average. Under 6,000 is considered very low. Over 22,000? You may want to take some of these “living green” practices into consideration.
            </p>
            <a href="https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/" target="_blank">
                <button className="button">
                    <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text">Calculate</span>
                    </span>
                </button>
            </a>
        </div>
        <Footer/>
    </section>
  )
}

export default CarbonFoot