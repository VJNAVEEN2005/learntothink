import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownRender from "./MarkdownRender";
import { conceptData, languageData } from "../data/data";

const ArticlePage = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const foundData =
     conceptData.find((item) => item.Topic === id) ||
     languageData.find((item) => item.Topic === id);
    if (foundData) {
      setContent(foundData.content);
    }
  }, [id]);

  return (
    <>
      {content ? <MarkdownRender content={content} /> : <h1>Loading...</h1>}
    </>
  );
};

export default ArticlePage;
