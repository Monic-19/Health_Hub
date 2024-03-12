import React from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from "./Loader"
import { motion } from "framer-motion"

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className='h-[100vh] w-full flex justify-center items-center'>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, power: "easeIn" }}
                className='h-[70%] w-[70%] flex flex-col'>

                <div className='h-[90%] w-full'>
                    <Loader></Loader>
                </div>

                <div className='h-[10%] items-center flex flex-col  gap-8 justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
                    <motion.button
                        initial={{ x: -40}}
                        animate={{ x: 0}}
                        transition={{ duration: 0.2, power: "easeIn", delay: 1 }}
                        className="rounded-md bg-black lg:w-[10vw] w-[30vw] px-7 py-3 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={() => navigate("/login")}>Login</motion.button>

                    <motion.button
                        initial={{ x: 40 }}
                        animate={{ x: 0}}
                        transition={{ duration: 0.2, power: "easeIn", delay: 1 }}
                        className="rounded-md bg-black lg:w-[10vw] w-[30vw] px-7 py-3 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={() => navigate("/signup")}>SignUp</motion.button>

                </div>
            </motion.div>


        </div>
    )
}

export default Hero