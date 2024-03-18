import React from 'react'

const HeroB = () => {
  return (
    <div>

      <div className='h-[50vh] my-[5vh] w-full bg-red-100 px-[5vw]'>
        <div className='h-[20%]  text-3xl font-mono leading-[5vh]'>
          <h1>Book for in-clinic consultation.</h1>
          <h2>Top, High-skilled doctors. </h2>
        </div>

        <div className='h-[76%] mt-[1%] flex flex-wrap gap-5 '>

          <div className='bg-red-400 h-[100%] w-[20%] rounded-xl'>
            <div className="h-[80%] bg-blue-200"></div>
            <div className="h-[20%] flex flex-col justify-end ">
              <h4 className='text-xl font-bold'>Therepist</h4>
              <h5 className='text-l text-gray-500'>sare kaam karado</h5>
            </div>
          </div>
          <div className='bg-red-400 h-[100%] w-[20%] rounded-xl'>
            <div className="h-[80%] bg-blue-200"></div>
            <div className="h-[20%] flex flex-col justify-end ">
              <h4 className='text-xl font-bold'>Therepist</h4>
              <h5 className='text-l text-gray-500'>sare kaam karado</h5>
            </div>
          </div>
          <div className='bg-red-400 h-[100%] w-[20%] rounded-xl'>
            <div className="h-[80%] bg-blue-200"></div>
            <div className="h-[20%] flex flex-col justify-end ">
              <h4 className='text-xl font-bold'>Therepist</h4>
              <h5 className='text-l text-gray-500'>sare kaam karado</h5>
            </div>
          </div>
        </div>


      </div>

      <div className='h-[50vh] my-[5vh] w-full bg-blue-100'> </div>

    </div>
  )
}

export default HeroB