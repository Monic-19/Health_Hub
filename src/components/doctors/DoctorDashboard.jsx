import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const DoctorDashboard = () => {
  return (
    <>
        <div className='h-[10vh] w-full bg-purple-200'>
            <h1>DoctorDashboard</h1>
            <h1> <NavLink to={"/doctor/info"}>enquiry</NavLink></h1>
            <h1><NavLink to={"/doctor/profile"}>Profile</NavLink></h1>
        </div>

        <Outlet ></Outlet>
        
    </>
  )
}

export default DoctorDashboard