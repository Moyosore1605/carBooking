import React from 'react'
import Header from '../components/Header'
import mask from '../assets/mask.svg'
import { MdOutlineDirectionsCar } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { SiTarget } from "react-icons/si";
import { TbHelmet } from "react-icons/tb";

export default function Landing() {

    function tripCheck(params) {
        console.log(params);
        
        const other = params.id === "oneWay" ? "roundTrip" : "oneWay";
        if (params.checked) {
            const styles = document.getElementById(other).checked = false;
            params.style.backgroundColor = "#007D48";
        }
    }

    return (
        <main className='ps-10 pe-7'>
            <Header/>
            <div className='flex pt-8 mb-5'>
                <section className='flex flex-col text-left p-3 w-[40%]'>
                    <h1 className='text-[50px] text-green-700 tracking-[1.5px] font-semibold leading-[120%] mb-4'>Book A Company <br /> Ride</h1>
                    <section className='mb-4'>
                        <button className='bg-green-700 text-white p-3 rounded-md'><MdOutlineDirectionsCar/></button>
                        <button className='bg-green-50 p-3 rounded-md ms-3'><TbHelmet /></button>
                    </section>
                    <div className='mb-2'>
                        <input type="checkbox" id="oneWay" onClick={(e)=>tripCheck(e)} />
                        <span className='me-3'>One-way</span>
                        <input type="checkbox" id="roundTrip" onClick={(e)=>tripCheck(e)}/>
                        <span>Round Trip</span>
                    </div>
                    <section className='rounded-md static border-2 p-2 mt-2 mb-1 w-[500px] flex items-center'>
                        <SiTarget className='me-1 text-gray-500'/>
                        <input placeholder='Your current location' className='w-[79%]' />
                        <span className='text-xs relative bottom-6 right-98 z-10 p-1 bg-white'>Pick up location</span>
                    </section>
                    <section className='border-s-1 h-7 ms-3'></section>
                    <section className='rounded-md  border-2 p-2 mt-1 w-[500px] flex items-center'>
                        <IoLocationOutline className='me-1' />
                        <input placeholder='Where are you heading?' className='w-[80%]'/>
                        <span className='text-xs relative bottom-6 right-98 z-10 p-1 bg-white'>Destination</span>
                    </section>
                    <button className='bg-green-700 text-white w-[30%] mt-4 rounded-md p-1'>Book</button>
                </section>
                <img src={mask} width={'44%'} className='ms-10' />
            </div>
            <div className='mt-15'>
                <h1 className='text-green-700 text-[25px] font-semibold'>Available Capitalfield Vehicles</h1>
                <section className='mt-8 flex'>
                    <div>
                        <p className='p-2 bg-green-700 text-white rounded-md'>Available</p>
                    </div>
                </section>
            </div>
        </main>
    )
}
