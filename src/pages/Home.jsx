import React from "react";
import Content from "../components/Content";
import Search from "../components/Search";
import { motion } from "motion/react";




const Home = () => {
  

  return (
    <div className="dark:bg-Secondary-black">
      <div className="dark:text-white flex flex-col items-center gap-12 h-[250px] md:h-[350px] justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [1, 0.8, 1], y: [-10, 10, -10] }} // Smooth up and down movement
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }} // Infinite loop
        className="text-xl md:text-4xl font-semibold">
          Hello, What Do You Want To Learn??
        </motion.h1>
   
        <Search/>
      </div>
      <Content />
    </div>
  );
};

export default Home;
