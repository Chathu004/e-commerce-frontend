
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import addDark from '../assets/Plus.png';
import addDarkMinus from '../assets/Minus.png';

const ProductSelection = () => {
    let { id, categoryId } = useParams();
    // categoryId=1;
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({
        id: 0,
        image: '',
        name: '',
        price: 0,
        description: '',
    });
    // -------------------
    const [disabled, setIsDisabled] = useState(false);
    const [count, setCount] = useState(1);
    const [formData, setFormData] = useState({
        id: 0,
        total: 0,
        qty: 1,
        price: 0,
        name:"",
        image:"",
        // stockId: 0,
        // productId: 0,
        userId:302,

    });
    // -----------------------

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/product/category/${categoryId}/item/${id}`);
                setData({
                    id: res.data.id,
                    image: res.data.imgURL,
                    name: res.data.name,
                    description: res.data.description,
                    price: res.data.price,
                });
                // -----------------
                setFormData((prevData) => ({
                    ...prevData,
                    price: res.data.price,
                    total: res.data.price,
                    id: res.data.id,
                }));
                // -------------------
            } catch (error) {
                navigate('/error404');
            }
        };
        fetchProduct();
    }, [id, navigate, categoryId]);

    const addCart = async () => {

        try {
            const url = 'http://localhost:8080/cart/add';

            const res = await axios.post(url, {
                id: formData.id,
                name:formData.productName,
                image:formData.productImgURL,
                qty: formData.qty,
                productTot: formData.total,
                userId: formData.userId,
            });
            if (res.status === 201) {
                setIsOpen(true);
                navigate('/order');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }

    };

    const add = () => {
        setCount(prevCount => prevCount + 1);
        const newQty = formData.qty + 1;
        setFormData((prevData) => ({
            ...prevData,
            qty: newQty,
            total: prevData.price * newQty,
        }));
    };

    const sub = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
            const newQty = formData.qty - 1;
            setFormData((prevData) => ({
                ...prevData,
                qty: newQty,
                total: prevData.price * newQty,
            }));
        }
    };
    // ----------------------------



    return (
        // <div className='flex flex-col dark:bg-black p-0 mt-0 font-mulish'>
        //     <div className='mt-0 p-0'>
        //         <Header />
        //     </div>

        //     <div className={`flex p-20 m-20 bg-[#F4F4DC] max-lg:flex-col max-md:p-3 max-md:m-7 mb-20 dark:bg-[#18191b] dark:text-white rounded-xl lg:p-10 ${isOpen ? 'overflow-hidden' : 'overflow-scroll'}`}>
        //         <div className='w-1/3 max-lg:w-2/3 max-lg:p-5 max-lg:ml-16 max-md:ml-10 lg:w-2/3 flex'>
        //             <motion.img whileHover={{ scale: 1.05 }} className='h-[100%] object-cover' src={`/items/${data.image}`} alt="selected product" />
        //         </div>
        //         <div className='max-xl:ml-14 flex flex-col w-2/3 ml-16 max-lg:w-full max-lg:ml-0 max-lg:mt-5 max-md:p-2'>
        //             <h1 className='max-xl:text-xl text-4xl text-black font-mulish font-extrabold tracking-widest max-lg:text-2xl max-lg:mt-3 max-md:text-lg max-lg:ml-[20%] dark:text-white'>{data.name}</h1>
        //             {/* <p className='max-xl:text-xs mt-5 text-base font-mulish p-5 max-lg:text-xs max-md:text-[8px]'>{data.description}</p> */}
        //             <p className='text-sm md:text-base lg:text-lg mt-5 font-mulish p-5'>{data.description}</p>
        //             <h3 className='mb-0 max-xl:text-[20px] text-2xl m-10 tracking-wider font-extralight max-lg:text-lg max-md:text-base max-md:m-5 max-md:mb-0'>LKR {data.price}</h3>
        //             <h5 className='text-sm text-gray-300 ml-5 max-lg:text-xs max-lg:ml-6 max-md:text-[10px] max-md:m-3 max-md:mt-0'>(Shipping calculated at checkout)</h5>
        //             {/* <h3 className='max-xl:text-base text-lg ml-4 mt-5 max-lg:text max-lg:text-sm max-lg:ml-10 max-md:text-xs max-md:ml-3'>Size </h3> */}

        //             <div className='flex p-5 justify-center max-md:gap-3 gap-2 max-md:hidden'>
        //                 <motion.img whileHover={{ scale: 1.15 }} className='size-10 hover:size-11 border-none hidden dark:flex' src={addDark} alt="" />
        //                 <motion.img whileHover={{ scale: 1.15 }} className='size-10 hover:size-11 border-none hidden dark:flex' src={addDarkMinus} alt="" />
        //                 <motion.button whileHover={{ scale: 1.05 }} className={`${disabled ? 'pointer-events-none opacity-50 bg-gray-300 cursor-not-allowed ml-4 w-[60%] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' : 'ml-4 bg-white text-gray-900 w-[60%] hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'}`} onClick={addCart}>Add Cart</motion.button>
        //             </div>
        //             <div className='max-md:gap-3 gap-2 flex mt-5 justify-center lg:hidden md:hidden 2xl:hidden'>
        //                 <motion.img whileHover={{ scale: 1.15 }} className='size-8 hover:size-9 border-none hidden dark:flex' src={addDark} alt="" />
        //                 <motion.img whileHover={{ scale: 1.15 }} className='size-8 hover:size-9 border-none hidden dark:flex' src={addDarkMinus} alt="" />
        //             </div>
        //             <div className='mt-5 ml-5 md:hidden'>
        //                 <motion.button whileHover={{ scale: 1.05 }} className={`${disabled ? 'w-[90%] pointer-events-none opacity-50 bg-gray-300 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' : 'bg-white text-gray-900 w-[90%] hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'}`} onClick={addCart}>Add Cart</motion.button>
        //             </div>
        //         </div>
        //     </div>
        //     <Footer />
        // </div>


        // -------------------------------
        <div className='flex flex-col dark:bg-black p-0 mt-0 font-mulish'>
        <div className='mt-0 p-0'>
            <Header />
        </div>

        <div className={`flex p-20 m-20 bg-[#F4F4DC] max-lg:flex-col max-md:p-3 max-md:m-7 mb-20 dark:bg-[#18191b] dark:text-white rounded-xl lg:p-10 ${isOpen ? 'overflow-hidden' : 'overflow-scroll'}`}>
            <div className='w-1/3 max-lg:w-2/3 max-lg:p-5 max-lg:ml-16 max-md:ml-10 lg:w-2/3 flex'>
                <motion.img whileHover={{ scale: 1.05 }} className='h-[100%] object-cover' src={`/items/${data.image}`} alt="selected product" />
            </div>
            <div className='max-xl:ml-14 flex flex-col w-2/3 ml-16 max-lg:w-full max-lg:ml-0 max-lg:mt-5 max-md:p-2'>
                <h1 className='text-3xl md:text-2xl lg:text-4xl text-black font-mulish font-extrabold tracking-widest dark:text-white'>{data.name}</h1>
                <p className='text-lg  md:text-xl mt-5 text-black font-semibold p-10'>{data.description}</p>
                {/* <h3 className='text-lg md:text-xl lg:text-2xl mb-0 m-10 tracking-wider font-extralight'>LKR {data.price}</h3> */}
                <h3 className='text-lg md:text-xl lg:text-2xl mb-2 m-10 tracking-wider font-bold'>LKR {data.price}</h3>
                <h5 className='text-xs md:text-sm lg:text-base text-gray-500 ml-5'>(Shipping calculated at checkout)</h5>
                {/* <h3 className='text-xs md:text-base lg:text-lg ml-4 mt-5'>Qty </h3> */}


                <div className="flex justify-center m-5"></div>
                <div className='flex p-40 justify-center max-md:gap-3 gap-2'>
                    <motion.img whileHover={{ scale: 1.15 }} className='size-10 hover:size-11 border-none  bg-green-600 dark:flex' src={addDark} alt="Add" onClick={add} />
                    {/* <p>gfgfgfgf</p> */}
                    <motion.img whileHover={{ scale: 1.15 }} className='size-10 hover:size-11 border-none bg-green-600 dark:flex' src={addDarkMinus} alt="Subtract" onClick={sub} />
                    
                    <motion.button whileHover={{ scale: 1.05 }} className={`${disabled ? 'pointer-events-none opacity-50 bg-gray-300 cursor-not-allowed ml-4 w-[60%] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' : 'ml-4 bg-black text-white  w-[60%] hover:text-white border-gray-300 focus:outline-none hover:bg-red-400 focus:ring-4 focus:ring-gray-100 font-bold rounded-lg text-base px-5 py-2.5 me-2 mb-2'}`} onClick={addCart}>Add Cart</motion.button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
        // -------------------------------
    );
};

