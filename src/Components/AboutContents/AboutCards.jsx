import React from 'react'
// import {FaCode} from 'react-icons/fa'
import icon1 from '../../assets/icon-2.png'
import icon2 from '../../assets/icon-3.png'
import icon3 from '../../assets/icon-1.png'


function AboutCards() {
  return (
    <section>
    <div className='container'>
     {/*====== start here ======*/}
     <div className='flex flex-col items-center '>
        <h1 className='text-center font-bold text-3xl pb-5 text-primaryColor'>Why work with us ?</h1>
        {/* ===== Cards start ====== */}
        <div className='flex flex-col md:flex-row items-center pt-3 gap-8'>
          <div id='box' className='text-center '>
            <div className='w-[50px] h-[50px] mx-auto flex items-center justify-center text-center text-white rounded-ful'>
             <img src={icon1} alt="code icon" className='w-8 pt-3'/>
            </div>
            <h3 className='text-xl font-[500] py-2'>High Quality Code</h3>
            <p className='md:mx-[1.5rem] pb-6 text-center text-[0.7rem] whitespace-break-spaces'>
                Now that we have a strong 
                handle on  the newest platforms
                 and frameworks for development,
                  we can unleash high-end  
                  security, agility, and 
                  functionality.</p>
          </div>

          <div id='box' className='text-center'>
            <div className='w-[50px] h-[50px] mx-auto flex items-center justify-center text-center text-white rounded-ful'>
             <img src={icon2} alt="code icon" className='w-8 pt-3'/>
            </div>
            <h3 className='text-xl font-[500] py-2'>Transparency</h3>
            <p className='mx-auto pb-6 text-center text-[0.7rem] whitespace-normal md:mx-[1.5rem]'>Our four pillars of openness in our development work
             and long-term relationships with our esteemed clients are quality, time, cost, and value.</p>
          </div>

          <div id='box' className='text-center '>
            <div className='w-[50px] h-[50px] mx-auto flex items-center justify-center text-center text-white rounded-ful'>
             <img src={icon3} alt="code icon" className='w-8 pt-3'/>
            </div>
            <h3 className='text-xl font-[500] py-2'>Full flexibility</h3>
            <p className='mx-auto pb-6 text-center text-[0.7rem] whitespace-normal md:mx-[1.5rem]'>Our approach caters to startups, SMBs, and large companies, allowing agile software and website revitalization.</p>
          </div>
        </div>
     </div>
     


    </div>

    </section>
  )
}

export default AboutCards