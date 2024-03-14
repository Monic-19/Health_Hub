import React from 'react'
import {motion} from 'framer-motion'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const initial = {y : "-9vh"}
    const subinitial = {y : "-3vh", opacity : 0} 
    const subfinal = {y : "0vh", opacity : 1} 
    const subtrans = {delay : 0.4}
    const final = {y : "0vh"}
    
  return (
    <motion.div initial={initial} animate={final} transition={{duration : 0.3 ,ease : "easeIn"}} className='h-[9vh]  flex justify-between items-center border-b-2 border-black'>
       <h1 className='bg-blue-400 p-1 ml-7 font-extrabold font-mono text-4xl cursor-pointer'>HH</h1>
       <motion.div initial={subinitial} animate={subfinal} transition={subtrans} className='flex gap-9 text-xl cursor-pointer'>
            <h1 className='hover:font-extrabold'>Home</h1>
            <h1 className='hover:font-extrabold'>About</h1>
            <h1 className='hover:font-extrabold'>Appointment</h1>
            <h1 className='hover:font-extrabold'><NavLink to="/login">Login</NavLink></h1>
       </motion.div>
       <h1 className='mr-7 font-extrabold font-mono text-2xl cursor-pointer'>Contact</h1>
    </motion.div>
  )
}

export default Navbar