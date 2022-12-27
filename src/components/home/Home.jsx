import React from 'react'
import { motion } from "framer-motion"
import Header from '../header/Header'
import Footer from '../footer/Footer';
import { Parallax } from 'react-scroll-parallax';
import introVideo from '../../videos/intro.webm'
import introLg from '../../images/intro-lg.webp'
import intro from '../../images/intro.webp'
import change1 from '../../images/change-1.webp'
import change2 from '../../images/change-2.webp'
import change3 from '../../images/change-3.webp'
import change4 from '../../images/change-4.webp'
import change5 from '../../images/change-5.webp'
import change6 from '../../images/change-6.webp'
import cause1 from '../../images/cause-1.webp'
import cause2 from '../../images/cause-2.webp'
import sun from '../../images/sun.webp'
import warming1 from '../../images/warming-1.webp'
import warming2 from '../../images/warming-2.webp'
import drive from '../../images/drive.webp'
import nature1 from '../../images/nature-1.webp'
import nature2 from '../../images/nature-2.webp'
import nature3 from '../../images/nature-3.webp'
import greenhouse from '../../images/greenhouse.webp'
import talks1 from '../../images/talks-1.webp'
import talks2 from '../../images/talks-2.webp'
import talks3 from '../../images/talks-3.webp'
import effect1 from '../../images/effect-1.webp'
import effect2 from '../../images/effect-2.webp'
import solution1 from '../../images/solution-1.webp'
import solution2 from '../../images/solution-2.webp'
import solution3 from '../../images/solution-3.webp'
import solution4 from '../../images/solution-4.webp'
import solution5 from '../../images/solution-5.webp'
import solution6 from '../../images/solution-6.webp'
import solution7 from '../../images/solution-7.webp'
import solution8 from '../../images/solution-8.webp'
import solution9 from '../../images/solution-9.webp'
import solution10 from '../../images/solution-10.webp'
import nasa from '../../images/nasa-logo.svg'
import './style/home.css'

