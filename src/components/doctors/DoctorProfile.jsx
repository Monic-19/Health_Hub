import React, { useState } from 'react'
import { Avatar } from "@material-tailwind/react";
import { IoIosStarOutline } from "react-icons/io";
import Chart from 'react-apexcharts';
import {motion} from "framer-motion"

const DoctorProfile = () => {
  const doctor_info = {
    profileImageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww",
    name: "Dr. John Doe",
    degree: "MD, MBBS, FRCS",
    specialization: "Cardiology",
    education: "Harvard Medical School",
    state: "Uttar Paradesh",
    city: "Noida",
    clinicAddress: "123 Main Street, Cityville",
    availability: "Monday, Tuesday, Friday",
    timings: "9 AM - 12 PM",
    description: "Experienced cardiologist specializing in heart conditions.",
  };

  const [verified, setVerified] = useState(true);

  const series = [4000,2000, 430 , 240];
  const options = {
    labels: ['Total Online Patients', 'Total Offline Patients', 'This Months Online Patients', 'This Months Offline Patients'],
  }
  

  return (
    <div className='lg:h-full h-[57vh]  w-[100%] relative'>
      <h1 className='text-3xl p-5 font-mono h-[10vh] bg-gray-900 text-white'>Your Profile {!verified ? "is not verified " : ""}</h1>
      {verified ? (
        <div>

          <div className='p-5 relative'>

            <motion.div 
              initial = {{opacity: 0, scale : 0}} 
              animate = {{opacity: 1, scale : 1}} 
              transition={{  duration : .5}}
              className=' lg:w-[35vw] w-[90%] rounded-lg shadow-xl lg:h-[18vh] h-[22vh] flex justify-center items-center lg:gap-[4vw] gap-[10vw] p-4 bg-gray-200 cursor-pointer absolute top-[5vh] left-[2vh] font-mono'>
              <Avatar src={doctor_info.profileImageUrl} alt="avatar" size="xxl" withBorder={true} className="p-0.5" />
              <div className=' h-full text-lg '>

                <h1>{doctor_info.name}</h1>
                <h1>{doctor_info.degree}</h1>
                <h1>{doctor_info.clinicAddress}</h1>
                <h1>{doctor_info.city + " , " + doctor_info.state}</h1>

              </div>
            </motion.div>

            <motion.div 
                 initial = {{opacity: 0, scale : 0}} 
                 animate = {{opacity: 1, scale : 1}} 
                 transition={{  duration : 1}}
              className='h-[10vh] bg-gray-900 rounded-lg lg:w-[25vw]
             absolute lg:top-[9vh] lg:left-[40vw] top-[32vh] left-[10vw] shadow-xl p-6 text-xl font-mono'>
              <div className='flex items-center gap-4'>
                <h1 className='text-white'>Rating :</h1>
                <IoIosStarOutline color='yellow' size={"24px"} />
                <IoIosStarOutline color='yellow' size={"24px"} />
                <IoIosStarOutline color='yellow' size={"24px"} />
                <IoIosStarOutline color='yellow' size={"24px"} />
                <IoIosStarOutline color='yellow' size={"24px"} />
              </div>
            </motion.div>

            <div className=' absolute lg:top-[27vh] lg:left-[15vw] lg:visible invisible '>
              <Chart options={options} series={series} type="pie" width="550" />
            </div>


          </div>
        </div>


      ) : (
        <div className=' absolute lg:top-[55%] top-[40%] left-[50%]  translate-x-[-50%] w-[60%]'>
          <h1 className='lg:text-4xl text-6xl font-mono font-bold text-center'>Please Verify Your Profile.</h1>
        </div>
      )}


    </div>
  )
}

export default DoctorProfile