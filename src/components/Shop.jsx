import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShopProduct from './ShopProduct';
import { setToBd } from '../utils/fakeDb';

const Shop = () => {
    const products = useLoaderData();
    const handleAddToCart = id =>{
         console.log(id)
         setToBd(id);
    }
    return (
        <div >
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 md:mx-24 sm:mx-10'>
                {
                    products.map(product => <ShopProduct 
                        key={product.id} product={product} handleAddToCart={handleAddToCart}></ShopProduct>)
                }
            </div>
        </div>
    );
};

export default Shop;