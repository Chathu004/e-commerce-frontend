import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductFilter from '../components/ProductFilter'
import ProductCard from '../components/ProductCard'
import Tart from '../assets/tart_banner.jpg'
import axios from 'axios'
import Footer from '../components/Footer'

const Tarts = () => {
    const [products, setProducts] = useState([]);
    const categoryId=3;

    useEffect(() => {
        const url = `http://localhost:8080/product/category/${categoryId}`;
        axios.get(url)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div>
            <section className='bg-[#fbfcf0] font-mulish overflow-x-hidden overflow-auto scrollbar-hidden dark:bg-black scroll justify-center'>
                <Header />
                <ProductFilter collection='TARTS' image={Tart} />
                <div className='flex flex-col justify-center items-center'>
                    <div className="grid grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 lg:grid-cols-4 gap-0 pl-10 mt-20 w-[80%] max-lg:w-[90%] max-sm:grid-cols-1 ml-2">
                        {products.map((product) => (
                            <ProductCard type={3} key={product.id} product={product} image={product.image} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
    }

export default Tarts
