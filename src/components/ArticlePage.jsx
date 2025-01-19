import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownRender from "./MarkdownRender";
import { motion } from "motion/react";
import axios from "axios";
import api from '../api/backend.json'

const ArticlePage = () => {
  const { category, id } = useParams();
  const [groupedData, setGroupedData] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get(`${api.primary}/api/topic/${category}/${id}`)
      .then((response) => {
        setGroupedData(response.data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching topics:", err);
        setLoading(false);
      });
  });


  return (
    <>
      <motion.div>
        {!loading ? (
          <MarkdownRender content={groupedData} />
        ) : (
          <h1 className=" dark:text-white">Loading...</h1>
        )}
      </motion.div>
    </>
  );
};

export default ArticlePage;
