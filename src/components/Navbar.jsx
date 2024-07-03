import React, { useState } from 'react';
import Newlogo from '../assets/ee-newlogo.svg';
// import Yellowcircle from '../assets/yellow_circle.svg';
import {Menu, X} from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
        <div className='flex  items-center justify-between m-10'>
            <img src={Newlogo} alt='nologo' className='h-16 md:h-16'></img>
            <div className='md:flex text-2xl hidden'>
                <a className='p-8' href='www.google.com'>Home</a>
            </div>
            <div className='md:hidden flex justify-center'>
                <button onClick={toggleNavbar}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
        </div>
        {isOpen && (
            <div className='flex flex-col items-center basis-full text-2xl'>
                <a href='www.google.com' className='cursor-pointer p-8'>Home</a>
            </div>
        )}
        </>
    );
}

export default Navbar;