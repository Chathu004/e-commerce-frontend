
import React from 'react';

const OrderCard = ({ item }) => {
    const { productName, productImgURL, qty, productTot } = item;

    return (
        <div className='flex flex-row justify-between items-center p-5 bg-white dark:bg-[#1a1a1a] mb-2 rounded-md'>
            <img src={`/items/${productImgURL}`} alt={productName} className='w-16 h-16 object-cover' />
            <div className='flex flex-col justify-center ml-4'>
                <h3 className='text-lg font-bold dark:text-white'>{productName}</h3>
                <p className='text-sm dark:text-gray-300'>Qty: {qty}</p>
            </div>
            <h2 className='text-lg font-bold dark:text-white'>LKR {productTot}.00</h2>
        </div>
    );
};

export default OrderCard;



