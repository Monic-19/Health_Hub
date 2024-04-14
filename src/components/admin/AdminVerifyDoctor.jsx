import { Button } from '@material-tailwind/react';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Avatar, Carousel } from "@material-tailwind/react";

// Fetch Doctor information from database from the id given in url  - > {id}


const AdminVerifyDoctor = () => {

    const navigate = useNavigate();
    let { id } = useParams();

    const docInfo = {
        id: 5,
        name: "Richard Gran",
        mobileNo : "9823133244",
        profileImageUrl: "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
        clinicImageUrl : "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww",
        dregeeImageUrl : "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhZGUlMjBzaGVldHxlbnwwfHwwfHx8MA%3D%3D",
        degree: "MD, MBBS, FRCS",
        specialization: "Orthopedics",
        education: "University of California, San Francisco School of Medicine",
        state: "Haryana",
        city: "Karnal",
        clinicAddress: "321 Maple Avenue, Suburbia",
        availability: "Wednesday, Thursday, Saturday",
        timings: "12 PM - 3 PM",
        description: "Orthopedic surgeon specializing in bone and joint disorders.",
        date: "04/10/21",
    }

    return (
        <div className='minh-[100vh] w-full bg-gray-300 p-5 '>
            <div className='h-full w-full bg-white p-5 rounded-2xl'>

                <div className='flex  items-center gap-5 cursor-pointer'>
                    <Avatar src={docInfo.profileImageUrl} alt="avatar" size="xxl" />
                    <h1 className='text-4xl'>Dr. {docInfo.name}</h1>
                </div>

                <div className='my-5 italic flex flex-col gap-2 lg:ml-[8vw]'>
                    <h2><b>Mobile Number - </b> {docInfo.mobileNo} </h2>
                    <h2>{docInfo.description}</h2>
                    <h2>{docInfo.degree} from {docInfo.education} </h2>
                    <h2><b>Clinic Address - </b> {docInfo.clinicAddress}, {docInfo.city}, {docInfo.state} </h2>
                    <h2><b>Avaliable on </b> {docInfo.availability} at {docInfo.timings} </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-5 my-5 lg:h-[70vh] lg:w-[60vw] rounded-xl lg:ml-[20vw]">
                    <Carousel loop={true} autoplay={true} className="rounded-xl">
                        <img
                            src={docInfo.profileImageUrl}
                            alt="image 1"
                            className="h-full w-full object-cover object-center"
                        />
                        <img
                            src={docInfo.clinicImageUrl}
                            alt="image 2"
                            className="h-full w-full object-cover object-center"
                        />
                        <img
                            src={docInfo.dregeeImageUrl}
                            alt="image 3"
                            className="h-full w-full object-cover object-center"
                        />
                    </Carousel>
                </div>

                <Button onClick={() => navigate(-1)} className='lg:ml-[8vw]'>GoBack</Button>
            </div>
        </div>
    )
}

export default AdminVerifyDoctor