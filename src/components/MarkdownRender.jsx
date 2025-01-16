import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

const MarkdownRender = (props) => {

      const [markdownContent, setMarkdownContent] = useState("");
    
      const [isCopied, setIsCopied] = useState(false);
    
      useEffect(() => {
        fetch(props.content)
          .then((response) => response.text())
          .then((text) => setMarkdownContent(text));
      }, [props.content]);

  return (
    <>
    <div className=" dark:bg-Secondary-black dark:text-white">
        <div className="pt-6 mx-5 md:mx-40">
          <ReactMarkdown
          remarkPlugins={[remarkGfm]}
            components={{
              table({ children }) {
                return <table className=" border my-6 rounded-[20px]">{children}</table>;
              },
              th({ children }) {
                return <th className="border border-gray-300 px-4 py-2 text-white  bg-Secondary-black dark:bg-Primary-Green">{children}</th>;
              },
              td({ children }) {
                return <td className="border border-gray-300 px-4 py-2">{children}</td>;
              },
              code({ className, children, ...rest }) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <>
                    <div className=" flex text-white justify-between bg-Primary-black dark:bg-Primary-Green -mb-2 p-2 mt-2 rounded-t-[15px]">
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
                      className="dark:border-Primary-Green border-Primary-black  border-solid border-2"
                      customStyle={{
                        padding: "25px",
                        borderRadius: "0px 0px 15px 15px",
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