import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageForLogin from '../assets/login.jpg'
import Logo from '../../public/Nlogo.jpg'
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
    const dispatch=useDispatch();
    const id=useSelector((state)=>state.auth.userId);

    console.log(id)
    const nav=useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const[isWrong,setIsWrong]=useState(false)

    function handleChange(event) {
        setIsWrong(false)
        setFormData((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }
    function submitForm(e) {
        const url = 'http://localhost:8080/customer/add'
        e.preventDefault();
        if(formData.password=='' || formData.email==''){
            setIsWrong(true)
        }else{
        axios.post(url, formData)
            .then((res) => {
                dispatch(res.data)
            })
            .catch(error=>{
                nav('/error404')
            })
        }
    }

    return (
        <div className="w-full h-screen bg-[#fbfcf0] dark:bg-black mt-0  overflow-hidden flex font-mulish scroll-custom ">
            <div className="items-center h-full w-[55%]  flex max-lg:hidden">
                <img src={ImageForLogin} className="w-[80%]" alt="Stylish women" />
            </div>
            <div className="flex flex-col gap-8 h-full items-center justify-center w-[45%] mt-[-2%] lg:ml-[-3%] max-lg:w-screen">
                <img src={Logo} className='w-30' alt='logo'/>
                <h1 className="dark:text-white tracking-[8px] text-lg max-sm:hidden">WELCOME TO COOKIE STORE</h1>
                <form className=" w-[70%] mt-5 flex flex-col" onSubmit={(e) => submitForm(e)} noValidate >
                    <div className="mb-6">
                        <h1 className={isWrong===false?`hidden`:`mx-12 my-5 mt-[-5%] flex justify-center py-5 text-red-800 bg-red-100 rounded-md`}>
                            Email or password is not valid
                        </h1>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Email address</label>
                        <input type="email"
                            id="email"
                            className="bg-[#FFFFFF] px-5  h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-black focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                            placeholder="cookielover@gmail.com"
                            name="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            onChange={(e) => handleChange(e)} />
                        <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                            Please enter a valid email address
                        </span>
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="password">Password</label>
                        <input type="password"
                            id="password"
                            className="bg-[#FFFFFF] h-11 px-5 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-black focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                            placeholder="•••••••••"
                            required
                            pattern=".{7,}"
                            name="password"
                            onChange={(e) => handleChange(e)} />
                        <Link to='/home'><p className="flex justify-end text-black dark:text-gray-200 p-2 tracking-wider text-[13px]">Reset Password</p></Link>
                    </div>
                    <button type="button" className="text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 " onClick={(e) => submitForm(e)}>SIGN IN</button>
                </form>
                <Link to="/signUp"><h5 className="dark:text-gray-300 text-[#959595] mt-0 underline tracking-wider text-sm max-sm:text-[8px]">Don't have an account don't worry click here </h5></Link>
            </div>
        </div>
  )
}

export default Login