export default ProductSelection;



// this is correct for cookie process above code ||



// here is dasha's one under||

// import product from '../assets/cookies.jpg'
// import Header from '../components/Header'
// import React, { useEffect, useState } from "react";
// import { motion } from 'framer-motion'
// import addDark from '../assets/Plus.png'
// import addDarkMinus from '../assets/Minus.png'
// import Footer from '../components/Footer'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import Cart from '../components/Cart'
// const ProductSelection = () => {
//     const nav=useNavigate();
//     function addCart(e){
//         nav("/order")
//     }



//     //TODO: Fix customer ID ( Currently customer Id is fixed as 1 when the product is add to the cart)
//     // const useNav = useNavigate();
//     // const { id } = useParams();
//     const [isOpen, setIsOpen] = useState(false)
//     const [data, setData] = useState({
//         id: 0,
//         image: '',
//         name: '',
//         price: 0,
//         description: '',
//     });
//     // const [stock, setStock] = useState(10);


//     // useEffect(() => {
//     //     const url = `http://localhost:8080/product/get/${id}`
//     //     axios.get(url)
//     //         .then((res) => {
//     //             setData({
//     //                 id: res.data.id,
//     //                 name: res.data.name,
//     //                 description: res.data.desc,
//     //                 price: res.data.price,
//     //             })
//     //         })
//     //         .catch(error => useNav('/error404'));
//     // }, [])

