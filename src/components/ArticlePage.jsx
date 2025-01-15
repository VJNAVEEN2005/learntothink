import { div, text } from "motion/react-client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import dbms from "../data/dbms/dbms1.md";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import MarkdownRender from "./MarkdownRender";

const ArticlePage = () => {


  return (
    <>
        <MarkdownRender content={dbms}/>
    </>
  );
};

export default ArticlePage;
