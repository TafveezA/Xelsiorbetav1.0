import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Images/xelsior-logo.png"
import background from "../Images/Group2.png"
import group38 from "../Images/Group38.png"
import Xelsiorlogo from "../Images/xelsior-moto-logo.png"
import "../Css/Style.css"




function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Navbar() {


    const [toggleNav, setToggleNav] = useState(false);

    const handleToggleNav = () => {
        setToggleNav(!toggleNav);
    };

    const handleMouseEnter = () => {
        setToggleNav(true);
    };

    const handleMouseLeave = () => {
        setToggleNav(false);
    }
    const divStyle = {
        backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed', // Set background-attachment to fixed
        backgroundSize: '100% 100%', // Set background-size to 100% 100%

    };

    return (
        <>
            <section >
                <div style={divStyle} className="w-[100%] h-screen  border border-black border-solid bg-black text-white ">
                    <div className=" justify-between bg-black  select-none  box-border lg:flex-nowrap flex-nowrap pr-3  sm:pt-20  flex items-center md:pt-10 md:pl-10  md:pr-14 md:justify-between text-slate-50 h-[10%]">
                        <div className="flex  justify-start flex-nowrap outline-none  items-center ">
                            <NavLink to="/" className="cursor-pointer outline-none ">
                                <img
                                    src={logo}
                                    className="flex-auto h-[105px] outline-none  lg:w-[122px] lg:h-24"
                                    alt="xelsior-logo"
                                />
                            </NavLink>
                        </div>
                        <button
                            onClick={handleToggleNav}
                            type="button"
                            className="bg-white  justify-end inline-flex items-center p-2 mb-2 pl-3 pr-3   rounded-md md:hidden focus:outline-none"
                        >
                            <svg
                                className="w-8 h-[30px] text-black"
                                aria-hidden="true"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        <div className="items-center  bg-black text-white select-none flex-wrap hidden   lg:font-semibold lg:block md:w-fit mr-6  md:ml-20 2xl:ml-44 w-full">
                            <ul className="flex gap-10 font-space-grotesk text-[18px] font list-none no-underline items-center space-x-6  md:flex-nowrap md:space-x-10  ">
                                <li>
                                    <NavLink
                                        to="/"
                                        className="  cursor-pointer text-white  no-underline"
                                    >
                                        Trade
                                    </NavLink>
                                </li>

                                <li className=" cursor-pointer text-white  no-underline">
                                    <NavLink
                                        to="/"
                                        className=" cursor-pointer text-white  no-underline"
                                    >
                                        Swap
                                    </NavLink>
                                </li>


                                <li className=" cursor-pointer text-white  no-underline">
                                    <NavLink
                                        to="/"
                                        className=" cursor-pointer text-white  no-underline"
                                    >
                                        P2P
                                    </NavLink>
                                </li>
                                <li className=" cursor-pointer text-white  no-underline">
                                    <NavLink
                                        to="/"
                                        className=" cursor-pointer text-white  no-underline"
                                    >
                                        Staking
                                    </NavLink>
                                </li>

                                <li className=" cursor-pointer text-white  no-underline">
                                    <NavLink
                                        to="/"
                                        className=" cursor-pointer text-white  no-underline"
                                    >
                                        Earn
                                    </NavLink>
                                </li>

                            </ul>
                        </div>


                        <div className="hidden select-none w-full md:block md:w-auto">
                            <NavLink
                                to="/"
                                className="relative bg-white no-underline font-space-grotesk font-bold  flex items-center justify-center py-4 px-6   text-black  rounded-3xl "
                            >
                                <span className="text-[18px]  ">
                                    Connect Wallet
                                </span>
                            </NavLink>
                        </div>
                    </div>

                    {toggleNav && (
                        <div
                            id="dropdownHover"
                            className="absolute z-10 divide-y md:mt-10 divide-gray-100 bg-black opacity-75 text-white rounded-lg shadow w-60  transition-all duration-700"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <ul className="flex flex-col gap-5 font-space-grotesk text-[18px] font list-none no-underline items-left  md:flex-nowrap md:space-x-10  ">
                                <li>
                                    <NavLink
                                        to="/"
                                        className="  cursor-pointer text-white  no-underline"
                                    >
                                        Trade
                                    </NavLink>
                                </li>

                                <li className=" cursor-pointer text-white  no-underline">
                                    <NavLink
                                        to="/"
                                        className=" cursor-pointer text-white  no-underline"
                                    >
                                        Swap
                                    </NavLink>
                                </li>


                                <li className=" cursor-pointer text-white  no-underline">
                                    <NavLink
                                        to="/"
                                        className=" cursor-pointer text-white  no-underline"
                                    >
                                        P2P
                                    </NavLink>
                                </li>
                                <li className=" cursor-pointer text-white  no-underline">
                                    <NavLink
                                        to="/"
                                        className=" cursor-pointer text-white  no-underline"
                                    >
                                        Staking
                                    </NavLink>
                                </li>

                                <li className=" cursor-pointer text-white  no-underline">
                                    <NavLink
                                        to="/"
                                        className=" cursor-pointer text-white  no-underline"
                                    >
                                        Earn
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    )}
                    <div className="w-[94%] lg:ml-24 ml-16 mr-10 flex items-center  justify-between h-[89%] ">
                        <div className="w-[40%] h-[100%] flex flex-col items-center mb-32 md:mb-0 justify-center text-white">
                            <div className="flex flex-col gap-5 lg:gap-10 ">
                                <div className="w-[100%] flex items-center justify-center h-[30%] ">
                                    <img src={Xelsiorlogo} alt="Xelsior-logo" className="lg:w-[488px] w-[250px] md:w-[350px]   lg:h-[164px]" />
                                </div>
                                <div className="flex flex-col items-center justify-center lg:gap-4">
                                    <div className="font-space-grotesk select-none lg:leading-3 text-[10px] md:text-[16px] lg:text-[16px]">
                                        <p className="text-center ">Trade smarter, faster, and safer with [Your DEX Name], the</p>
                                        <p className="text-center "> future of decentralized finance on the XRP Ledger.</p>
                                    </div>
                                    <div className='flex  items-center justify-center' >
                                        <button className=' lg:text-[16.86px] md:text-[16px] font-space-grotesk lg:px-6 md:px-5 px-3 py-2 rounded-full cursor-pointer font-bold'>
                                            Trade Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[60%] h-[100%]  text-white ">
                            <img src={group38} alt="xelsior" className="w-[100%]  h-[100%]" />
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
}

export default Navbar;
