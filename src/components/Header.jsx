import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:max-w-full lg:max-w-screen-xl-xl sm:max-w-xl lg:px-24 md:px-8 py-8 px-10'>
            <div className='relative flex items-center justify-between'>
                <div className='flex'>
                   <img className='w-12 h-6' src="/public/logo.svg" alt="" />
                   <h3 className='font-bold text-2xl text-blue-900'>Hero Shopping Mall</h3>
                </div>
                <ul className='lg:flex space-x-4 '>
                    <li><NavLink className='font-bold' to='/'>Home</NavLink></li>
                    <li><NavLink className='font-bold' to='/shop'>Shop</NavLink></li>
                    <li><NavLink className='font-bold' to='/about'>About Us</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;