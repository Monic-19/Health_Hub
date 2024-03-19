import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeroB = () => {
  const doctorFields = [
    { title: "General Medicine", description: "Diagnosing and treating a wide range of medical conditions." },
    { title: "Specialized Medicine", description: "Focusing on specific areas like cardiology, neurology, gastroenterology, or dermatology." },
    { title: "Pediatrics", description: "Specializing in the healthcare of infants, children, and adolescents." },
    { title: "Obstetrics and Gynecology", description: "Providing comprehensive healthcare services for women, including prenatal care, childbirth, and gynecological concerns." }
  ];

  const problems = [
    { title: 'Depression or anxiety' },
    { title: 'Period doubts or Pregnancy' },
    { title: 'Cold, cough or fever' },
    { title: 'Skin problems' },
  ];

  const navigate = useNavigate();

  return (
    <div className='my-[15vh]'>

      <div className='lg:h-[60vh] h-[150vh] my-[10vh] w-full px-[5vw] '>

        <div className='h-[20%] text-xl lg:text-3xl font-mono leading-0 lg:leading-[5vh]'>
          <h1>Book for in-clinic consultation.</h1>
          <h2>Top, High-skilled doctors.</h2>
        </div>
        <div className='lg:h-[76%] h-[90%] lg:mt-[1%] mt-[-15vh] flex flex-wrap gap-5 justify-evenly'>

          {doctorFields.map((doc, index) => (
            <div key={index} className='w-full sm:w-[45%] md:w-[30%] lg:w-[20%] bg-blue-200 rounded-xl cursor-pointer'>
              <div className="h-[70%] w-full"></div>
              <div className="h-[30%] flex flex-col pt-1 border-t-2 border-black px-2 bg-white">
                <h4 className='text-lg font-bold'>{doc.title}</h4>
                <h5 className='text-sm text-gray-500'>{doc.description}</h5>
              </div>
            </div>
          ))}

        </div>
      </div>


      <div className='lg:h-[50vh] h-[150vh] lg:my-[5vh] mb-[-15vh] w-full px-[5vw]  flex-col  justify-center items-center '>

        <div className='lg:h-[76%] h-[25%] w-full mt-[1%] flex flex-wrap lg:gap-5  lg:justify-evenly '>

          {problems.map((problem, index) => (
            <div key={index} className='h-[100%] w-full lg:w-[20%] rounded-xl cursor-pointer mb-[-6vh]'>
              <div className="h-[60%] lg:h-[75%] w-full flex justify-center items-center bg-purple-300 rounded-t-xl"></div>
              <div className="h-[15%] rounded-b-xl flex flex-col justify-center items-center pt-1 border-2 border-black px-2">
                <h4 className='lg:text-lg text-md'>{problem.title}</h4>
              </div>
            </div>
          ))}

        </div>

        <div className='lg:h-[20%] h-[5%] mt-[90vh] text-right text-md lg:text-3xl text-lg font-mono leading-0 lg:leading-[5.5vh] lg:mt-[6vh] flex flex-col items-end '>
          <h2>Consult top doctors online.</h2>
          <h1>Private online consultations with verified doctors.</h1>
        </div>

      </div>

    </div>
  )
}

export default HeroB