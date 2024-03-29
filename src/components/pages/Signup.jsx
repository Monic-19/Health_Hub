import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Loader from "./Loader"
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const initialMotion = {x: 300, opacity : 0};
    const finalMotion = {x : 0, opacity:1};
    const navigate = useNavigate();
    return (
        <div className='h-[100vh] w-full flex justify-center items-center'>
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    <motion.div initial={{x:-300 ,opacity : 0}} animate={{x:0 , opacity : 1}} transition={{duration : 0.5}}  className="relative flex  items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24  w-[100vw] h-[40vh] lg:h-[80vh] lg:w-[40vw]">
                        <div className="absolute inset-0">
                            <Loader ans={"Where care meet convenience"}/>
                        </div>
                        
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="relative">
                            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                                <h3 className="text-4xl font-bold text-white">
                                    Now you dont have to rely on your designer to create a new page
                                </h3>
                                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                            <svg
                                                className="h-3.5 w-3.5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-lg font-medium text-white"> Effortless Healthcare Management </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                            <svg
                                                className="h-3.5 w-3.5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-lg font-medium text-white"> Enhanced Patient Experience </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                            <svg
                                                className="h-3.5 w-3.5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-lg font-medium text-white"> Optimized Doctor-Patient Communication </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                            <svg
                                                className="h-3.5 w-3.5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-lg font-medium text-white"> Innovative Virtual Healthcare Solutions </span>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </motion.div>

                    <div className="flex  items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">

                        <div   className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md ">
                            <motion.h2 initial={initialMotion}  animate={finalMotion} transition={{duration : 0.5}} className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</motion.h2>
                            <motion.p initial={initialMotion}  animate={finalMotion} transition={{duration : 0.7}}  className="mt-2 text-base text-gray-600">
                                Already have an account?{' '}
                                <Link
                                    to={"/login"}
                                    className="font-medium text-black transition-all duration-200 hover:underline"
                                >
                                    Log In
                                </Link>
                            </motion.p>
                            <form action="#" method="POST" className="mt-8">
                                <div className="space-y-5 ">
                                    <motion.div initial={initialMotion}  animate={finalMotion} transition={{duration : 0.9}} >
                                        <label htmlFor="name" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Full Name{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="Full Name"
                                                id="name"
                                                value={name}
                                                onChange={(e) => (setName(e.target.value))}
                                            ></input>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={initialMotion}  animate={finalMotion} transition={{duration : 1.1}} >
                                        <label htmlFor="email" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Email address{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email"
                                                placeholder="Email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => (setEmail(e.target.value))}
                                            ></input>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={initialMotion}  animate={finalMotion} transition={{duration : 1.3}} >
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="text-base font-medium text-gray-900">
                                                {' '}
                                                Password{' '}
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="password"
                                                placeholder="Password"
                                                id="password"
                                                value={password}
                                                onChange={(e) => (setPassword(e.target.value))}
                                            ></input>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={initialMotion}  animate={finalMotion} transition={{duration : 1.5}} >
                                        <button
                                            type="button"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        >
                                            Create Account <FaArrowRightLong className="ml-2" size={16} />
                                        </button>
                                    </motion.div>
                                </div>
                            </form>
                            <motion.div initial={initialMotion}  animate={finalMotion} transition={{duration : 1.7}}  className="mt-3 space-y-3">
                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                >
                                    <span className="mr-2 inline-block">
                                        <svg
                                            className="h-6 w-6 text-rose-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                        </svg>
                                    </span>
                                    Sign up with Google
                                </button>
                             
                            </motion.div>
                            <motion.button initial={initialMotion} animate={finalMotion} transition={{duration : 1.4, delay : 0.4}}
                                    onClick={() => navigate("/")}
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 z-[-10] mt-4"
                                    >
                                        Back To Home Page <FaHome className='ml-2' size={16}/>
                                    </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup