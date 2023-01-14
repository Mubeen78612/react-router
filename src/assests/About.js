import React from 'react'
import five from '../Images/five.jpg'
import six from '../Images/six.jpg'
import seven from '../Images/seven.jpg'
import eight from '../Images/eight.jpg'
import ten from '../Images/ten.jpg'

function About() {
  return (
    <>
    <section className='w-screen  h-auto'>
      <h1 className='pt-7 text-4xl'> New PRODUCT</h1>
      <div className='flex space-x-8 justify-around'>
        <div> 
          <img className='w-[400px] h-[400px] hover:scale-75' src={five}/>
        </div>
        <div>
          <img className='w-[400px] h-[400px] hover:scale-75' src={six}/>
           </div>
      </div>

    </section>
    <main-section className=''>
    <h1 className='text-4xl'> Similar PRODUCT</h1>
    <div className='flex justify-around'>
      <div>
        <img className='w-[220px] h-[220px] hover:scale-75' src={seven}/>
      </div>
      <div>
        <img className='w-[220px] h-[220px] hover:scale-75' src={eight}/>
      </div>
      <div>
        <img className='w-[220px] h-[220px] hover:scale-75' src={ten}/>
      </div>
    </div>

    </main-section>
    </>
  )
}

export default About;