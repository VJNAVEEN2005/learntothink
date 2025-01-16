import React from "react";
import dbms from "../data/dbms/dbms1.md";
import MarkdownRender from "./MarkdownRender";

const ArticlePage = () => {


  return (
    <>
        <MarkdownRender content={dbms}/>
    </>
  );
};

export default ArticlePage;
