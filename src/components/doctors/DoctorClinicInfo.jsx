import React, { useState } from "react";
import { Card, Typography, Input, Checkbox, Button, } from "@material-tailwind/react";
import { motion } from "framer-motion"


const DoctorClinicInfo = () => {
    const [fee, setFee] = useState('');
    const [clinicName, setClinicName] = useState('');
    const [clinicAddress, setClinicAddress] = useState('');
    const [availableSlots, setAvailableSlots] = useState('');
    const [clinicPhoto, setClinicPhoto] = useState('');
    const [openingTime, setOpeningTime] = useState('');
    const [closingTime, setClosingTime] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("form is submitted")
    }

  return (
    
    <div

      className='h-[70vh] w-[100%] '>
      <h1 className='text-3xl p-5 font-mono h-[10vh] bg-gray-900 text-white'>Your Clinic's Information</h1>

      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" h-[67vh] w-[100%] flex justify-center">
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 overflow-y-scroll lg:pb-[0vh] pb-[10vh] docInputForm">
          <div className="mb-1 flex flex-col gap-4">


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Clinic Name
            </Typography>
            <Input
              size="lg"
              placeholder="clinic name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setClinicName(e.target.value)}
              value={clinicName}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Clinic Address
            </Typography>
            <Input
              size="lg"
              placeholder="clinic address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setClinicAddress(e.target.value)}
              value={clinicAddress}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Clinic Picture
            </Typography>
            <Input
              type="file"
              size="lg"
              onChange={(e) => setClinicPhoto(e.target.value)}
              value={clinicPhoto}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Fees per visit
            </Typography>
            <Input
              size="lg"
              placeholder="Rs. 500"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setFee(e.target.value)}
              value={fee}
            />


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Opening Time
            </Typography>
            <Input
              size="lg"
              placeholder="Opening Time"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setOpeningTime(e.target.value)}
              value={openingTime}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Closing Time
            </Typography>
            <Input
              size="lg"
              placeholder="Closing Time"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setClosingTime(e.target.value)}
              value={closingTime}
            />

          </div>


          <Button className="mt-6" fullWidth>
            Submit
          </Button>

        </form>
      </motion.div >

    </div >
  )
}

export default DoctorClinicInfo