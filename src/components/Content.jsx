import React from "react";
import ContextCard from "./ContextCard";
import { allData } from "../data/data"; // Import data

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
        <div key={category}>
          <h1 className="dark:text-white text-2xl font-bold capitalize">{category}</h1>
          <div className="flex flex-wrap justify-evenly">
            {groupedData[category].map((item) => (
              <ContextCard
                key={item.Topic}
                title={item.Topic.charAt(0).toUpperCase() + item.Topic.slice(1)} // Capitalize topic for title
                content={`Learn ${item.Topic} with hands-on exercises, tutorials, and real-world projects.`}
                link={`article/${item.Topic}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
