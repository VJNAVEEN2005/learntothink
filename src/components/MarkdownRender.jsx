import { div, text } from "motion/react-client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import dbms from "../data/dbms/dbms1.md";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const MarkdownRender = (props) => {

      const [markdownContent, setMarkdownContent] = useState("");
    
      const [isCopied, setIsCopied] = useState(false);
    
      useEffect(() => {
        fetch(props.content)
          .then((response) => response.text())
          .then((text) => setMarkdownContent(text));
      }, []);

  return (
    <>
    <div className=" dark:bg-sky-950 dark:text-white">
        <div className="pt-6 mx-5 md:mx-40">
          <ReactMarkdown
            components={{
              code({ className, children, ...rest }) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <>
                    <div className=" flex text-white justify-between bg-slate-700 -mb-2 p-2 mt-2 rounded-t-[20px]">
                      <div className=" ml-3">Code</div>
                      <div
                        className=" mr-3 cursor-pointer"
                        onClick={() => {
                          navigator.clipboard.writeText(children);
                          setIsCopied(true);
                          setTimeout(() => {
                            setIsCopied(false);
                          }, 5000);
                        }}
                      >
                        <div
                          className={
                            isCopied ? " flex items-center gap-2" : "hidden"
                          }
                        >
                          <div className=" w-5">
                            <img
                              src="https://img.icons8.com/?size=100&id=uNzoeGXjLfRM&format=png&color=ffffff"
                              alt=""
                            />
                          </div>
                          <div>Copied</div>
                        </div>

                        <div
                          className={
                            !isCopied ? " flex items-center gap-2" : "hidden"
                          }
                        >
                          <div className=" w-5">
                            <img
                              src="https://img.icons8.com/?size=100&id=QfmxGpnj0cA8&format=png&color=ffffff"
                              alt=""
                            />
                          </div>
                          <div>Copy</div>
                        </div>
                      </div>
                    </div>
                    <SyntaxHighlighter
                      PreTag="div"
                      language={match[1]}
                      style={atomDark}
                      customStyle={{
                        padding: "25px",
                        borderRadius: "0px 0px 20px 20px",
                      }}
                      {...rest}
                    >
                      {children}
                    </SyntaxHighlighter>
                  </>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}


          >
            {markdownContent}
          </ReactMarkdown>
        </div>
        </div>
    </>
  )
}

export default MarkdownRender