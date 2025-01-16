import { motion } from "motion/react";
import React from "react";
import { NavLink } from "react-router-dom";


const ContextCard = (props) => {
  return (
    <>
      <motion.div
       whileHover={{scale:1.1}}
      >
      <NavLink to={props.link}>
        
        <div className=" flex border-2 border-black dark:border-none flex-col bg-white w-40 h-28 md:h-44 md:w-96 p-2 md:p-5 rounded-2xl m-2 md:m-5 cursor-pointer">
          <h1 className=" text-sm md:text-lg font-bold">{props.title}</h1>
          <hr className=" border-solid border-black" />
         <div className=" flex items-center">
         <p className="  text-[8px] md:text-base">{props.content}</p>
         </div>
        </div>

    </NavLink>
      </motion.div>
    </>
  );
};

export default ContextCard;
