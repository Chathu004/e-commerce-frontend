import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import OrderCard from '../components/OrderCard'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

const Order = () => {
    let useNav = useNavigate();
    function submitForm(e) {
        e.preventDefault();
       
    }
    const [isOpen, setIsOpen] = useState(false);
    const[cartItem,setCartItem]=useState([]);
    const [isShowProduct,setIsShowProduct]=useState(false);
    let total=0;
    // database useId = 302;
    const userId = 302;

    cartItem.map((element)=>{
        total+=element.productTot;
    })



    useEffect(()=>{
        const url=`http://localhost:8080/cart/customer/${userId}`
        axios.get(url).then((response)=>{
            setCartItem(response.data)
        }).catch(()=>{
            useNav("/error404")
        })
    },[userId, useNav])
    function handleModal() {
        setIsOpen(prevState => !prevState)
    }
    function showProducts(){
        setIsShowProduct(prevState=>!prevState)
    }

    return (
        <div className='font-mulish dark:bg-[#050505]'>
            <Header />
            <div className='flex max-lg:flex-col'>
                <div className='flex flex-col lg:hidden'>
                    {/* <div className='h-max py-8 bg-gray-300 flex justify-between items-center lg:hidden max-md:pl-[5%]'>
                        <h1 className='pl-5 text-lg pr-4 underline' onClick={showProducts}>Show Order Summary</h1>
                        <h1 className='font-extrabold text-xl pr-24 pl-[-5%] max-md:pr-20'>LKR {`total+500`}.00</h1>
                    </div> */}
                    <div className={`overflow-y-auto bg-[#f5f5f5] lg:hidden flex flex-col  items-center dark:bg-[#202021]  ${`isShowProduct==true`?`flex`:`hidden`}`}>
                        {cartItem.map((element)=>{
                            return(
                                <>
                                <OrderCard key={element.id} item={element} />
                                </>

                            )
                        })}

                        <div className='w-[100%] mb-30 sticky top-0 bg-white dark:bg-[#000000] py-5 h-[30%]'>
                        <div className='flex flex-col ml-[-5%]'>
                            <div className='flex justify-between w-[100%] px-20 py-1'>
                                <h3 className='font-bold dark:text-white'>Subtotal</h3>
                                <h2 className='font-extrabold dark:text-white'> Rs {total}.00</h2>
                            </div>
                            <div className='flex justify-between w-[100%] px-20 py-1'>
                                <h3 className='font-bold dark:text-white'>Shipping</h3>
                                <h2 className='font-extrabold dark:text-white'> Rs 500.00</h2>
                            </div>
                            <div className='flex justify-between w-[100%] px-20 py-5'>
                                <h1 className='text-2xl font-bold max-md:text-lg w-[100%] dark:text-white'>Grand Total</h1>
                                <h1 className='text-2xl font-extrabold lg:truncate ml-[50%] w-[100%] max-md:text-lg dark:text-white'>LKR {total+500}.00</h1>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
                <div className='flex flex-col w-[75%] pl-[7%] bg-[#fbfcf9] border-t-2 border-b-2 dark:bg-black dark:border-t-1 dark:border-gray-500 max-lg:w-[100%]'>
                    <form>
                        <div className='mb-5 mt-5'>
                            <h1 className='px-3 py-4 tracking-wider font-extrabold text-2xl mb-1 dark:text-white'>Contact</h1>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-3">Email address</label>
                            <input type="email"
                                id="email"
                                className="bg-[#FFFFFF] h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-blue-800 focus:border-none block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 px-5 w-[85%] ml-3  hover:border-blue-800"
                                placeholder="json@gmail.com"
                                name="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                onChange={(e) => handleChange(e)} />
                            <span className="mt-2 hidden text-sm ml-[2%] text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                Please enter a valid email address
                            </span>
                        </div>

                        <div className='mb-8'>
                            <h1 className='px-3 py-4 tracking-wider font-extrabold text-2xl mb-1 dark:text-white'>Delivery</h1>
                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-3">Address</label>
                            <input type="text"
                                id="address"
                                className="bg-[#FFFFFF] h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-blue-800 focus:border-none block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 px-5 w-[85%] ml-3  hover:border-blue-800"
                                placeholder="No 123,Example Road"
                                name="address"
                                onChange={(e) => handleChange(e)} />
                            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                Please enter address
                            </span>

                            <div className='flex gap-2 mt-4'>
                                <label htmlFor="first" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-3">First Name</label>
                                <label htmlFor="last" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-[33%]">Last Name</label>
                            </div>
                            <div className='flex gap-2 mb-4'>
                                <input type="text"
                                    id="first"
                                    className="bg-[#FFFFFF] h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-blue-800 focus:border-none block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 px-5 w-[41%] ml-3  hover:border-blue-800"
                                    placeholder="Json"
                                    name="first"
                                    onChange={(e) => handleChange(e)} />
                                <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                    Please enter First Name
                                </span>
                                <input type="text"
                                    id="last"
                                    className="bg-[#FFFFFF] h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-blue-800 focus:border-none block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 px-5 w-[41%] ml-3  hover:border-blue-800"
                                    placeholder="Andrew"
                                    name="last"
                                    onChange={(e) => handleChange(e)} />
                                <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                    Please enter Last Name
                                </span>
                            </div>
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-3">City</label>
                            <input type="text"
                                id="city"
                                className="bg-[#FFFFFF] h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-blue-800 focus:border-none block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 px-5 w-[85%] ml-3  hover:border-blue-800"
                                placeholder="Colombo 4"
                                name="city"
                                onChange={(e) => handleChange(e)} />
                            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                Please enter City
                            </span>

                            <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-3 mt-4" >Phone Number</label>
                            <input type="text"
                                id="number"
                                className="bg-[#FFFFFF] h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-blue-800 focus:border-none block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 px-5 w-[85%] ml-3  hover:border-blue-800"
                                placeholder="0123456789"
                                name="number"
                                onChange={(e) => handleChange(e)} />
                            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                Please enter City
                            </span>
                        </div>
                        <div className='mb-8'>
                            <h1 className='px-3 py-4 tracking-wider font-extrabold text-2xl dark:text-white'>Payment Method</h1>
                            <button type="button" className=" flex text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2 w-[85%] ml-[2%]">
                                <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                Check out with Apple Pay
                            </button>
                            <button type="button" className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 justify-center focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2 ml-[2%] w-[85%]">
                                <svg aria-hidden="true" className="w-10 h-3 me-2 -ms-1" viewBox="0 0 256 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.812 0L0 63.76H34.492L38.768 53.594H48.542L52.818 63.76H90.784V56.001L94.167 63.76H113.806L117.189 55.837V63.76H196.148L205.749 53.858L214.739 63.76L255.294 63.842L226.391 32.058L255.294 0H215.368L206.022 9.71899L197.315 0H111.418L104.042 16.457L96.493 0H62.073V7.495L58.244 0C58.244 0 28.812 0 28.812 0ZM35.486 9.05399H52.299L71.41 52.29V9.05399H89.828L104.589 40.054L118.193 9.05399H136.519V54.806H125.368L125.277 18.955L109.02 54.806H99.045L82.697 18.955V54.806H59.757L55.408 44.549H31.912L27.572 54.797H15.281C15.281 54.797 35.486 9.05399 35.486 9.05399ZM146.721 9.05399H192.063L205.931 24.034L220.246 9.05399H234.114L213.043 32.049L234.114 54.779H219.617L205.749 39.625L191.361 54.779H146.721V9.05399ZM43.665 16.795L35.924 35.067H51.397L43.665 16.795ZM157.918 18.527V26.879H182.654V36.188H157.918V45.306H185.663L198.555 31.876L186.21 18.519H157.918V18.527Z" fill="white" /></svg>
                                Pay with American Express
                            </button>
                            <button type="button" className="text-gray-900 bg-gray-200 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none justify-center focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2 ml-[2%] w-[85%]">
                                <svg aria-hidden="true" className="w-10 h-3 me-2 -ms-1" viewBox="0 0 660 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996" fill="#0E4595" /><path d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718" fill="#F2AE14" /></svg>
                                Pay with Visa
                            </button>
                        </div>
                        <div className='mb-8'>
                            <h1 className='px-3 py-4 tracking-wider font-extrabold text-2xl dark:text-white'>Shipping Method</h1>
                            <div className='mt-1 border w-[85%] h-12 p-2.5 ml-[2%] border-black flex justify-between bg-blue-200'>
                                <h3 className='font-semiBold'>City Pak</h3>
                                <h4 className='font-bold px-2'>Rs 500.00</h4>
                            </div>
                        </div>
                        <button className='px-2 py-3 bg-black text-white text-lg rounded-md w-[85%] max-lg:ml-3 lg:ml-3 mb-5 hover:bg-gray-400 dark:bg-white dark:text-black max-sm:ml-2' onClick={(e) => submitForm(e)}>Pay Now</button>
                    </form>

                    <div className={`${isOpen ? 'fixed z-10 inset-0 overflow-y-auto' : 'hidden'}`}>
                        <div className="flex items-center justify-center min-h-screen px-4">
                            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>
                            <div className="bg-white rounded-lg overflow-hidden shadow-xl w-[65%] z-50 max-lg:w-[100%]">
                                <div className="bg-gray-800 py-4 px-6 flex justify-between items-center">
                                    <h3 className="text-white text-lg font-semibold ">Terms of Service</h3>
                                    <button onClick={handleModal} className="text-white">&times;</button>
                                </div>
                                <div className="p-6 dark:bg-black dark:text-white">
                                    <h2>Terms of Service</h2>
                                    <p>Welcome to Clothify! These terms and conditions outline the rules and regulations for the use of Clothify's Website, located at www.clothify.com.</p>
                                    <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Clothify if you do not agree to take all of the terms and conditions stated on this page.</p>
                                    <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Wonderland. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
                                    <p><strong>Disclaimer:</strong> Please note that Clothify is a practice training project designed to showcase skills. It is not a real clothing store. Any products, prices, or services mentioned on this website are purely fictional and for demonstration purposes only.</p>
                                    <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it’s linking policy at any time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='text-black underline px-[2%] cursor-pointer ml-[32%] max-lg:ml-[35%] max-md:ml-[30%] dark:text-white mb-8' onClick={handleModal}>Terms of Service</p>
                </div>
                <div className='flex items-center bg-[#ededed] m-0 border-t-2 border-l-2 border-b-2 flex-col dark:bg-[#202021] dark:border-gray-500 h-[1140px] max-lg:hidden border-2'>
                    <div className='overflow-y-auto h-[70%]'>
                      {cartItem.map((element)=>{
                        return(
                            <OrderCard key={element.id} item={element}/>
                        )
                      })}

                    </div>
                    <div className='w-[100%] mb-30 sticky top-0 bg-white py-5 dark:bg-[#000000] h-[30%]'>
                        <div className='flex flex-col'>
                            <div className='flex justify-between w-[100%] px-20 py-1'>
                                <h3 className='font-bold dark:text-white'>Subtotal</h3>
                                <h2 className='font-extrabold dark:text-white'>Rs {total}.00</h2>
                            </div>
                            <div className='flex justify-between w-[100%] px-20 py-1'>
                                <h3 className='font-bold dark:text-white'>Shipping</h3>
                                <h2 className='font-extrabold dark:text-white'> Rs 500.00</h2>
                            </div>
                            <div className='flex justify-between w-[100%] px-20 py-5'>
                                <h1 className='text-2xl font-bold max-md:text-sm dark:text-white '>Grand Total</h1>
                                <h1 className='text-2xl font-extrabold max-md:text-sm dark:text-white'>LKR {total+500}.00</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Order
