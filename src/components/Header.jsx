import React from 'react'
import logo from '../assets/logo.svg'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineDirectionsCar, MdQuestionMark } from "react-icons/md";
import { PiClockCountdownBold } from "react-icons/pi";
import { useState } from 'react';

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);



    return (
        <main className='flex justify-between items-center'>
            <img src={logo} width={'7%'} />
            <div>
                <ul className='flex space-x-10'>
                    <li className='tracking-[1.5px] text-xl cursor-pointer font-semibold'>Home</li>
                    <li className='tracking-[1.5px] text-xl cursor-pointer text-gray-400 font-semibold'>Book</li>
                    <li className='tracking-[1.5px] text-xl cursor-pointer text-gray-400 font-semibold'>Available</li>
                    <li className='tracking-[1.5px] text-xl cursor-pointer text-gray-400 font-semibold'>FAQ</li>
                </ul>
            </div>
            <div className='flex items-center space-x-5 flex-col' >
                <button className='bg-green-700 p-3 rounded-xl text-white flex justify-between w-17' onClick={() => setIsHovered(!isHovered)}>
                    <FaRegUser/>
                    <IoMdArrowDropdown className={`${isHovered ? 'hidden' : 'block'}`} />
                    <IoMdArrowDropup className={`${isHovered ? 'block' : 'hidden'}`}/>
                </button>
                <section className={`bg-white text-black p-3 flex flex-col justify-center rounded-2xl shadow-xl mt-3 absolute top-22 right-5 ${isHovered ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col items-start mb-1.5'>
                        <li className='mb-2 p-2 text-lg cursor-pointer text-gray-800 flex items-center hover:bg-gray-200'>
                            <FaRegUser className='mr-2'/><span>Manage Account</span>
                        </li>
                        <li className='flex items-center w-full mb-2 p-2 text-lg cursor-pointer text-gray-800 hover:bg-gray-200'>
                            <PiClockCountdownBold className='mr-2'/><span>Activities</span>
                        </li>
                        <li className='flex items-center w-full mb-2 p-2 text-lg cursor-pointer text-gray-800 hover:bg-gray-200'>
                        <MdOutlineDirectionsCar className='mr-2' /><span>Book</span>
                        </li>
                        <li className='flex items-center w-full mb-2 p-2 text-lg cursor-pointer text-gray-800 hover:bg-gray-200'>
                        <MdQuestionMark  className='mr-2'/><span>Help</span>
                        </li>
                    </ul>
                    <button className='text-red-700 border-2 border-red-700 pt-2 pb-2 pl-6 pr-6 rounded-lg hover:bg-red-200'>Sign Out</button>
                </section>
            </div>
        </main>
    )
}
