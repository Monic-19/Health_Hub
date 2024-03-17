import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const About = () => {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className=' min-h-[100vh] w-[100vw]'>
      <Navbar></Navbar>
      <div className='min-h-[80vh] w-full p-[5vh]'>
        <Accordion open={alwaysOpen}>
          <AccordionHeader onClick={handleAlwaysOpen}>What is Material Tailwind?</AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default About