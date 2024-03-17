import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { gsap } from "gsap"

const HeroA = () => {

    useEffect(() => {
        const tl = gsap.timeline({ pause: true, delay: 0.1 })

        tl.from(".letter_a , .letter_b", {
            opacity: 0
        }, "a")
        tl.to(".letter_a , .letter_b", {
            marginTop: 0,
            duration: 0.7,
            opacity: 1
        }, "a")
        tl.to(".logo_name", {
            fontSize: "28vh",
            lineHeight: "28vh",
            height: "28vh",
            gap: "4vh",
            duration: 0.5,
            letterSpacing: "0vh",
            top: "84%",
        })


    }, [])

    return (
        <div className='h-[91vh] relative'>
            <div className=' w-[95%] mx-[2.5%] h-[60vh] absolute flex flex-wrap gap-[1.25%] font-bold'>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.9 }} className="col coll h-[75%] w-[19%]">
                    <div className='h-[20%] w-full flex justify-center items-end text-lg '>Video Call Solution</div>

                    <motion.div
                        style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 20%, 0 20%)' }}
                        animate={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)" }}
                        transition={{ duration: 0.3, delay: 2 }}
                        className='h-[80%] w-full bg-cover c c1'></motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.9 }} className="col coll h-[75%] w-[19%]">
                    <div className='h-[20%] w-full flex justify-center items-end text-lg'>Book Apointment</div>
                    <motion.div
                        style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 20%, 0 20%)' }}
                        animate={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)" }}
                        transition={{ duration: 0.3, delay: 2 }}
                        className='h-[80%] w-full bg-cover c c2'></motion.div>
                </motion.div>

                <motion.div
                    style={{ clipPath: 'polygon(0 90%, 100% 90%, 100% 100%, 0 100%)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)" }}
                    transition={{ duration: 0.4, delay: 1.5 }}

                    className="col h-[80%] mt-[5%] w-[19%] bg-blue-400 cursor-pointer border-2 ">
                    <div className='logo_img h-full w-full flex justify-center items-center text-[13vw] font-mono font-extrabold'>HH</div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.9 }} className="col colr h-[75%] w-[19%]">
                    <div className='h-[20%] w-full flex justify-center items-end text-lg'>RealTime Apointment Status</div>
                    <motion.div
                        style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 20%, 0 20%)' }}
                        animate={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)" }}
                        transition={{ duration: 0.3, delay: 2 }}
                        className='h-[80%] w-full bg-cover c c3'></motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.9 }} className="col colr h-[75%] w-[19%]">
                    <div className='h-[20%] w-full flex justify-center items-end text-lg'>Find Doctors Near Me</div>
                    <motion.div
                        style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 20%, 0 20%)' }}
                        animate={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)" }}
                        transition={{ duration: 0.3, delay: 2 }}
                        className='h-[80%] w-full bg-cover c c4'></motion.div>
                </motion.div>

            </div>

            <div className="logo_name flex text-[8vh] font-mono font-bold tracking-wider absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center  leading-[8vh] h-[8vh]overflow-hidden  ">
                <div className="letter flex ">
                    <h1 className='letter_a mt-[10vh]'>HEALTH</h1>
                </div>
                <div className="letter flex ml-4">
                    <h1 className='letter_b mt-[-3vh]'>HUB</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroA