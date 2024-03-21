import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Input } from "@material-tailwind/react";

const Appointment = () => {

  const doctorCategories = [
    "All",
    "Ophthalmology",
    "Psychiatry",
    "Urology",
    "Oncology",
    "Dentistry",
    "ENT (Ear, Nose, Throat)",
    "Neurology",
    "Allergy and Immunology",
  ];

  const [category, setCategory] = useState("All");
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [date, setDate] = useState('');
  const [timings, setTimings] = useState('');



  return (
    <div>
      <Navbar />

      <div className='minh-[100vh] w-full'>
        <div className="lg:h-[10vh] h-[30vh] my-5 flex flex-wrap items-center lg:justify-evenly justify-center gap-3 p-2">
          <h1 className="font-mono text-lg font-extrabold">Categories:</h1>
          {doctorCategories.map((categoryItem, index) => (
            <button
              key={index}
              className={`rounded-md border border-black px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black hover:text-white font-mono ${category === categoryItem ? 'bg-black text-white' : 'text-black'
                }`}
              onClick={() => setCategory(categoryItem)}
            >
              {categoryItem}
            </button>
          ))}
        </div>

        <div className='bg-rose-500 h-[90vh] flex p-4 gap-2'>
          <div className='bg-blue-300 w-[70%] h-full rounded-3xl'></div>

          <div className=' border-2 border-black w-[30%] h-full bg-white flex flex-col items-center pt-8 gap-6'>

            <h1 className=''>Search for In-Clinic Appointment </h1>

            <div className='w-[75%]'>
              <Input label="State" onChange={(e) => {setState(e.target.value)}} />
            </div>
            <div className='w-[75%]'>
              <Input label="City" onChange={(e) => {setCity(e.target.value)}} />
            </div>
            <div className='w-[75%]'>
            <Input variant="standard" label="Category" placeholder="Category" onChange={(e) => {setCategory(e.target.value)}} value={category}/>
            </div>
            <div className='w-[75%]'>
            <Input variant="standard" label="Search by doctors name" placeholder="name" onChange={(e) => {setDoctorName(e.target.value)}} />
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Appointment