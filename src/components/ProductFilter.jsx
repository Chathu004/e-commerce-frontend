import React from 'react'

const ProductFilter = (props) => {
    return (
        <div className='mt-0 h-72 relative'>
            <img src={props.image} className='h-[90%] w-screen object-cover' alt='summer image' />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl tracking-widest font-bold text-center">
                <h1>{props.collection}</h1>
            </div>
        </div>
    )
}

export default ProductFilter
