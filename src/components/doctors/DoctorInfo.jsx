import React, { useState } from "react";
import { Card, Typography, Input, Checkbox, Button, } from "@material-tailwind/react";

const DoctorInfo = () => {
  const [name, setName] = useState('');
  const [fee, setFee] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [clinicAddress, setClinicAddress] = useState('');
  const [availableSlots, setAvailableSlots] = useState('');
  const [education, setEducation] = useState('');
  const [educationProof, setEducationProof] = useState('');
  const [experience, setExperience] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [medicalField, setMedicalField] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data or perform further validation
    alert("form is submitted")
  };

  return (
    <div className='h-[70vh] w-[100%] '>
      <h1 className='text-3xl p-5 font-mono h-[10vh] bg-gray-900 text-white'>Your Information</h1>

      <div className=" h-[67vh] w-[100%] flex justify-center">
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 overflow-y-scroll lg:pb-[0vh] pb-[10vh] docInputForm">
          <div className="mb-1 flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Phone Number
            </Typography>
            <Input
              type="tel"
              size="lg"
              placeholder="9999888777"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setMobileNumber(e.target.value)}
              value={mobileNumber}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Profile Photo
            </Typography>
            <Input
              type="file"
              size="lg"
              onChange={(e) => setProfilePhoto(e.target.value)}
              value={profilePhoto}
            />

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
              Your Avaliable Slots
            </Typography>
            <Input
              size="lg"
              placeholder="Avaliable Slots"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setAvailableSlots(e.target.value)}
              value={availableSlots}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Education
            </Typography>
            <Input
              size="lg"
              placeholder="Education"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setEducation(e.target.value)}
              value={education}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Education Proof
            </Typography>
            <Input
              type="file"
              size="lg"
              onChange={(e) => setEducationProof(e.target.value)}
              value={educationProof}
            />


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Experience
            </Typography>
            <Input
              size="lg"
              placeholder="Experience in Years"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setExperience(e.target.value)}
              value={experience}
            />


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Speciality
            </Typography>
            <Input
              size="lg"
              placeholder="Specialty In Field"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setSpecialty(e.target.value)}
          value={specialty}
            />


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Medical Field
            </Typography>
            <Input
              size="lg"
              placeholder="Medical Fields"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setMedicalField(e.target.value)}
              value={medicalField}
            />

          </div>



          <Button className="mt-6" fullWidth>
            Submit
          </Button>

        </form>
      </div >

    </div >
  )
}

export default DoctorInfo