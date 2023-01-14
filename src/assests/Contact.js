import React from 'react'

function Contact() {
  return (
    <>
    <h1 className='text-5xl text-center'> Contact US</h1>
    <form>
      <div className='flex flex-col items-center mt-10 text-center'>
      <label> First Name:</label>
      <input type="text" placeholder=" Enter first Name"/>
      <label> Last Name:</label>
      <input type="text" placeholder=" Enter last Name"/>
      <label> Email:</label>
      <input type="email" placeholder='Enter Email'/>
      <label> PH NO:</label>
      <input type="number" placeholder='Enter phone number'/>
      <label> address:</label>
      <input type="textarea" placeholder='Enter address'/>
      <button> Submit</button>
      </div>


    </form>
  
    </>
  )
}

export default Contact;