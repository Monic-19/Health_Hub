import React, { useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../pages/Navbar'
import DoctorNavbar from './DoctorNavbar'
import DoctorDashboardLeft from "./DoctorDashboardLeft"
import { MdCalendarMonth } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";

const DoctorDashboard = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const day = dateTime.toLocaleDateString('en-US', { weekday: 'long' });
  const date = dateTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const time = dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

  const [verified, setVerified] = useState(true);

  return (
    <>
      <Navbar></Navbar>

      <div className=' bg-blue-gray-100 min-h-[10vh] py-5 px-2 flex items-center border-b-2 border-black'>
        <DoctorNavbar />
      </div>

      <div className="flex lg:flex-row flex-col">
        <div className="lg:h-[78vh] h-[70vh] lg:w-[30vw] border-r-2 border-black w-full flex flex-col ">
          <div className="h-[10vh] bg-gray-900 lg:w-[29.9vw] w-full p-2 text-white cursor-pointer">
            <h1 className="text-4xl font-mono pb-1">Dashboard</h1>
            <div className="flex gap-[5vw]">
              <div className="flex items-center gap-2">
                <MdCalendarMonth />
                <h1>{day}</h1>
                <h1>{date}</h1>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <h1>{time}</h1>
              </div>
            </div>
          </div>

          {
            verified ? (
              <div className="min-h-[68vh] bg-blue-gray-100  ">
                <div className="flex">
                  <DoctorDashboardLeft icon={<FaPeopleGroup size={64} />} text="Patients" count="420" percent={23} ></DoctorDashboardLeft>
                  <DoctorDashboardLeft icon={<FaUserDoctor size={64} />} text="Consultations" count="527" percent={65}></DoctorDashboardLeft>
                </div>



                <div className="bg-white rounded-lg h-[7vh] w-[90%] mt-7 ml-5 shadow-lg flex justify-center items-center text-xl font-mono font-bold">
                  <h2>Offline Appointments - 15</h2>
                </div>
                <div className="bg-white rounded-lg h-[7vh] w-[90%] mt-7 ml-5 shadow-lg flex justify-center items-center text-xl font-mono font-bold">
                  <h2>Online Appointments - 15</h2>
                </div>

                <div className="bg-white rounded-lg h-[10vh] w-[50%] lg:mt-[5vh] mt-[3vh] lg:ml-[7vw] ml-[25vw] shadow-lg flex justify-center items-center  ">
                  <Button className="w-[70%] text-lg font-mono font-bold">Logout</Button>
                </div>

              </div>
            )
              : (
                <div className='h-[68vh] bg-blue-gray-100'></div>
              )
          }

        </div>

        <div className="lg:mt-0 mt-8  lg:h-[78vh] lg:w-[70vw]">
          <Outlet ></Outlet>
        </div>

      </div>





    </>
  )
}

export default DoctorDashboard