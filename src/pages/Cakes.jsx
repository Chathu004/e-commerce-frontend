import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductFilter from '../components/ProductFilter'
import ProductCard from '../components/ProductCard'
import Cake from '../assets/cake_banner.jpg'
import axios from 'axios'
import Footer from '../components/Footer'

const Cakes = () => {
    const [products, setProducts] = useState([]);
    const categoryId=2;


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
                <ProductFilter collection='CAKES' image={Cake} />
                <div className='flex flex-col justify-center items-center'>
                    <div className="grid grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 lg:grid-cols-4 gap-0 pl-10 mt-20 w-[80%] max-lg:w-[90%] max-sm:grid-cols-1 ml-2">
                        {products.map((product) => (
                            <ProductCard type={2} key={product.id} product={product} image={product.image} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    // //TODO use the below part to connect the api 
    // //(remove the comment and add the correct url)

    // // const[products,setProduct]=useState([]);
    // // useEffect(()=>{
    // //     const url=""//Load all products url
    // //     axios.get(url)
    // //     .then((res)=>{
    // //         setProduct(res.data);
    // //     }) 
    // // },[])

    // //Below is used due to not having a backend
    // let product={
    //     image:"cookies.jpg",
    //     name:"banananananana",
    //     price:"23"
    // }
    // return (
    //     <div>
    //         <section className='bg-[#fbfcf0] font-mulish overflow-x-hidden overflow-auto scrollbar-hidden dark:bg-black scroll justify-center'>
    //             <Header/>
    //             <ProductFilter collection='CAKES' image={Cake}/>
    //             <div className='flex flex-col justify-center items-center'>
    //                 <div className="grid grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 lg:grid-cols-4 gap-0 pl-10 mt-20 w-[80%] max-lg:w-[90%] max-sm:grid-cols-1 ml-2">
    //                     {/* {products.map((element) => {
    //                         return (
    //                             <div>
    //                                 <ProductCard product={element} image={Img} />
    //                                 <ProductCard product={element} image={Im} />
    //                                 <ProductCard product={element} image={Im} />
    //                             </div>
    //                         )
    //                     })}    REMOVE BELOW AFTER CONNECTING API*/}
    //                     <ProductCard product={product} image='d' />
    //                     <ProductCard product= {product}image='sds'/>
    //                     <ProductCard product= {product}image='dds' />
    //                     <ProductCard product= {product}image='dds' />
    //                     <ProductCard product= {product}image='dds' />
    //                     <ProductCard product= {product}image='dds' />
    //                     <ProductCard product= {product}image='dds' />
    //                     <ProductCard product= {product}image='dds' />
    //                 </div>
    //             </div>
    //         </section>
    //         <Footer />
    //     </div>
    )
}

export default Cakes
