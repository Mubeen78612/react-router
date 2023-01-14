import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import logo from '../Images/logo.jpg'


function Navbar() {
  return (
    <>
    <header className=' h-[60px] w-screen  bg-slate-500'>
        <div className='flex justify-between items-center w-[100] '>
            <div className='w-[20%}'>
                <img className='h-[50px] w-[50px] rounded-full mt-1' src={logo}/>
            </div>
            <div className='w-[50%]'>
                
                <Link className='px-5 font-bold' to="home">Home</Link>
                <Link className='px-5 font-bold' to="about">About</Link>
                <Link className='px-5 font-bold' to="contact">Contact</Link>
                
            </div>
            <div className='flex space-x-10 text-center'>
                <h1 className='text-2xl font-bold'>{<Icon icon="mdi:cards-heart-outline" />}</h1>
                <h1 className='text-2xl font-bold'>{ <Icon icon="ph:bell-bold" />}</h1>
                <h1 className='text-2xl font-bold'>{<Icon icon="ph:bag-simple" />}</h1>
            </div>

        </div>
    </header>
    
    <Outlet/>

   
    </>
  )
}

export default Navbar;
