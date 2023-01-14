
import React from 'react'
import second from '../Images/second.jpg'
import third from '../Images/third.jpg'
import four from '../Images/four.jpg'



function Home() {
  return (
    <>
    <section className=' w-[100%] overflow-auto'>
    <h1 className='text-2xl font-bold'> Get Started from there</h1>
    <div className='flex'>
    <div className=''>
    <img className='w-[300px] h-[300px] rounded-full hover:scale-75 ' src={second}/>
    </div>
    <div className=' mt-8 font-bold'>
      <p> Green vines attached to the trunk of the tree had wound themselves toward the top of the canopy.
       Ants used the vine as their private highway, avoiding all the creases and crags of the bark, 
          up the tree leaving a gap in the once pristine ant highway.</p>
          <h2 className='mt-5 text-4xl'>New stock Avalible</h2>
    </div>
    </div>
  </section>
  <section className=' overflow-auto'>
    <div className='flex  py-7'>
      <div className=' font-bold'>
        <p>Green vines attached to the trunk of the tree had wound themselves toward the top of the canopy
         is was the way it was supposed to be. Something had damaged
           the vine overnight halfway up the tree leaving a gap in the once pristine ant highway.
           </p>
           <h2 className='mt-5 text-4xl'>New stock Avalible</h2>
      </div>
      <div>
        <img className='w-[300px] h-[300px] rounded-full hover:scale-75' src={third}/>
      </div>
    </div>

  </section> 
 
    </>
  );
}

export default Home;