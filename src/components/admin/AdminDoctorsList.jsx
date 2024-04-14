import React from 'react'
import { Card, Typography, Button } from "@material-tailwind/react";
import { ImCross } from "react-icons/im";
import { SlControlPlay } from "react-icons/sl";
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';

const TABLE_HEAD = ["Name", "Specialization", "Apply Date", "Profile", "Decision"];

const TABLE_ROWS = [
  {
    id:1,
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    id:2,
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    id:3,
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    id:4,
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    id:5,
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];



const AdminDoctorsList = () => {
  const acceptProfiles = () => { alert("Profile accepted") }
  const rejectProfiles = () => { alert("Profile rejected") }
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.6, power: "easeIn" }}
      className='rounded-xl'>

      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              TABLE_ROWS.map(({ name, job, date , id}, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {job}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {date}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <NavLink to={`/verify/${id}`}>
                        <Button>View Profile</Button>
                      </NavLink>
                    </td>
                    <td className={`${classes} `}>
                      <div className='flex justify-center items-center gap-6'>
                        <ImCross className=' text-red-600 hover:rotate-12' size={20} onClick={rejectProfiles} />
                        <SlControlPlay className='text-green-300 hover:rotate-12' size={20} onClick={acceptProfiles} />
                      </div>
                    </td>

                  </tr>
                );
              })}
          </tbody>
        </table>
      </Card>
    </motion.div>
  )
}

export default AdminDoctorsList