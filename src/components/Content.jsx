import React, { useEffect, useState } from "react";
import ContextCard from "./ContextCard";
import { motion } from "framer-motion"; // Fix import
import axios from "axios"; // Install if needed: `npm install axios`
import api from '../api/backend.json'

const Content = () => {
  const [groupedData, setGroupedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${api.primary}/api/topics`)
      .then((response) => {
        setGroupedData(response.data);
        
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching topics:", err);
        setError("Failed to load topics.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading topics...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="mt-6 mx-4 md:mx-40">
      {Object.keys(groupedData).map((category) => (
        <motion.div 
          key={category} // Fix key placement
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          exit={{ x: 100, opacity: 0 }}
        >
          <h1 className="dark:text-white text-2xl font-bold capitalize">{category}</h1>
          <div className="flex flex-wrap justify-evenly">
            {groupedData[category].map((item, index) => (
              <motion.div 
                key={item.topic} // Fix missing key
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: Math.min(index * 0.1, 1) }} // Cap delay at 1s
                exit={{ x: 100, opacity: 0 }}
              >
                <ContextCard
                  title={item.topic.charAt(0).toUpperCase() + item.topic.slice(1)} // Capitalize topic
                  content={`Learn ${item.topic} with hands-on exercises, tutorials, and real-world projects.`}
                  link={`article/${item.category}/${item.topic}`}
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
