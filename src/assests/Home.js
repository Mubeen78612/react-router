import React from "react";
// import second from "../Images/second.jpg";
// import third from "../Images/third.jpg";
// import four from "../Images/four.jpg";

function Home(props) {
  console.log(props.data);
  return (
    <section className="">
      <h1 className="text-2xl font-bold text-center">Get Started from there</h1>
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
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