//     // const [count, setCount] = React.useState(1)
//     const [disabled, setIsDisabled] = React.useState(false);
//     // const [cartItem, setCartItem] = React.useState([])
//     // const [errorMessage, setErrorMessage] = React.useState("")
//     // const [formData, setFormData] = React.useState({
//     //     id: 0,
//     //     total: 0,
//     //     qty: 1,
//     //     price: 0,
//     //     stockId: 0
//     // })
//     // const addCart = async (e) => {
//     //     if (!isSelectColor && !isSelectSize) {
//     //         setErrorMessage("choose options to proceed")

//     //         setIsSelectColor(null);
//     //         setSelectSize(null);

//     //     } else if (!isSelectColor && isSelectSize) {
//     //         setErrorMessage("please choose color")
//     //         setIsSelectColor(null)
//     //     } else if (!isSelectSize && isSelectColor) {
//     //         setErrorMessage("please choose size")
//     //         setSelectSize(null);
//     //     } else {
//     //         const newItem = {
//     //             colorName: isSelectColor,
//     //             preferSize: isSelectSize
//     //         }
//     //         setCartItem([...cartItem, newItem])
//     //         setErrorMessage("")
//     //         const url = 'http://localhost:8080/cart/add';
//     //         console.log(formData.total);
//     //         await axios.post(url, {
//     //             id: 0,
//     //             stock: { id: formData.stockId },
//     //             qty: formData.qty,
//     //             productTot: formData.total,
//     //             isComplete: false,
//     //             customer:{
//     //                 id:1
//     //             }
//     //         }).then(res =>{
//     //             if(res.status===200){
//     //                 console.log("status came out correct")
//     //                 setIsOpen(true);

//     //             }
//     //         });
//     //     }
        
//     // }


//     // function add(params) {
//     //     setFormData((prev) => {
//     //         return {
//     //             ...prev,
//     //             qty: prev.qty + 1
//     //         }
//     //     })
//     //     setCount(prevCount => prevCount + 1)
//     //     let t = formData.price * (formData.qty + 1);
//     //     setFormData((prev) => {
//     //         return {
//     //             ...prev,
//     //             total: t
//     //         }
//     //     });
//     // }


//     // function sub(params) {
//     //     if (count > 1) {
//     //         setFormData((prev) => {
//     //             return {
//     //                 ...prev,
//     //                 qty: prev.qty - 1
//     //             }
//     //         })
//     //         setCount(prevCount => prevCount - 1)
//     //         let t = formData.price * (formData.qty - 1);
//     //         setFormData((prev) => {
//     //             return {
//     //                 ...prev,
//     //                 total: t
//     //             }
//     //         });
//     //     }
//     // }




//     return (
//         <div className=' flex flex-col dark:bg-black p-0 mt-0 font-mulish'  >
//             <div className='mt-0 p-0'>
//                 <Header />
//             </div>

//                 <div className={`flex p-20  m-20 bg-[#F4F4DC]  max-lg:flex-col max-md:p-3 max-md:m-7  mb-20  dark:bg-[#18191b] dark:text-white rounded-xl lg:p-10 ${isOpen === true ? `overflow-hidden` : `overflow-scroll`}`}>

