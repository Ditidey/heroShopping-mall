import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className='text-center my-auto font-bold'>
            <div className='rounded-full '>
                <div className='flex font-extrabold space-x-4 text-center'>
                    <h1>x</h1>
                    <h1>x</h1>
                </div>
                <h1 className='font-extrabold'>___</h1>
            </div>
            <h1>{status || 400}</h1>
            <h3 className='mb-24'>{error.message}</h3>
            <Link to='/' className='bg-blue-300 px-3 py-4 font-semibold my-10 rounded-md'>Back to Home Page</Link>
        </div>
    );
};

export default ErrorPage;