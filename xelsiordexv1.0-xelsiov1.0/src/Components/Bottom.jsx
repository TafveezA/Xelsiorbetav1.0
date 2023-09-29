import React from 'react'
import Group37 from "../Images/Group37.png"
import { FiArrowRightCircle } from "react-icons/fi"
import Bit from "../Images/Bit.png"
import ETH from "../Images/ETH.png"
import USDT from "../Images/USDT.png"
import SOL from "../Images/SOL.png"
import XRP from "../Images/XRP.png"
import STX from "../Images/STX.png"
import BNB from "../Images/BNB.png"
import LTC from "../Images/LTC.png"


function Bottom() {

    const divStyle = {
        backgroundImage: `url(${Group37})`,
        backgroundAttachment: 'fixed', // Set background-attachment to fixed
        backgroundSize: '100% 100%', // Set background-size to 100% 100%

    };
    const data = [
        {
            text: '0.01%-0.77 ',
            textSec: 'APR',
            icon: <FiArrowRightCircle size={34} className='cursor-pointer' />,
            img: Bit,
            title: 'BTC'
        },
        {
            text: '0.01%-0.77 ',
            textSec: 'APR',
            icon: <FiArrowRightCircle size={34} className='cursor-pointer' />,
            img: ETH,
            title: 'ETC'
        },
        {
            text: '0.01%-0.77 ',
            textSec: 'APR',
            icon: <FiArrowRightCircle size={34} className='cursor-pointer' />,
            img: USDT,
            title: 'USDT'
        },
        {
            text: '0.01%-0.77 ',
            textSec: 'APR',
            icon: <FiArrowRightCircle size={34} className='cursor-pointer' />,
            img: SOL,
            title: 'SOL'
        },

        {
            text: '0.01%-0.77 ',
            textSec: 'APR',
            icon: <FiArrowRightCircle size={34} className='cursor-pointer' />,
            img: LTC,
            title: 'LTC'
        },
        {
            text: '0.01%-0.77 ',
            textSec: 'APR',
            icon: <FiArrowRightCircle size={34} className='cursor-pointer' />,
            img: STX,
            title: 'STX'
        },
        {
            text: '0.01%-0.77 ',
            textSec: 'APR',
            icon: <FiArrowRightCircle size={34} className='cursor-pointer' />,
            img: BNB,
            title: 'BNB'
        },

        {
            text: '0.01%-0.77 ',
            textSec: 'APR',
            icon: <FiArrowRightCircle size={34} className='cursor-pointer' />,
            img: XRP,
            title: 'XRP'
        },


    ];

    return (
        <section>
            <div style={divStyle} className="w-[100%] lg:h-screen flex flex-col items-center justify-center pt-5 pb-5 lg:pt-10  border border-black border-solid bg-black text-white ">
                <div className=' leading-8 text-center text-[30px] lg:text-[65.02px] font-space-grotesk '>Earn Daily Rewards
                    <p className='lg:text-[21px] text-[10px] leading-5 lg:leading-6 text-center text-[#FFFFFF]'> A simple and secure way to earn daily reward on popular<br></br><span className='text-center'>tokens </span></p>
                </div>
                <div className='flex h-[60%]  w-[70%] '>
                    <div className='flex flex-wrap justify-evenly gap-3 items-center w-[100%] h-[100%] '>
                        {data.map((item, key) => (
                            <div key={key} className='border border-white flex flex-col items-center justify-center border-solid h-[38%] w-[258px] rounded-xl'>
                                <div className='w-[100%] h-[30%] flex items-center justify-start '>
                                    <img src={item.img} alt="" className='p-2 ' height={"35px"} /><span className=' font-space-grotesk font-bold text-[22.38px]'>{item.title}</span>
                                </div>
                                <div className='w-[100%] h-[40%] flex   tracking-tight  items-center justify-top pl-3 pb-3'>
                                    <p className='font-space-grotesk font-bold text-[31.75px] text-[#00A478]'>{item.text}<span className='text-[15.26px]'>{item.textSec}</span></p>
                                </div>
                                <div className='w-[100%] h-[30%] flex items-center justify-end pr-10 '>
                                    {item.icon}
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className='mt-6 ' >
                    <button className=' text-[16.86px] font-space-grotesk px-6 py-3 rounded-full cursor-pointer font-bold'>
                        Start to Earn
                    </button>
                </div>
            </div>
        </section >

    )
}

export default Bottom
