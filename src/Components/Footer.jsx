import React from 'react'
import Group from '../Images/Group.png';


function Footer() {

    const divStyle = {
        backgroundImage: `url(${Group})`,
        backgroundAttachment: 'fixed', // Set background-attachment to fixed
        backgroundSize: '100% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center', // Set background-size to 100% 100%

    };


    return (
        <section>
            <div style={divStyle} className="w-[100%] h-screen flex  items-center justify-center pt-10  border border-black border-solid bg-black text-white ">
                <div className=' md:leading-10 flex select-none justify-end   flex-col  h-[80%] w-[50%]'>
                    <span className='md:text-[60.2px] font-space-grotesk font-bold lg:pl-24  leading-none w-[500px]'>
                        Subscribe and Discover More!
                    </span>
                    <span className='md:text-[20.2px] pb-12 lg:pl-24    font-space-grotesk'>
                        Subscribe to our news letter and stay updated
                    </span>
                </div>
                <div className='flex items-center justify-center md:h-[35%] lg:h-[64%] w-[40%]'>
                    <div className='w-[70%] hidden  h-[50%] md:flex flex-col items-center justify-center bg-white rounded-3xl'>
                        <div className='h-[70%] w-[90%] flex gap-0 flex-col items-center justify-center'>
                            <div className='w-[100%] h-[55%] gap-5 flex items-center justify-center'>
                                <input type="text" placeholder='First Name' className='border outline-none w-[50%] p-3 rounded-xl' />
                                <input type="text" placeholder='Last Name' className='border outline-none w-[50%] p-3 rounded-xl' />
                            </div>
                            <div className='w-[100%] flex items-center justify-center'>
                                <input type="text" placeholder='Email' className='border outline-none p-3 w-[100%] rounded-xl' />
                            </div>
                        </div>
                        <div className='h-[30%] w-[100%] flex items-center justify-center'>
                            <button className='bg-black font-space-grotesk  text-white w-[90%] rounded-xl p-3 cursor-pointer lg:text-[16.86px]'>
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Footer
