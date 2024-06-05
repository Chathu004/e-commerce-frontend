import cookies from '../assets/cookiesPro.jpg'
import cake from '../assets/cake.jpg'
import gift from '../assets/gift.jpg'
import tart from '../assets/tart.jpg'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import cooky from '../assets/cookiesPro.jpg'
import cakes from '../assets/cake.jpg'
import tarts from '../assets/tart.jpg'
import gifts from '../assets/gift.jpg'
import Footer from '../components/Footer'

const SubCategory = () => {
    const gridVariants={
        hidden:{opacity:0},
        show:{opacity:1,
            transition:{
                staggerChildren:0.25,
            },
        },
    }

    const gridSquareVariants={
        hidden:{opacity:0},
        show:{opacity:1}
    }
  return (
        <main className=' pt-2 dark:bg-black font-mulish '>
            <div>
                <Header />
            </div>
            <motion.div variants={gridVariants} initial="hidden" animate="show" className='  gap-3 p- h-screen  grid grid-cols-2  p-20 pt-5  max-lg:hidden '>
                <Link to={"cookies/sub"} state={{url:"cookies",image:cooky}}>
                <motion.img variants={gridSquareVariants}  whileHover={{scale:1.05}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={cookies} alt="" />
                <h1 className='absolute z-10 mt-[-30%] ml-[15%] text-white uppercase text-6xl'>Cookies</h1>
                </Link>
                <Link to={"cake/product"} state={{url:"cake",image:cakes}}>
                <motion.img variants={gridSquareVariants}  whileHover={{scale:1.05}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={cake} alt="" />
                <h1 className='absolute z-10 mt-[-30%] ml-[15%] text-white uppercase text-6xl'>cakes</h1>
                </Link>
                <Link to={"tart/product"} state={{url:"tart",image:tarts}}>
                <motion.img variants={gridSquareVariants}  whileHover={{scale:1.05}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={tart} alt="" />
                <h1 className='absolute z-10 mt-[-30%] ml-[15%] text-white uppercase text-6xl'>Tarts</h1>
                </Link>
                <Link to={"gift/product"} state={{url:"gift",image:gifts}}>
                <motion.img variants={gridSquareVariants}   whileHover={{scale:1.05}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={gift} alt="" />
                <h1 className='absolute z-10 mt-[-30%] ml-[15%] text-white uppercase text-6xl'>Gifts</h1>
                </Link>
            </motion.div>
            <motion.div variants={gridVariants} initial="hidden" animate="show" className=' p-16 max-sm:p-4 gap-4 flex flex-col mt-3 lg:hidden'>
                <motion.img variants={gridSquareVariants} whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={cookies} alt="" />
                <motion.img variants={gridSquareVariants} whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={cake} alt="" />
                <motion.img variants={gridSquareVariants} whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={tart} alt="" />
                <motion.img variants={gridSquareVariants} whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={gift} alt="" />
            </motion.div>
            <div className='mt-36'>
            </div>

        </main>
    )
    
  
}

export default SubCategory
