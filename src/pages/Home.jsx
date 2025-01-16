import React from "react";
import Content from "../components/Content";

const Home = () => {
  return (
    <>
      <div className=" dark:bg-Secondary-black">
        <div className=" dark:text-white ml-0 mr-0 flex justify-center flex-col gap-12 h-[350px] items-center">
          <div className=" text-xl md:text-4xl font-semibold">
            Hello, What Do You Want To Learn??
          </div>
          <div className=" border border-black flex items-center bg-white pr-2 rounded-3xl">
            <input
              className="text-black rounded-l-full p-2 md:p-3 md:w-[400px]"
              type="search"
              name=""
              id=""
            />
            <img
              className="md:w-10 md:h-10 w-6 h-6 cursor-pointer"
              src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000"
              alt=""
            />
          </div>
        </div>

        <Content/>
        
      </div>
    </>
  );
};

export default Home;