//                     <div className=' w-1/3 max-lg:w-2/3 max-lg:p-5 max-lg:ml-16    max-md:ml-10 lg:w-2/3 flex '>
//                     {/* <div className={`mt-[-4%] absolute mr-[-9%] ${isOpen==true?`fixed`:``}`}> */}
//                         {/* <Cart /> */}
//                     {/* </div> */}
//                         <motion.img whileHover={{ scale: 1.05 }} className=' h-[100%]  object-cover  ' src={product} alt="selected product image" />
//                     </div>
//                     <div className=' max-xl:ml-14 flex flex-col w-2/3  ml-16 max-lg:w-full max-lg:ml-0 max-lg:mt-5 max-md:p-2   '>
//                         <h1 className=' max-xl:text-xl text-4xl text-black  font-mulish font-extrabold tracking-widest  max-lg:text-2xl max-lg:mt-3  max-md:text-lg max-lg:ml-[20%] dark:text-white'>{data.name}</h1>
//                         <p className=' max-xl:text-xs mt-5 text-base font-mulish p-5  max-lg:text-xs max-md:text-[8px]'>{`data.description`}</p>

//                         <h3 className='mb-0 max-xl:text-[20px]  text-2xl m-10 tracking-wider font-extralight max-lg:text-lg max-md:text-base max-md:m-5 max-md:mb-0'>{`LKR ${`data.price`}`}</h3>
//                         <h5 className=' text-sm text-gray-300 ml-5 max-lg:text-xs max-lg:ml-6 max-md:text-[10px] max-md:m-3 max-md:mt-0' >(Shipping calculated at checkout)</h5>
//                         <h3 className=' max-xl:text-base text-lg ml-4 mt-5 max-lg:text max-lg:text-sm max-lg:ml-10 max-md:text-xs max-md:ml-3'>Size </h3>

//                         {/* <div className='flex' >
//                             <span className=' mt-10 ml-4 max-md:text-xs max-md:ml-3'>In Stock ({`stock`})</span>
//                             {errorMessage && <h3 className='mx-12 mb-3  flex justify-center py-3 text-red-800 bg-red-100 rounded-md w-[55%] max-xl:hidden mt-10 ml-[20%] text-sm'>{`errorMessage`}</h3>}
//                         </div>
//                         {errorMessage && <h3 className='px-3  truncate  flex justify-center py-3 text-red-800 bg-red-100 rounded-md  mt-10 ml-[8%] text-xs xl:hidden'>{`errorMessage`}</h3>} */}


//                         <div className='flex  p-5 justify-center max-md:gap-3 gap-2 max-md:hidden '>

//                             <motion.img whileHover={{ scale: 1.15 }} className=' size-10  hover:size-11 border-none hidden dark:flex'  src={addDark} alt="" />
//                             {/* <span className='size-10  w-14 text-lg  p-2 ml-1  bg-white pl-5 pb-9 dark:text-white dark:bg-black'>{count}</span> */}
//                             <motion.img whileHover={{ scale: 1.15 }} className=' size-10  hover:size-11 border-none hidden dark:flex'  src={addDarkMinus} alt="" />
//                             <motion.button whileHover={{ scale: 1.05 }} className={`${disabled == true ? `pointer-events-none opacity-50 bg-gray-300 cursor-not-allowed  ml-4 w-[60%] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2` : ` ml-4 bg-white text-gray-900  w-[60%] hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}`} onClick={(e) => addCart(e)}>Add Cart</motion.button>
//                         </div>
//                         <div className='  max-md:gap-3 gap-2 flex mt-5 justify-center  lg:hidden md:hidden 2xl:hidden  ' >
//                             <motion.img whileHover={{ scale: 1.15 }} className=' size-8  hover:size-9 border-none hidden dark:flex'  src={addDark} alt="" />
//                             {/* <span className=' size-2  w-14 text-sm  pt-2  ml-1  bg-white pl-5 pb-6 dark:text-white dark:bg-black'>{count}</span> */}
//                             <motion.img whileHover={{ scale: 1.15 }} className=' size-8  hover:size-9 border-none hidden dark:flex' src={addDarkMinus} alt="" />
//                         </div>
//                         <div className='mt-5 ml-5 md:hidden'>
//                             <motion.button whileHover={{ scale: 1.05 }} className={`${disabled === true ? ` w-[90%] pointer-events-none opacity-50 bg-gray-300 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2` : `  bg-white text-gray-900  w-[90%] hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}`} onClick={(e) => addCart(e)}>Add Cart</motion.button>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />

           
//         </div>
//     )
// }

// export default ProductSelection