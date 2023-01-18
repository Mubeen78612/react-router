import React from 'react'
import five from '../Images/five.jpg'
import six from '../Images/six.jpg'
import seven from '../Images/seven.jpg'
import eight from '../Images/eight.jpg'
import ten from '../Images/ten.jpg'

function About(props) {
  return (
    <>
     <section className="">
    
      <div className="flex flex-wrap">
        {props?.data?.map((item, index) => {
          return (
            <div className="bg-red-400 mx-4 my-4" key={index}>
              <img
                className="w-[300px] h-[300px] rounded-full hover:scale-75 "
                src={item?.thumbnail}
              />
              <h2 className=" text-3xl">{item?.title}</h2>
              <h3> {item?.category}</h3>
              <h4> {item?.price}</h4>
              
              <h4> {item?.rating}</h4>
              <h5> {item?.stock}</h5>
            </div>
          );
        })}
      </div>
    </section>
    </>
  )
}

export default About;