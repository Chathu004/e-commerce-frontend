
import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginImage from '../assets/login.jpg'
import Logo from '../../public/Nlogo.jpg'
import axios from 'axios'; // Importing axios

const SignUp = () => {
    const useNav = useNavigate();
    const [formData, setFormData] = useState({
        userName: "",
        address: "",
        email: "",
        contact: "",
        password: "",
        verify: "",
    })

    const [isWrong, setIsWrong] = useState(false);
    const [isUserNameNotValid, setIsUserNameNotValid] = useState(false);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [isPasswordNotValid, setIsPasswordNotValid] = useState(false);

    function submitForm(e) {
        const url = "http://localhost:8080/customer/add"
        const emailRegex = "[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?"
        const passwordRegex = "^.{9,}"
        e.preventDefault();
        if (formData.userName === ''
            || formData.address === ''
            || formData.email === ''
            || formData.contact === ''
            || formData.password === ''
            || formData.verify === '') {
            setIsWrong(true)
            return
        }
        else if (formData.userName.length <= 2) {
            setIsUserNameNotValid(true);
            return;
        }
        else if (!formData.password.match(passwordRegex)) {
            setIsPasswordNotValid(true)
            return
        }

        else if (formData.password === formData.verify) {
            if (formData.contact.length === 10 && formData.email.match(emailRegex)) {
                setIsWrong(false)
                axios.post(url, { id: 0, email: formData.email, userName: formData.userName, address: formData.address, contact: formData.contact, password: formData.password,verify: formData.verify })
                    .then(res => {
                    //     if (res.data === true) {
                    //         useNav('/')
                    //     }
                    // })
                    if (res.data === true) {
                        setShowSuccessMessage(true); // Set state to show success message
                        setTimeout(() => {
                            useNav('/')
                        }, 3000); // Redirect after 3 seconds
                    }
                })
                    .catch(error=>{
                            useNav('/error404')
                    })
                return
            } else {
                setIsWrong(true)
                return
            }
        }
        else {
            setIsPasswordMatch(false)
            return
        }

    }

    function handleChange(e) {
        setIsPasswordMatch(true)
        setIsWrong(false)
        setIsPasswordNotValid(false)
        setIsUserNameNotValid(false)
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        // -------------
        <section className=" scroll-custom w-full h-screen bg-[#fbfcf0] dark:bg-black mt-0  overflow-hidden flex max-lg:overflow-auto font-mulish">
            <div className="items-center h-full w-[55%]  flex max-lg:hidden">
                <img src={LoginImage} className="w-[80%]" alt="Cake Image" />
            </div>
            <div className="flex flex-col gap-8 h-full items-center justify-center w-[45%] mt-[-2%] lg:ml-[-3%] max-lg:w-screen">
                <img src={Logo} className='w-30' alt='Logo'/>
                <h1 className="dark:text-white tracking-[8px] text-lg max-sm:hidden">WELCOME TO COOKIES STORE</h1>
                <form className=' w-[80%] gap-9 '>
                    {/* <h1 className={isWrong === false ? `hidden` : `mx-12 mb-3 flex justify-center py-5 text-red-800 bg-red-100 rounded-md`}>
                        All fields should be filled out correctly
                    </h1> */}
                    <h1 className={isUserNameNotValid === true ? `mx-12 mb-3 flex justify-center py-5 text-red-800 bg-red-100 rounded-md` : `hidden`}>
                        UserName should be greater than 2 characters
                    </h1>
                    <h1 className={isPasswordNotValid === true ? `mx-12 mb-3 flex justify-center py-5 text-red-800 bg-red-100 rounded-md` : `hidden`}>
                        Password doesn't match conditions
                    </h1>
                    <h1 className={isPasswordMatch === true ? `hidden` : `mx-12 mb-3 flex justify-center py-5 text-red-800 bg-red-100 rounded-md`}>
                        Password and verify password should match
                    </h1>

                    <div className='flex mb-6 w-[100%] '>
                        <div className=' w-[48%] mr-[2%]'>
                            <label for="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="userName">UserName</label>
                            <input type="text"
                                id="userName"
                                className="bg-[#FFFFFF] px-5  h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-black focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                placeholder="User"
                                name="userName"
                                onChange={(e) => handleChange(e)} />
                        </div>
                        <div className='w-[50%]'>
                            <label for="contact Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="userName">contact Number</label>
                            <input type="text"
                                id="contact"
                                className="bg-[#FFFFFF] px-5  h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-black focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                placeholder="0123456789"
                                name="contact"
                                pattern="^\d{10}$"
                                onChange={(e) => handleChange(e)} />
                            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                Please enter a valid contact number
                            </span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Email Address</label>
                        <input type="email"
                            id="email"
                            className="bg-[#FFFFFF] px-5  h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-black focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                            placeholder="cookielover@gmail.com"
                            name="email"
                            pattern="[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?"
                            onChange={(e) => handleChange(e)} />
                        <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                            Please enter a valid email address
                        </span>
                    </div>
                    <div className="mb-6">
                        <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="address">Address</label>
                        <input type="text"
                            id="address"
                            className="bg-[#FFFFFF] px-5  h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-black focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                            placeholder="No 1234567, bauddhaloka mawatha, colombo 4"
                            name="address"
                            onChange={(e) => handleChange(e)} />
                    </div>
                    <div className='flex mb-6 w-[100%] '>
                        <div className=' w-[48%] mr-[2%]'>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="password">Password</label>
                            <input type="password"
                                id="password"
                                className="bg-[#FFFFFF] px-5  h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-black focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                placeholder="•••••••••"
                                name="password"
                                pattern="^.{9,}"
                                onChange={(e) => handleChange(e)} />
                            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                Password should be greater than 8 characters
                            </span>
                        </div>
                        <div className='w-[50%]'>
                            <label for="verify" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="verify">Verify Password</label>
                            <input type="password"
                                id="verify"
                                className="bg-[#FFFFFF] px-5  h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-black focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                placeholder="•••••••••"
                                name="verify"
                                onChange={(e) => handleChange(e)} />
                        </div>
                    </div>
                    <fieldset>
                        <legend className="sr-only">Checkbox variants</legend>
                        <div className="flex items-center mb-4">
                            <input checked id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" name='terms'>I agree to the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="checkbox-2" type="checkbox" value='' className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="checkbox-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I want to get promotional offers</label>
                        </div>
                    </fieldset>
                    <button type="button" className="text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 w-[100%]" onClick={(e) => submitForm(e)}>SIGN UP</button>
                </form>
                <Link to="/"><h5 className="dark:text-gray-300 text-[#959595] mt-0 underline tracking-wider text-sm max-sm:text-[8px]">Already a member click here to login</h5></Link>
            </div>
        </section>
        
    )
        // -------------
    
}

export default SignUp

        // ----------------------
