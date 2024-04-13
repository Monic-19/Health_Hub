import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Card, CardHeader, Input, Typography, Button, CardBody, Chip, CardFooter, Tabs, TabsHeader, Tab, Avatar, } from "@material-tailwind/react";
import { motion } from "framer-motion"

const DoctorAppointments = () => {
  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Online",
      value: "online",
    },
    {
      label: "Offline",
      value: "offline",
    },
  ];

  const TABLE_HEAD = ["Member", "Type", "Date"];

  const TABLE_ROWS = [
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
      name: "John Michael",
      email: "john@creative-tim.com",
      job: "Manager",
      org: "Organization",
      online: true,
      date: "23/04/18",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      job: "Programator",
      org: "Developer",
      online: false,
      date: "23/04/18",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      name: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      job: "Executive",
      org: "Projects",
      online: false,
      date: "19/09/17",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      job: "Programator",
      org: "Developer",
      online: true,
      date: "24/12/08",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
      name: "Richard Gran",
      email: "richard@creative-tim.com",
      job: "Manager",
      org: "Executive",
      online: false,
      date: "04/10/21",
    },
  ];

  const [verified, setVerified] = useState(true);
  const [selectedTab, setSelectedTab] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortedResults, setSortedResults] = React.useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleTabSelect = (value) => {
    setSelectedTab(value);
  };


  React.useEffect(() => {
    let filteredResults = TABLE_ROWS;

    if (searchTerm) {
      filteredResults = filteredResults.filter((row) =>
        row.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTab === "online") {
      filteredResults = filteredResults.filter((row) => row.online);
    } else if (selectedTab === "offline") {
      filteredResults = filteredResults.filter((row) => !row.online);
    }

    setSortedResults(filteredResults);
  }, [selectedTab, searchTerm]);

  return (

    <>
      {verified ? (
        <div className='h-full w-[100%]'>
          <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none ">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
                <motion.div 
                     initial={{ x : -300, opacity : 0}}
                     animate={{ x : 0, opacity : 1 }}
                     transition={{ duration: 0.5 }}>
                  <Tabs value="all" className="w-full md:w-max">
                    <TabsHeader>
                      {TABS.map(({ label, value }) => (
                        <Tab key={value}
                          onClick={() => handleTabSelect(value)}
                          value={value} className='lg:w-[12vw] w-[33%]'>
                          &nbsp;&nbsp;{label}&nbsp;&nbsp;
                        </Tab>
                      ))}
                    </TabsHeader>
                  </Tabs>

                </motion.div>
                <motion.div 
                     initial={{ x : 300, opacity : 0}}
                     animate={{ x : 0, opacity : 1 }}
                     transition={{ duration: 0.5 }}
                  className="w-full md:w-72">
                  <Input
                    label="Search"
                    icon={<FaSearch className="h-5 w-5" />}
                    value={searchTerm}
                    onChange={handleChange}
                  />
                </motion.div>
              </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
              <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                      >
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
                  {sortedResults.map(
                    ({ img, name, email, job, org, online, date }, index) => {
                      const isLast = index === sortedResults.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <motion.tr 
                        initial={{ y : -50, opacity : 0}}
                        animate={{ y : 0, opacity : 1 }}
                        transition={{ duration: 0.5 }}
                          key={name}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Avatar src={img} alt={name} size="sm" />
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {name}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70"
                                >
                                  {email}
                                </Typography>
                              </div>
                            </div>
                          </td>

                          <td className={classes}>
                            <div className="w-max">
                              <Chip
                                variant="ghost"
                                size="sm"
                                value={online ? "online" : "offline"}
                                color={online ? "green" : "blue-gray"}
                              />
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {date}
                            </Typography>
                          </td>
                          {/* <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td> */}
                        </motion.tr>
                      );
                    },
                  )}
                </tbody>
              </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
                Page 1 of 10
              </Typography>
              <div className="flex gap-2">
                <Button variant="outlined" size="sm">
                  Previous
                </Button>
                <Button variant="outlined" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      )
        :
        (
          <div className=' absolute lg:top-[55%] top-[40%] left-[50%]  translate-x-[-50%] w-[60%]'>
            <h1 className='lg:text-4xl text-6xl font-mono font-bold text-center'>Please Verify Your Profile.</h1>
          </div>
        )
      }
    </>

  )
}

export default DoctorAppointments