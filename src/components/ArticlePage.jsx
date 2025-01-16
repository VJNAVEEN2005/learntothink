import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownRender from "./MarkdownRender";
import { allData } from "../data/data";
import { motion } from "motion/react";

const ArticlePage = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const foundData = allData.find((item) => item.Topic === id);
    if (foundData) {
      setContent(foundData.content);
    }
  }, [id]);

  return (<>
    <motion.div
      initial={{x:"-100%", opacity:0}}
      animate={{x:0, opacity:1}}
      exit={{x:"-100%", opacity:0}}
    >
    {content ? <MarkdownRender content={content} /> : <h1 className=" dark:text-white">Loading...</h1>}
    </motion.div>
  </>);
};

export default ArticlePage;
