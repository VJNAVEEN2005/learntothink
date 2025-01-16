import React from "react";
import Content from "../components/Content";

const Home = () => {
  return (
    <div className="dark:bg-Secondary-black">
      <div className="dark:text-white flex flex-col items-center gap-12 h-[350px] justify-center">
        <h1 className="text-xl md:text-4xl font-semibold">
          Hello, What Do You Want To Learn??
        </h1>
        <div className="border border-black bg-white flex items-center pr-2 rounded-3xl">
          <input
            className="text-black rounded-l-full p-2 md:p-3 md:w-[400px]"
            type="search"
            placeholder="Search..."
          />
          <img
            className="md:w-10 md:h-10 w-6 h-6 cursor-pointer"
            src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000"
            alt="Search"
          />
        </div>
      </div>
      <Content />
    </div>
  );
};

export default Home;
