import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section> 
        <div className='text-center bg-gray-300'>
             <h1 className='font-extrabold text-3xl title-text lg:leading-tight pt-20 py-4'>Welcome to Hero Shopping Mall</h1>
             <h4 className='text-2xl pt-4'>Best E-commerce platform for buying high quality Smart Home <br /> Appliances at extremely affordable Price.</h4>
             <div className='flex space-x-4 pt-12 flex-wrap justify-center pb-20 mb-16'>
                <Link to='/shop'><button className='btn-primary'>Shop Now</button></Link>
                <Link to='/about'><button className='btn-outlined'>Learn More</button></Link>
             </div>
        </div>
        <img className='lg:-mt-28 -mt-12 mb-12 mx-auto shadow-md w-5/6 h-3/6 rounded-lg' src='.././../public/hero.jpg' alt="" />
        </section>
    );
};

export default Home;