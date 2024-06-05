import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Product = () => {
    const location=useLocation();
    const state=location.state
    // const [products, setProducts] = useState([]);
    // const nav = useNavigate();
    // useEffect(()=>{
    //     const url=`http://localhost:8080/product/get/subCategory/${state.url}`    Get product by the name of subcategory;
    //     Axios.get(url).then((res)=>{
    //         setProducts(res.data)
    //     })
    // },[])
  return (
    <div className="block dark:bg-black scroll-custom h-max">
    <Header/>
    <section className='flex flex-col bg-[#fbfcf0] h-max w-screen items-center font-mulish overflow-x-hidden overflow-auto scrollbar-hidden dark:bg-black scroll justify-center'>
        <div className='mt-0 h-72 relative'>
            <img src={state.image} className='h-[100%] w-screen object-cover' alt='Image' /> 
          
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 lg:grid-cols-4 gap-0 pl-10 mt-20 w-[80%] max-lg:w-[90%] max-sm:grid-cols-1 ml-2">  
        {/* {products.map((element)=>{
            
            return(
                <div>
                <ProductCard product={element} id={element.id} key={element.id} image={Img}/>
                </div>
            )
        })}
         */}
        </div>
    </section>
    <Footer />
</div>
  )
}

export default Product