const Home = _ => {
  return (
      <article className='home overflow-x-hidden'>
        <Header/>
        {/* start intro */}
        <section className='page-intro flex justify-center items-center flex-col gap-12'>
          <div id="app" className='flex items-center w-full'>
            <div className="title">
              <div className="title-inner">
                <div className="cafe">
                  <div className="cafe-inner">GREEN</div>
                </div>
                <div className="mozart">
                  <div className="mozart-inner">ARMY</div>
                </div>
              </div>
            </div>
            <div className="image flex justify-center">
              <img src={introLg} className="lg" alt='intro' />
              <img src={intro} className="sm" alt='intro' />
            </div>
          </div>
        </section>
        {/* end intro */}
        {/* start abstract */}
        <section className="abstract flex items-center py-16 overflow-hidden">
          <div className="left-part w-full text-center">
            <Parallax translateY={["-170px", "200px"]}>
              <h1 className='text-7xl'>ABSTRACT</h1>
            </Parallax>
          </div>
          <div className="right-part">
            <p>Climate change is expected to exacerbate heat-related extremes<br/> that impact human health and environmental and ecological systems.<br/> The impacts of climate change are already evident in Egypt and globally.</p>
            <p className='my-8'>Heat waves are often associated with droughts and forest fires<br/> that have ulti-billion-dollar impacts on national and global societies.</p>
            <p>These phenomena appear to be increasing in frequency, intensity, and duration,<br/> and affect the water-energy-food nexus with consequent impacts on social and<br/> economic structures. Environmental co-factors that are related to the heat waves<br/> and heat stress and affect health include air pollution (PM2.5—invaluable particles<br/> whose diameters are 2.5 micrometers and smaller), worsening of pre-existing health<br/> conditions, and the availability or unavailability of infrastructure (e.g., air conditioning,<br/> adequate power-generation capacity, and water capacity for irrigation and fire reduction).<br/> Concise and simple information is often lacking or not readily accessible in the form of customized warnings that can help individuals and counties/cities take mitigating actions.</p>
          </div>
        </section>
        {/* end abstract */}
        {/* start changes */}
        <section className="changes flex justify-center overflow-x-hidden items-center flex-col gap-8 h-screen">
          <Parallax translateX={[-20, 10]}>
            <div className="gallery flex gap-4">
              <img src={change1} alt="change 1" className='logo' />
              <img src={change2} alt="change 2" className='logo' />
              <img src={change3} alt="change 3" className='logo' />
              <img src={change4} alt="change 4" className='logo' />
              <img src={change5} alt="change 5" className='logo' />
              <img src={change6} alt="change 6" className='logo' />
            </div>
          </Parallax>
          <h1 className='text-7xl'>CLIMATE CHANGES</h1>
          <Parallax translateX={[10, -30]}>
            <div className="gallery-2 flex gap-4">
              <img src={change6} alt="change 6" className='logo' />
              <img src={change5} alt="change 5" className='logo' />
              <img src={change4} alt="change 4" className='logo' />
              <img src={change3} alt="change 3" className='logo' />
              <img src={change2} alt="change 2" className='logo' />
              <img src={change1} alt="change 1" className='logo' />
            </div>
          </Parallax>
        </section>
        {/* end changes */}
        {/* start introduction */}
        <section className="intro flex items-center py-16 overflow-hidden">
          <div className="left-part w-full text-center">
            <Parallax translateY={["-170px", "200px"]}>
              <h1 className='text-7xl'>INTRODUCTION</h1>
            </Parallax>
          </div>
          <div className="right-part">
            <p>However, this current period of warming is occurring more rapidly than any past events.<br/> It has become clear that humanity has caused most of the last century’s warming by<br/> releasing heat-trapping gases—commonly referred to as greenhouse gases—to power<br/> our modern lives.</p>
            <p className='my-8'>We are doing this through burning fossil fuels, agriculture, land use, and other activities<br/> that drive climate change. Greenhouse gases are at the highest levels they have ever<br/> been over the last 800,000 years. This rapid rise is a problem because it’s changing<br/> our climate at a rate that is too fast for living things to adapt to.</p>
            <p>Climate change involves not only rising temperatures, but also extreme weather events,<br/>rising sea levels, shifting wildlife populations and habitats, and a range of other impacts.<br/> Earth has warmed by 1.3°C on average relative to the pre-industrial climate primarily due to<br/>humans burning coal, oil, and gas. Global heating continues to increase at approximately<br/> 0.1°C every five years. Impacts from global heating include intensified heat waves, aridification,<br/> wildfires, storms and floods, sea-level rise, melting glaciers and ice sheets, crop failures, species extinction, ecosystem loss, and strains on human systems (water, food, infrastructure, economic, insurance, etc.).</p>
          </div>
        </section>
        {/* end introduction */}
        {/* start video */}
        <section className="video flex justify-center">
          <video controls loop>
            <source src={introVideo} type="video/webm" />
          </video>
        </section>
        {/* end video */}
        {/* start causes */}
        <section className="causes py-12">
          <Parallax translateX={[-20, 10]}>
            <h1 className='font-thin text-7xl'>THE CAUSES</h1>
          </Parallax>
          <div className="upper-part flex items-center justify-around">
            <div className="content">
              <h2 className='text-3xl font-semibold mb-4'>WHAT IS CLIMATE CHANGE?</h2>
              <p className='leading-loose'>The global climate is the connected system of sun, earth and oceans, wind, rain and snow,<br/> forests, deserts and savannas, and everything people do, too. The climate of a place, say<br/> New York, can be described as its rainfall, changing temperatures during the year and<br/> so on. But the global climate is more than the “average” of the climates of specific places.</p>
            </div>
            <motion.img src={cause1} alt="cause 1" loading='lazy'
            drag
            dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }} />
          </div>
          <div className="footer-part flex items-center justify-around">
            <motion.img src={cause2} alt="cause 2" loading='lazy' 
            drag
            dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
            <div className="content">
              <h2 className='text-3xl font-semibold mb-4'>The Climate System:</h2>
              <p className='leading-loose'>A description of the global climate includes how, for example, the rising temperature<br/> of the Pacific feeds typhoons which blow harder, drop more rain and cause more damage,<br/> but also shifts global ocean currents that melt Antarctica ice which slowly makes sea level<br/> rise until New York will be under water. It is this systemic connectedness that makes global<br/> climate change so important and so complicated.</p>
            </div>
          </div>
        </section>
        {/* end causes */}
        {/* start sun */}
        <section className="sun flex justify-center items-center flex-col h-screen bg-black overflow-hidden">
          <Parallax translateY={["-200px", "200px"]}>
            <img src={sun} alt="sun" className='logo' />
          </Parallax>
          <h1 className='text-8xl'>GLOBAL WARMING</h1>
        </section>
        {/* end sun */}
        {/* start global warming */}
        <section className="global-warming py-12 flex justify-around items-center">
          <div className="left-part">
            <p>The earth’s atmosphere has always acted like a greenhouse to capture the sun’s heat,<br/> ensuring that the earth has enjoyed temperatures that permitted the emergence of life<br/> forms as we know them, including humans. Without our atmospheric greenhouse the earth<br/> would be very cold. Global warming, however, is the equivalent of a greenhouse with high<br/> efficiency reflective glass installed the wrong way around.</p>
            <p className='my-8'>Ionically, the best evidence of this may come from a terrible cooling event that took place<br/> some 1,500 years ago. Two massive volcanic eruptions, one year after another placed so much<br/> black dust into the upper atmosphere that little sunlight could penetrate.Temperatures plummeted.<br/> Crops failed.People died of starvation and the Black Death started its march. As the dust slowly fell<br/> to earth, the sun was again able to warn the world and life returned to normal.</p>
            <p>Today, we have the opposite problem.Today, the problem is not that too little sun warmth is reaching<br/> the earth, but that too much is being trapped in our atmosphere.So much heat is being kept inside<br/> greenhouse earth that the temperature of the earth is going up faster than at any previous time in<br/> history. <b>NASA</b> provides an excellent course module on the science of global warming.</p>
          </div>
          <div className="right-part flex justify-center flex-col gap-8">
            <motion.img src={warming1} alt="warming 1" loading='lazy' 
            drag
            dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
            <motion.img src={warming2} alt="warming 2" loading='lazy' 
            drag
            dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
          </div>
        </section>
        {/* end global warming */}
        {/* start global drive */}
        <section className="global-drive py-12 flex justify-around items-center">
          <div className="left-part">
            <Parallax translateX={[-20,10]}>
              <h1 className='text-6xl font-thin mb-6'>How does Global Warming drive<br/> Climate Change?</h1>
            </Parallax>
            <p>Heat is energy and when you add energy to any system changes occur.Because all systems<br/> in the global climate system are connected, adding heat energy causes the global climate<br/> as a whole to change.Much of the world is covered with ocean which heats up. When the<br/> ocean heats up, more water evaporates into clouds.Where storms like hurricanes and typhoons<br/> are forming, the result is more energy-intensive storms.A warmer atmosphere makes glaciers and<br/> mountain snow packs, the Polar ice cap, and the great ice shield jutting off of Antarctica melt raising<br/> sea levels. Changes in temperature change the great patterns of wind that bring the monsoons in Asia<br/> and rain and snow around the world, making drought and unpredictable weather more common.This is<br/> why scientists have stopped focusing just on global warming and now focus on the larger topic of climate change.</p>
          </div>
          <div className="right-part">
            <motion.img src={drive} alt="drive" loading='lazy' 
            drag
            dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
          </div>
        </section>
        {/* end global drive */}
        {/* start causes global */}
        <section className="causes-global py-12 overflow-x-hidden">
          <Parallax translateX={[-20,10]}>
            <h1 className='text-6xl font-thin mb-6'>What Causes GlobalWarming?</h1>
          </Parallax>
          <div className="upper-part flex justify-around items-center gap-6 p-4">
            <p>Global warming occurs when carbon dioxide (CO<sub>2</sub>) and other air pollutants collect in the atmosphere and absorb sunlight and solar radiation that have bounced off the earth’s surface. Normally this radiation would escape into space, but these pollutants, which can last for years to centuries in the atmosphere, trap the heat and cause the planet to get hotter. These heat-trapping pollutants—specifically carbon dioxide, methane, nitrous oxide, water vapor, and synthetic fluorinated gases—are known as greenhouse gases, and their impact is called the greenhouse effect.
            </p>
            <p>Though natural cycles and fluctuations have caused the earth’s climate to change several times over the last 800,000 years, our current era of global warming is directly attributable to human activity—specifically to our burning of fossil fuels such as coal, oil, gasoline, and natural gas, which results in the greenhouse effect. In the United States, the largest source of greenhouse gases is transportation (29 percent), followed closely by electricity production (28 percent) and industrial activity (22 percent).
            </p>
            <p>Curbing dangerous climate change requires very deep cuts in emissions and the use of alternatives to fossil fuels worldwide. The good news is that countries around the globe have formally committed—as part of the 2015 Paris Climate Agreement—to lower their emissions by setting new standards and crafting new policies to meet or even exceed those standards. The not-so-good news is that we’re not working fast enough. To avoid the worst impacts of climate change, scientists tell us that we need to reduce global carbon emissions by as much as 40 percent by 2030. For that to happen, the global community must take immediate, concrete steps: to decarbonize electricity generation by equitably transitioning from fossil fuel-based production to renewable energy sources like wind and solar; to electrify our cars and trucks; and to maximize energy efficiency in our buildings, appliances, and industries.
            </p>
          </div>
          <div className="middle-part flex justify-around items-center my-8">
            <img src={nature1} alt="nature 1" loading='lazy' />
            <img src={nature2} alt="nature 2" loading='lazy' />
            <img src={nature3} alt="nature 3" loading='lazy' />
          </div>
        </section>
        {/* end causes global */}
        {/* start green house */}
        <section className="greenhouse flex justify-around py-12 overflow-hidden">
          <div className="left-part">
            <Parallax translateY={[-20, 120]}>
              <img src={greenhouse} alt="green house" loading='lazy' className='logo' />
            </Parallax>
          </div>
          <div className="right-part">
            <h1 className='text-6xl font-thin mb-6'>What are the most important greenhouse gases <br/>(GHGs)?</h1>
              <p>The most common and most talked about greenhouse
                gases is CO<sub>2</sub> or carbon dioxide.<br/> In fact, because it is
                so common, scientists use it as the benchmark or
                measure of things<br/> that warm the atmosphere.
                Methane, another important GHG, for example,
                is 28-36 times<br/> as warming as CO<sub>2</sub> when in the upper
                atmosphere (
                The most commonly discussed GHGs<br/> are: 1- CO<sub>2</sub> or
                carbon dioxide is produced any time something is
                burned. It is the most common<br/> GHG, constituting by
                some measures almost It
                is used as a marker by the United States<br/>
                Environmental Protection Agency, for example,
                because of its ubiquity. Carbon dioxide<br/> is assigned a
                GWP or Global Warming Potential of 1.
              </p>
              <p className='my-8'>2- Methane or CH4 is produced in many combustion
                processes<br/> and also by anaerobic decomposition, for
                example, in flooded<br/> rice paddies, pig and cow
                stomachs, and pig manure ponds.<br/> Methane breaks
                down in approximately 10 years, but is a<br/> precursor of
                ozone, itself an important GHG. CH4 has a GWP of
                28-36.
              </p>
              <p>3- Nitrous oxide in parean (laughing gas),
                NO/N2O or simply NOx<br/> is a byproduct of
                fertilizer production and use, other industrial
                processes<br/> and the combustion of certain materials.
                Nitrous oxide lasts a very long<br/> time in the
                atmosphere, but at the 100 year point of comparison
                to CO<sub>2</sub>, its GWP is 265-298.
              </p>
              <p className='my-8'>4-Fluorinated gases were created as replacements for
                ozone depleting<br/> refrigerants ,
                but have proved to be both extremely long lasting
                and<br/> extremely warming GHGs. They
                have no natural sources, but are entirely<br/>
                man-made. At the 100 year point of comparison,
                their GWPs range from<br/> 1,800 to 8,000 and
                some variants top 10,000.
              </p>
              <p>Sulphur hexafluoride or SF6 is used for specialized
                medical procedures,<br/> but primarily in what are called
                dielectric<br/> materials, especially dielectric liquids.
                These are<br/> used as insulators in high voltage
                applications such as transformers<br/> and grid switching
                gear. SF6 will last thousands of years in the upper
                atmosphere and has a GWP of 22,800.
              </p>
          </div>
        </section>
        {/* end green house */}
        {/* start talks */}
        <section className="talks flex justify-around items-center gap-4 py-12 overflow-hidden">
          <Parallax translateY={[-10, 10]}>
            <div className="left-part p-4 flex flex-col gap-4">
              <div className="box-1">
                <h1 className='text-6xl font-thin mb-6'>What is black carbon and how does it<br/>cause global warming?</h1>
                <p>
                Black carbon (BC) is tiny particles of carbon released
                as a result of the incomplete combustion of fossil fuels,
                biofuels and biomass. These particles are extremely
                small, ranging from 10 μm (micrometers,
                PM10), the size of a single bacterium to less than 2.5
                μm (PM2.5), one thirtieth the width of a human hair
                and small enough to pass through the walls of the
                human lung and into the bloodstream.
                Although BC – think of the plume of smoke from a
                chimney or a fire – falls out of the lower atmosphere in
                days, while it is suspended in the air, it absorbs the
                sun’s heat millions of times more effectively than
                CO<sub>2</sub>. When wind carries BC over snow, glaciers or ice
                caps where it falls out onto the white, normally
                reflective surface, it is particularly damaging because it
                contributes directly to melting. Overall, BC is
                considered the second biggest contributor to global
                warming after CO<sub>2</sub>.
                </p>
              </div>
              <div className="box-2">
                <h1 className='text-6xl font-thin mb-6'>What are the most important sources of GHGs and black carbon?</h1>
                <p className='mb-4'>Fossil fuel and related uses of coal and petroleum are the
                  most important sources of GHGs and black carbon (power
                  generation, industry, transportation, buildings).
                  Agriculture is the second most important source (animals –
                  cows and pigs), feed production, chemical intensive food
                  production, and flooded paddy rice production, as well as
                  deforestation driven by the desire to expand cultivated
                  areas.
                  New studies suggest that agriculture is the largest
                  contributor of particulate emissions in the US and other
                  developed agricultural countries.)
                  Natural sources of GHGs and black carbon include forest
                  fires, savanna fires and volcanos.
                </p>
                <motion.img src={talks1} alt="talks 1" loading='lazy'
                drag
                dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }} />
              </div>
            </div>
          </Parallax>
          <Parallax translateY={[30,-30]}>
            <div className="right-part p-4">
              <h1 className='text-6xl font-thin mb-6'>What evidence do we have of climate<br/>change?</h1>
              <p>The most compelling climate change evidence scientists
                have of climate change is long term data relating
                atmospheric CO<sub>2</sub> levels and global temperature, sea
                level, the expanse of ice, the fossil record and the
                distribution of species.
                This data, which goes back millions of years, shows a
                strong correlation between CO<sub>2</sub> levels and temperature.
                Recent data shows a trend of increasing temperature and
                rising CO<sub>2</sub> levels beginning in the early 19th century.
              </p>
              <p>Because all parts of the global climate are connected,
                scientists have been able to create models of how changes
                caused by heating should work their way through the entire
                system and appear in different areas,
                for example, sea level, intemperate weather, the movement
                of fish species in the ocean.
                Testing whether or not predicted changes have
                occurred is an important way to verify underlying
                theory.
              </p>
              <motion.img src={talks2} alt="talks 2" loading='lazy' className='mb-4'
              drag
              dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }} />
              <motion.img src={talks3} alt="talks 3" loading='lazy' 
              drag
              dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
            </div>
          </Parallax>
        </section>
        {/* end talks */}
        {/* start effects */}
        <section className="effects py-12 overflow-x-hidden">
          <h1 className='text-6xl font-thin mb-6 ml-4'>THE EFFECTS</h1>
          <div className="upper flex gap-8 p-4">
            <div className="left-part">
              <p>How is climate change impacting the world’s oceans?
                The ocean has long taken the brunt of the impacts of
                human-made global warming, says UN Climate Change. As
                the planet’s greatest carbon sink, the ocean absorbs excess
                heat and energy released from rising greenhouse gas
                emissions trapped in the Earth’s system. Today, the ocean
                has absorbed about 90 percent of the heat generated by
                rising emissions.
                As excessive heat and energy warm the ocean, the
                temperature change lead to unparalleled cascading effects,
                including ice-melting, sea-level rise, marine heat waves,
                and ocean acidification.
                These changes ultimately cause a lasting impact on marine
                biodiversity, and the lives and livelihoods of coastal
                communities and beyond - including around 680 million
                people living in low-lying coastal areas, almost 2 billion
                who live in half of the world’s coastal megacities, nearly
                half of the world’s population (3.3 billion) that depends on
                fish for protein, and almost 60 million people who work in
                fisheries and the aquaculture sector worldwide.
                Here are some of the major consequences of the impacts of
                climate change on the ocean.
              </p>
              <p>The UN Environment Programme says that every one of the
                world’s coral reefs could bleach by the end of the century if
                the water continues to warm.
                Coral bleaching occurs as reefs lose their life-sustaining
                microscopic algae when under stress. The last global
                bleaching event started in 2014 and extended well into 2017
                - spreading across the Pacific, Indian and Atlantic oceans.
                Loss of marine biodiversity
                Rising temperatures increase the risk of irreversible loss of
                marine and coastal ecosystems. Today,
                widespread changes have been observed, including damage
                to coral reefs and mangroves that support ocean life, and
                migration of species to higher latitudes and altitudes where
                the water could be cooler.
                Latest estimates from the UN Educational, Scientific and
                Cultural Organization warn that more than half of the
                world’s marine species may stand on the brink of extinction
                by 2100. At a 1.1°C increase in temperature today, an
                estimated 60 percent of the world's marine ecosystems have
                already been degraded or are being used unsustainably.
                Warming of 1.5°C threatens to destroy 70 to 90 percent of
                coral reefs, and a 2°C increase means a nearly 100 percent
                loss - a point of no return.
              </p>
            </div>
            <div className="right-part">
              <p>Sea-level rise
                Sea-level rise has accelerated in recent decades due
                to increasing ice loss in the world’s polar regions.
                The latest data from the World Meteorological
                Organization show that the
                global mean sea level reached a new record
                high in 2021, rising an average of 4.5 millimeters per
                year over the period 2013 to 2021.
                Together with intensifying tropical cyclones,
                sea-level rise has exacerbated extreme events such as
                deadly storm surges and coastal hazards such as
                flooding, erosion, and landslides, which are now
                projected to occur at least once a year in many
                locations. Such
                events occurred once per century historically.
                Moreover, the Intergovernmental Panel on Climate
                Change (IPCC) says that several regions, such as the
                western Tropical Pacific,
                the South-west Pacific, the North Pacific, the
                South-west Indian Ocean, and the South Atlantic,
                face substantially faster sea-level rise.
              </p>
              <p>Marine heatwaves
                Marine heatwaves have doubled in frequency, and
                have become longer-lasting, more intense, and
                extensive. The IPCC says that human influence has
                been the main driver of the ocean heat increase
                observed since the 1970s.
                The majority of heatwaves took place between 2006
                and 2015, causing widespread coral bleaching and reef
                degradation. In 2021, nearly 60 percent of the world’s
                ocean surface experienced at least one spell of marine
                heatwaves.
              </p>
            </div>
          </div>
          <div className="bottom flex justify-center items-center gap-4">
            <Parallax translateX={[-20,10]}>
              <img src={effect1} alt="effect 1" />
            </Parallax>
            <Parallax translateX={[20,-10]}>
              <img src={effect2} alt="effect 2" />
            </Parallax>
          </div>
        </section>
        {/* end effects */}
        {/* start effect climate */}
        <section className="effect-climate h-screen flex justify-center items-center overflow-y-hidden">
          <Parallax translateY={["-200px", "100px"]}>
            <div className="content text-center p-8">
              <h1 className='text-7xl font-thin mb-6'>What are the effects of climate change?</h1>
              <p>A changing climate impacts crop growth and human health,
                while many people may need to leave their homes. It places
                certain species at an increased risk of extinction. The effects
                of climate change are real,
                and they are already happening.
                The level of climate change we will see depends on how
                quickly we cut emissions of dangerous greenhouse gases.
                Even if we were to stop all emissions today, we would not
                prevent some changes.
                However, the sooner we cut emissions, the smaller the
                changes will be.
              </p>
            </div>
          </Parallax>
        </section>
        {/* end effect climate */}
        {/* start solutions */}
        <section className='solutions py-12'>
          <Parallax translateX={[-30, 10]}>
            <h1 className='text-7xl font-thin pl-4 text-center'>SOLUTIONS</h1>
          </Parallax>
          <div className="container">
              <div className="box-1 flex justify-center items-center overflow-hidden">
                  <div className="left-part w-full">
                      <motion.img src={solution1} alt="solution 1" loading='lazy' className='logo'              
                        drag
                        dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
                  </div>
                <div className="right-part w-full">
                  <p><span className='text-5xl font-thin'>Save energy at home</span><br/> Much of our electricity and heat are powered by coal, oil and gas. Use less energy by lowering your heating and cooling, switching to LED light bulbs and energy-efficient electric appliances, washing your laundry with cold water, or hanging things to dry instead of using a dryer. Improving your home’s energy efficiency, through better insulation for instance, or replacing your oil or gas furnace with an electric heat pump can reduce your carbon footprint by up to 900 kilograms of CO<sub>2</sub> per year.</p>
                </div>
              </div>
              <div className="box-2 flex justify-center items-center overflow-hidden">
                <div className="left-part w-full">
                  <motion.img src={solution2} alt="solution 2" loading='lazy' className='logo'           
                    drag
                    dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
                </div>
                <div className="right-part w-full">
                  <p><span className='text-5xl font-thin'>Walk, bike, or take public transport</span><br/>
      The world’s roadways are clogged with vehicles, most of them burning diesel or gasoline. Walking or riding a bike instead of driving will reduce greenhouse gas emissions -- and help your health and fitness. For longer distances, consider taking a train or bus. And carpool whenever possible. Living car-free can reduce your carbon footprint by up to 2 tons of CO<sub>2</sub> per year compared to a lifestyle using a car.</p>
                </div>
              </div>
              <div className="box-3 flex justify-center items-center overflow-hidden">
                <div className="left-part w-full">
                  <motion.img src={solution3} alt="solution 3" loading='lazy' className='logo'              
                    drag
                    dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
                </div>
                <div className="right-part w-full">
                  <p><span className='text-5xl font-thin'>Eat more vegetables</span><br/>
      Eating more vegetables, fruits, whole grains, legumes, nuts, and seeds, and less meat and dairy, can significantly lower your environmental impact. Producing plant-based foods generally results in fewer greenhouse gas emissions and requires less energy, land, and water. Switching from a mixed to a vegetarian diet can reduce your carbon footprint by up to 500 kilograms of CO<sub>2</sub> per year (or up to 900 kilograms for a vegan diet).</p>
                </div>
              </div>
              <div className="box-4 flex justify-center items-center overflow-hidden">
                <div className="left-part w-full">
                  <motion.img src={solution4} alt="solution 4" loading='lazy' className='logo'           
                    drag
                    dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
                </div>
                <div className="right-part w-full">
                  <p><span className='text-5xl font-thin'>Consider your travel</span><br/>
      Airplanes burn large amounts of fossil fuels, producing significant greenhouse gas emissions. That makes taking fewer flights one of the fastest ways to reduce your environmental impact. When you can, meet virtually, take a train, or skip that long-distance trip altogether. Taking one less long-haul return flight can reduce your carbon footprint by up to almost 2 tons of CO<sub>2</sub>.</p>
                </div>
              </div>
              <div className="box-5 flex justify-center items-center overflow-hidden">
                <div className="left-part w-full">
                  <motion.img src={solution5} alt="solution 5" loading='lazy' className='logo'            
                    drag
                    dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
                </div>
                <div className="right-part w-full">
                  <p><span className='text-5xl font-thin'>Throw away less food</span><br/>
      When you throw food away, you're also wasting the resources and energy that were used to grow, produce, package, and transport it. And when food rots in a landfill, it produces methane, a powerful greenhouse gas. So use what you buy and compost any leftovers. Cutting your food waste can reduce your carbon footprint by up to 300 kilograms of CO<sub>2</sub> per year.</p>
                </div>
              </div>
              <div className="box-6 flex justify-center items-center overflow-hidden">
                <div className="left-part w-full">
                  <motion.img src={solution6} alt="solution 6" loading='lazy' className='logo'          
                    drag
                    dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
                </div>
                <div className="right-part w-full">
                  <p><span className='text-5xl font-thin'>Reduce, reuse, repair & recycle</span><br/>
      Electronics, clothes, and other items we buy cause carbon emissions at each point in production, from the extraction of raw materials to manufacturing and transporting goods to market. To protect our climate, buy fewer things, shop second-hand, repair what you can, and recycle. Every kilogram of textiles produced generates about 17 kilograms of CO<sub>2</sub>. Buying fewer new clothes – and other consumer goods – can reduce your carbon footprint and also cut down on waste.</p>
                </div>
              </div>
              <div className="box-7 flex justify-center items-center overflow-hidden">
                <div className="left-part w-full">
                  <motion.img src={solution7} alt="solution 7" loading='lazy' className='logo'          
                    drag
                    dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
                </div>
                <div className="right-part w-full">
                  <p><span className='text-5xl font-thin'>Change your home's source of energy</span><br/>
      Ask your utility company if your home energy comes from oil, coal or gas. If possible, see if you can switch to renewable sources such as wind or solar. Or install solar panels on your roof to generate energy for your home. Switching your home from oil, gas or coal-powered energy to renewable sources of energy, such as wind or solar, can reduce your carbon footprint by up to 1.5 tons of CO<sub>2</sub> per year.</p>
                </div>
              </div>
              <div className="box-8 flex justify-center items-center overflow-hidden">
                <div className="left-part w-full">
                  <motion.img src={solution8} alt="solution 8" loading='lazy' className='logo'         
                    drag
                    dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
                </div>
                <div className="right-part w-full">
                  <p><span className='text-5xl font-thin'>Switch to an electric vehicle</span><br/>
      If you plan to buy a car, consider going electric, with more and cheaper models coming on the market. In many countries, electric cars help reduce air pollution and cause significantly fewer greenhouse gas emissions than gas or diesel-powered vehicles. But many electric cars still run on electricity produced from fossil fuels, and the batteries and engines require rare minerals which often come with high environmental and social costs. Switching from a gasoline or diesel-powered car to an electric vehicle can reduce your carbon footprint by up to 2 tons of CO<sub>2</sub> per year. A hybrid vehicle can save you up to 700 kilograms of CO<sub>2</sub> per year.</p>
                </div>
              </div>
              <div className="box-9 flex justify-center items-center overflow-hidden">
                <div className="left-part w-full">
                  <motion.img src={solution9} alt="solution 9" loading='lazy' className='logo'          
                    drag
                    dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
                </div>
                <div className="right-part w-full">
                  <p><span className='text-5xl font-thin'>Make your money count</span><br/>
      Everything we spend money on affects the planet. You have the power to choose which goods and services you support. To reduce your environmental impact, choose products from companies who use resources responsibly and are committed to cutting their gas emissions and waste. If you have money that is being invested for you, through a pension fund for instance, it may be supporting fossil fuels or deforestation. Making sure your savings are invested in environmentally sustainable businesses can greatly reduce your carbon footprint.</p>
                </div>
              </div>
              <div className="box-10 flex justify-center items-center overflow-hidden">
                <div className="left-part w-full">
                  <motion.img src={solution10} alt="solution 10" loading='lazy' className='logo'      
                    drag
                    dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
                </div>
                <div className="right-part w-full">
                  <p><span className='text-5xl font-thin'>Speak up to join</span><br/>
      Speak up and get others to join in taking action. It's one of the quickest and most effective ways to make a difference. Talk to your neighbors, colleagues, friends, and family. Let business owners know you support bold changes. Appeal to local and world leaders to act now. Climate action is a task for all of us. And it concerns all of us. No one can do it all alone.</p>
                </div>
              </div>
          </div>
        </section>
        {/* end solutions */}
        {/* start faq */}
        <df-messenger
          intent="WELCOME"
          chat-title="GreenArmy"
          agent-id="b24a5e7f-c923-4df5-8ee2-7a7765d3ed73"
          language-code="en"
          chat-icon="https://i.ibb.co/LPnB19d/support.png"
        ></df-messenger>
        {/* end faq */}
        {/* start reference */}
        <section className="reference py-12">
          <h1 className='text-7xl font-thin pl-4 mb-8 text-center'>REFERENCE</h1>
          <div className="content flex flex-col justify-center items-center gap-8">
            <a href="https://climate.nasa.gov/" target="_blank">
              <img src={nasa} alt="nasa" loading='lazy' className='logo' />
            </a>
          </div>
        </section>
        {/* end reference */}
        <Footer/>
      </article>
  )
}

export default Home