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




    return (
        <>
            <section>
                <div style={divStyle} className="w-[100%] h-screen flex flex-col items-center justify-around    bg-black text-white ">
                    <div className=' leading-8 text-[65.02px] font-space-grotesk '>Swap Your Tokens
                        <p className='text-[14px] text-right text-[#FFFFFF]'> Powered by Auto-Bridging on <span className='font-bold'>XRPL</span></p>
                    </div>
                    <div className='flex items-start  justify-evenly lg:gap-72 '>
                        <img className='mt-8' src={ProtocolIcon} alt="" />
                        <img src={frame53} alt="" />
                        <img className='mt-8' src={Frame6} alt="" />
                    </div>
                    <div className=' text-[25.29px] font-space-grotesk'>Exchange any cryptocurrency to any other crypto at a market price in seconds</div>
                </div>
            </section>
            <section >
                <div style={divStyle1} className="w-[100%] h-screen z-10  flex  items-center justify-around    bg-black text-white ">
                    <div className='border border-white flex flex-col items-center justify-evenly border-solid h-[70%] w-[20%] rounded-lg'>
                        <div className='w-[100%] flex items-center justify-center'>
                            <p className='text-[29.51px] font-space-grotesk'>Swap Hassle-Free</p>
                        </div>
                        <div className='w-[100%] h-[70%] flex items-center justify-center'>
                            <img src={group39} className='w-[100%] h-[100%]' alt="" />
                        </div>
                        <div className='w-[100%] flex items-center justify-center '>
                            <p className='p-2 text-justify font-space-grotesk text-[10px]'>
                                Say goodbye to the hassle of manually swapping one crypto for another. Xelsior automates the process, providing you with near-instant conversions.
                            </p>
                        </div>
                    </div>
                    <div className='border border-white flex flex-col items-center justify-evenly border-solid h-[70%] w-[20%] rounded-lg'>
                        <div className='w-[100%] flex items-center justify-center'>
                            <p className='text-[29.51px] font-space-grotesk'>Earn Effortlessly</p>
                        </div>
                        <div className='w-[100%] h-[70%] flex items-center justify-center'>
                            <img src={group46} className='w-[100%] h-[100%]' alt="" />
                        </div>
                        <div className='w-[100%] flex items-center justify-center '>
                            <p className='p-2 text-justify font-space-grotesk text-[10px]'>
                                Earn passive income effortlessly with our staking and yield farming options. Maximize your crypto holdings by putting them to work for you.
                            </p>
                        </div>
                    </div>
                    <div className='border border-white flex flex-col items-center justify-evenly border-solid h-[70%] w-[20%] rounded-lg'>
                        <div className='w-[100%] flex items-center justify-center'>
                            <p className='text-[20.51px] font-bold px-4 font-space-grotesk text-center'>Worlds first decentralized P2P powered by XRPL</p>
                        </div>
                        <div className='w-[100%] h-[70%] flex items-center justify-center'>
                            <img src={group22} className='w-[100%] h-[80%]' alt="" />
                        </div>
                        <div className='w-[100%] flex items-center justify-center '>
                            <p className='p-2 text-justify font-space-grotesk text-[10px]'>
                                Find the best deals and execute transactions securely. Whether you're looking to buy or sell, our intuitive interface makes P2P trading a breeze.
                            </p>
                        </div>
                    </div>
                    <div className='border border-white flex flex-col items-center justify-evenly border-solid h-[70%] w-[20%] rounded-lg'>
                        <div className='w-[100%] flex items-center justify-center'>
                            <p className='text-[29.51px] font-space-grotesk'>Stake It Up!</p>
                        </div>
                        <div className='w-[100%] h-[70%] flex items-center justify-center'>
                            <img src={group44} className='w-[100%] h-[100%]' alt="" />
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