import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='flex justify-center items-center divide-y divide-gray-700 w-full'>
            <div className='divide-y flex flex-col items-center p-4 divide-gray-400'>
                <Link to='/support' className='flex justify-center items-center p-4'>Billing</Link>
                <Link to='/support' className='flex justify-center items-center p-4'>Support</Link>
                <Link to='/support' className='flex justify-center items-center p-4'>Account</Link>
            </div>
            <div className='divide-y flex flex-col items-center p-4'>
                <Link to='/support' className='flex justify-center items-center p-4'>Features</Link>
                <Link to='/support' className='flex justify-center items-center p-4'>Contact Us</Link>
                <Link to='/support' className='flex justify-center items-center p-4'>About Us</Link>
            </div>
            <div className='divide-y flex flex-col items-center p-4'>
                <Link to='/support' className='flex justify-center items-center p-4'>Enterprise</Link>
                <Link to='/support' className='flex justify-center items-center p-4'>Privacy</Link>
                <Link to='/support' className='flex justify-center items-center p-4'>Developers</Link>
            </div>
        </div>
    );
};

export default About;