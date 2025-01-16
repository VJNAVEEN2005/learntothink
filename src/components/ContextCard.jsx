import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

const ContextCard = ({ title, content, link }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <NavLink to={link}>
        <div className="border-2 border-black dark:border-none bg-white w-40 h-28 md:h-44 md:w-96 p-2 md:p-5 rounded-2xl m-2 md:m-5 cursor-pointer">
          <h1 className="text-sm md:text-lg font-bold">{title}</h1>
          <hr className="border-solid border-black" />
          <p className="text-xs md:text-base">{content}</p>
        </div>
      </NavLink>
    </motion.div>
  );
};

export default ContextCard;
