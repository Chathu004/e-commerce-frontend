import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product,...props}) => {
    // Assuming each product has an 'imgURL' property
    const { id, name,description, price, imgURL,categoryId } = product;
    // console.log(props.type)
    return (
        <Link to={`/productSelect/${categoryId}/${id}`} className="w-225 flex gap-3 flex-col justify-center tracking-wider font-mulish mb-20">
         {/* <Link to={`/productSelect/1/${product.id}`} className="w-225 flex gap-3 flex-col justify-center tracking-wider font-mulish mb-20"> */}
            <img src={`/items/${imgURL}`} className='w-[80%]' alt={name} />
            <h3 className='text-black text-2xl px-2 font-bold dark:text-white py-4'>{name}</h3>
            <h3 className='text-black text-lg px-2 dark:text-white py-4'>{description}</h3>
            <h1 className='text-xl px-2 font-bold dark:text-white'>LKR {price}.00</h1>
            {/* <p className='px-2 dark:text-white'>{name}</p> */}
        </Link>
    );
};

export default ProductCard;


