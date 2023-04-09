import React from 'react';

const ShopProduct = ({product, handleAddToCart}) => {
    const {name, price, picture, id}= product;
    return (
        <div className='rounded-lg p-6 border'>
            <img className='rounded-lg' src={picture} alt="" />
            <h4 className='font-semibold text-2xl'>{name}</h4>
            <p>Price: ${price}</p>

            <button className='btn-primary w-full mt-5 block' onClick={()=>handleAddToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default ShopProduct;