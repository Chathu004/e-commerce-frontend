import Header from '../components/Header'
import Footer from '../components/Footer'
import Tick from '../assets/tick.gif'
import TickDark from '../assets/tick-dark.gif'
import { Link, useNavigate } from 'react-router-dom'

const OrderComplete = () => {
    const nav = useNavigate();
        setTimeout(() => {
        nav('/home')
        }, 16000);

    return (
        <div className='dark:bg-black font-mulish h-screen'>
            <Header />
            <div className='flex justify-center  items-center  flex-col  max-md:ml-[-3%] h-[80%] dark:bg-black '>
                <img src={Tick} className='dark:hidden mt-[-5%]' alt='success image' />
                <img src={TickDark} className='dark:flex hidden w-[30%]' alt='success image' />
                <div className='justify-center items-center flex flex-col'>
                    <h1 className='text-5xl mt-[-5%] max-lg:text-3xl font-bold tracking-wider dark:text-white dark:mt-2'>Order Success !</h1>
                    <div className='flex md:justify-center md:items-center gap-1 flex-col mt-10  max-md:w-[80%] '>
                        <p className='tracking-wide text-gray-400 max-lg:text-sm max-md:text-base'>Thank you for ordering at Bake us. Your order will be processed as soon as possbile.</p>
                        <p className='tracking-wide text-gray-400 max-lg:text-sm max-md:text-base'>Make sure you make a note of your order, no <span className='font-bold font-sans text-lg'>123</span></p>
                        <p className='tracking-wide text-gray-400 max-lg:text-sm max-md:text-base'>You will be reciving a email shortly with the invoice attached.</p>
                    </div>
                </div>
                <button className='mt-10 bg-black px-5 py-4 text-white rounded-md hover:bg-gray-600 active:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 max-md:w-[70%] max-md:px-1 max-md:py-3 max-lg:mb-8 max-md:ml-[-6%]'><Link to='/home'>Continue Shopping</Link></button>
            </div>
            <Footer />
        </div>
    )
}

export default OrderComplete
