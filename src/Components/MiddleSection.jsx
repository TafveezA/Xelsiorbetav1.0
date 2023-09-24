import React from 'react'
import line6 from "../Images/Line6.png"
import frame53 from "../Images/Frame53.png"
import ProtocolIcon from "../Images/ProtocolIcon.png"
import Frame6 from "../Images/Frame6.png"
import group3 from "../Images/Group3.png"
import group39 from "../Images/Group39.png"
import group44 from "../Images/Group44.png"
import group46 from "../Images/Group46.png"
import group22 from "../Images/Group22.png"
import group4 from '../Images/Group4.png'


function MiddleSection() {

    const divStyle = {
        backgroundImage: `url(${line6})`,
        backgroundAttachment: 'fixed', // Set background-attachment to fixed
        backgroundSize: '73% 40%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',

    };

    const divStyle1 = {
        backgroundImage: `url(${group3})`,
        backgroundAttachment: 'fixed', // Set background-attachment to fixed
        backgroundSize: '100% 40%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',


    };
    const divStyletop = {
        backgroundImage: `url(${group3})`,
        backgroundAttachment: 'fixed', // Set background-attachment to fixed
        backgroundSize: '100% 40%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',


    };

    const data = [
        {
            text: '0.01%-0.77 ',
            textSec: 'APR',
            img: group39,

        },
        {
            text: '0.01%-0.77 ',
            textSec: 'APR',
            img: group46,

        },
        {
            text: '0.01%-0.77 ',
            textSec: 'APR',
            img: group22,

        },
        {
            text: '0.01%-0.77 ',
            textSec: 'APR',
            img: group44,

        },




    ];


    return (
        <>
            <section>
                <div style={divStyle} className="w-[100%]  border border-black border-solid h-screen flex flex-col items-center justify-around    bg-black text-white ">
                    <div className=' lg:leading-8 md:leading-7 text-[40px] leading-4 text-center md:text-[65px] lg:text-[65.02px] font-space-grotesk '>Swap Your Tokens
                        <p className='md:text-[18px] text-[10px] text-right text-[#FFFFFF]'> Powered by Auto-Bridging on <span className='font-bold'>XRPL</span></p>
                    </div>
                    <div className='flex items-start  justify-evenly lg:gap-72 md:gap-24 gap-3 '>
                        <img className='lg:mt-10 mt-10 w-[60px] md:w-[100px] lg:w-[150px]' src={ProtocolIcon} alt="" />
                        <img src={frame53} alt="" className='w-[150px] md:w-[200px]  lg:w-[300px]' />
                        <img className='lg:mt-8 mt-10 w-[60px] md:w-[100px] lg:w-[150px]' src={Frame6} alt="" />
                    </div>
                    <div className=' text-center ml-3 mr-3 lg:ml-0 lg:mr-0 md:text-[25.29px]  font-space-grotesk'>Exchange any cryptocurrency to any other crypto at a market price in seconds</div>
                </div>
            </section>
            <section >
                <div style={divStyle1} className="w-[100%] h-screen z-10  border border-black border-solid flex  items-center justify-around    bg-black text-white ">
                    <div className='border border-white flex flex-col items-center justify-evenly border-solid lg:h-[70%] w-[20%] rounded-lg'>
                        <div className='w-[100%] flex items-center justify-center'>
                            <p className='lg:text-[29.51px] text-center text-[12px] font-space-grotesk'>Swap Hassle-Free</p>
                        </div>
                        <div className='w-[100px] h-[170px] lg:w-[100%] lg:h-[70%] flex items-center justify-center'>
                            <img src={group39} className='md:w-[100%] md:h-[100%] w-[80px]' alt="" />
                        </div>
                        <div className='w-[100%] flex items-center justify-center '>
                            <p className='p-2 text-justify font-space-grotesk text-[10px]'>
                                Say goodbye to the hassle of manually swapping one crypto for another. Xelsior automates the process, providing you with near-instant conversions.
                            </p>
                        </div>
                    </div>
                    <div className='border border-white flex flex-col items-center justify-evenly border-solid lg:h-[70%] w-[20%] rounded-lg'>
                        <div className='w-[100%] flex items-center justify-center'>
                            <p className='lg:text-[29.51px] text-[12px] text-center font-space-grotesk'>Earn Effortlessly</p>
                        </div>
                        <div className='w-[100px] h-[170px] lg:w-[100%] lg:h-[70%] flex items-center justify-center'>
                            <img src={group46} className='md:w-[100%] md:h-[100%] w-[80px] h-[80px] sm:h-[100px]' alt="" />
                        </div>
                        <div className='w-[100%] flex items-center justify-center '>
                            <p className='p-2 text-justify font-space-grotesk text-[9.80px] lg:text-[10px]'>
                                Earn passive income effortlessly with our staking and yield farming options. Maximize your crypto holdings by putting them to work for you.
                            </p>
                        </div>
                    </div>
                    <div className='border border-white flex flex-col items-center justify-evenly border-solid lg:h-[70%] w-[20%] rounded-lg'>
                        <div className='w-[100%] flex items-center justify-center'>
                            <p className='lg:text-[20.51px]  text-[10px]  font-bold px-4 font-space-grotesk text-center'>Worlds first decentralized P2P powered by XRPL</p>
                        </div>
                        <div className='w-[100px] h-[165px] lg:w-[100%] lg:h-[70%] flex items-center justify-center'>
                            <img src={group22} className='md:w-[100%] md:h-[100%] w-[80px] h-[77px] alt=' />
                        </div>
                        <div className='w-[100%]  flex items-center justify-center '>
                            <p className='p-2 text-justify font-space-grotesk text-[9.5px] lg:text-[10px]'>
                                Find the best deals and execute transactions securely. Whether you're looking to buy or sell, our intuitive interface makes P2P trading a breeze.
                            </p>
                        </div>
                    </div>
                    <div className='border border-white flex flex-col items-center justify-evenly border-solid lg:h-[70%] w-[20%] rounded-lg'>
                        <div className='w-[100%] flex items-center justify-center'>
                            <p className='lg:text-[29.51px] text-[12px] font-space-grotesk'>Stake It Up!</p>
                        </div>
                        <div className='w-[100px] h-[210px] lg:w-[100%] lg:h-[70%] md:h-[164px] flex items-center justify-center'>
                            <img src={group44} className='md:w-[100%] md:h-[100%] w-[80px] h-[140px] ' alt="" />
                        </div>
                        <div className='w-[100%] flex items-center justify-center '>
                            <p className='p-2 text-justify font-space-grotesk text-[10px]'>
                                Grow your crypto holdings with ease through our staking feature. Earn rewards by participating in network validation and supporting the XRPL ledger.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}

export default MiddleSection