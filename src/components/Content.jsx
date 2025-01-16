import React from "react";
import ContextCard from "./ContextCard";
import { allData } from "../data/data"; // Import data
import { motion } from "motion/react";

const Content = () => {
  // Group content by category dynamically
  const groupedData = allData.reduce((acc, item) => {
    if (!acc[item.Category]) {
      acc[item.Category] = [];
    }
    acc[item.Category].push(item);
    return acc;
  }, {});

  return (
    <div className="mt-6 mx-4 md:mx-40">
      {Object.keys(groupedData).map((category) => (
        <motion.div 
          initial={{x:-100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{delay:(0.1)}}
          exit={{x:100, opacity:0}}
        key={category}>
          <h1 className="dark:text-white text-2xl font-bold capitalize">{category}</h1>
          <div className="flex flex-wrap justify-evenly">
            {groupedData[category].map((item,index) => (
              <motion.div 
              initial={{x:-100, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{delay:(0.1*index)}}
              exit={{x:100, opacity:0}}
              >
                <ContextCard
                key={item.Topic}
                title={item.Topic.charAt(0).toUpperCase() + item.Topic.slice(1)} // Capitalize topic for title
                content={`Learn ${item.Topic} with hands-on exercises, tutorials, and real-world projects.`}
                link={`article/${item.Topic}`}
              />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Content;
