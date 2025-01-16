import React, { useEffect, useState } from "react";
import dbms from "../data/dbms/dbms1.md";
import MarkdownRender from "./MarkdownRender";
import { useParams } from "react-router-dom";
import { mainData, conceptData } from "../data/data";

const ArticlePage = () => {
  const { id } = useParams();
  const [isData, setIsData] = useState("");
  const [isContent, setIsContent] = useState("");
  const [dataIsThere, setDataIsThere] = useState(false);


  setTimeout(() => {
    dataAnalysis();
  }, 0.1)

  function dataAnalysis() {
    for (let index = 0; index < mainData.length; index++) {
      let element = mainData[index];
      if (element.Topic === id) {
        setIsData(element.Topic);
      }
    }

      for (let index = 0; index < conceptData.length; index++) {
        let element = conceptData[index];
        if (element.Topic === id) {
          switch (id) {
            case "dbms":
              setIsContent(element.content.dbms);
              console.log(element.content.dbms);
              setDataIsThere(true)
              break;
            case "interview":
              setIsContent(element.content.interview);
              console.log(element.content.interview);
              setDataIsThere(true)
              break;

            default:
              break;
          }
        }
      }
   
  }

  return (
    <>
      {
        !dataIsThere && (
          <h1>Loading...</h1>
        )
      }
      {
        dataIsThere && (
         <>
          <MarkdownRender content={isContent} />
         </>
       
        )
      }

    </>
  );
};

export default ArticlePage;
