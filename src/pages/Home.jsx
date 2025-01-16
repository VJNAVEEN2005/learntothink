import React from "react";
import Content from "../components/Content";
import Search from "../components/Search";

const Home = () => {
  

  return (
    <div className="dark:bg-Secondary-black">
      <div className="dark:text-white flex flex-col items-center gap-12 h-[250px] md:h-[350px] justify-center">
        <h1 className="text-xl md:text-4xl font-semibold">
          Hello, What Do You Want To Learn??
        </h1>
        <Search/>
      </div>
      <Content />
    </div>
  );
};

export default Home;
