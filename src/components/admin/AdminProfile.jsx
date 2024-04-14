import React, { useState } from 'react'
import { Card, CardHeader, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { motion } from "framer-motion"

const AdminProfile = () => {
  const [name,SetName] = useState("Majnu Bhai");
  const [id,setId] = useState("123456789");
  const [image,SetImage] = useState("https://images.unsplash.com/photo-1619533394727-57d522857f89?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D");
  return (
    <motion.div 
    initial = {{scale : 0, height :0}}
    animate = {{scale : 1, height : "70vh"}}
    transition = {{duration : 0.5}}
      className=' flex justify-center items-center'>
      <Card
        shadow={false}
        className="relative grid h-[70vh] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url(https://images.unsplash.com/photo-1619533394727-57d522857f89?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D)] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            {name}
          </Typography>
          <Typography
            variant="h4"
            color="white"
            className="mb-6 font-bold hover:scale-[1.1] hover:text-gray-500 leading-[1.5]"
          >
            <button>Log Out</button>
          </Typography>
          
          <Typography variant="h5" className="mb-4 text-gray-400">
            {id}
          </Typography>
          <Avatar
            size="xl"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white leading-[1.2]"
            src={image}
          />
        </CardBody>
      </Card>
    </motion.div>
    )
}

export default AdminProfile