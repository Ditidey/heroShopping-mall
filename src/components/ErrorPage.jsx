import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div>
            <div className='rounded-full '>
                <div className='flex'>
                    <h1>x</h1>
                    <h1>x</h1>
                </div>
                <h1>___</h1>
            </div>
            <h1>{status || 400}</h1>
            <h3>{error.message}</h3>
        </div>
    );
};

export default ErrorPage;