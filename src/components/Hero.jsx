import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import Navbar from './Navbar'
import {gsap} from "gsap"

const Hero = () => {

    useEffect(() =>{
        const tl = gsap.timeline({pause: true, delay: 0.1})
        
        tl.from(".letter_a , .letter_b", {
           opacity : 0
        },"a")
        tl.to(".letter_a , .letter_b", {
            marginTop : 0,
            duration : 0.7,
            opacity :1
        },"a")
        tl.to(".logo_name",{
            fontSize : "28vh",
            lineHeight : "28vh",
            height : "28vh",
            gap : "4vh",
            duration : 0.5,
            letterSpacing : "0vh",
            top : "84%", 
        })
        

    },[])

    return (
        <>
            <Navbar />
            <div className= 'h-[91vh] relative'>
                <div className="logo_name flex text-[8vh] font-mono font-bold tracking-wider absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center  leading-[8vh] h-[8vh]overflow-hidden  ">
                    <div className="letter flex ">
                        <h1 className='letter_a mt-[10vh]'>HEALTH</h1>
                    </div>
                    <div className="letter flex ml-4">
                        <h1 className='letter_b mt-[-3vh]'>HUB</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero