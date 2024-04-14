import React from 'react'
import { Tabs, TabsHeader, Tab, } from "@material-tailwind/react";
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar'

const AdminDashboard = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className=' bg-blue-gray-100 h-[100vh] w-full p-5'>

                <div >
                    <Tabs value="df">
                        <TabsHeader className="lg:w-[80vw] w-full lg:ml-[10vw] ml-0 mt-[5vh]">


                            <NavLink to={"/admin/profile"} className="flex items-center hover:text-black hover:font-bold transition-colors w-[25vw] lg:w-[20vw]">
                                <Tab value={"Profile"}>Profile</Tab>
                            </NavLink>



                            <NavLink to={"/admin/list"} className="flex items-center hover:text-black hover:font-bold transition-colors w-[25vw] lg:w-[20vw]">
                                <Tab value={"Approve"}>Approve Doctors </Tab>
                            </NavLink>



                            <NavLink to={"/admin/alldoctors"} className="flex items-center hover:text-black hover:font-bold transition-colors w-[25vw] lg:w-[20vw]">
                                <Tab value={"Appointments"}>All Doctors</Tab>
                            </NavLink>



                            <NavLink to={"/admin/stats"} className="flex items-center hover:text-black hover:font-bold  transition-colors w-[25vw] lg:w-[20vw]">
                                <Tab value={"Stats"}>Stats</Tab>
                            </NavLink>

                        </TabsHeader>
                    </Tabs>
                </div>

                <div className='h-[70vh] w-[80vw] ml-5 lg:ml-[10vw] mt-[5vh]'>
                    <Outlet></Outlet>
                </div>

            </div>
        </>
    )
}

export default AdminDashboard