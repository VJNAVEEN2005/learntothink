import React from "react";
import ContextCard from "./ContextCard";

const Content = () => {
  return (
    <div className="mt-6 mx-4 md:mx-40">
      <h1 className="dark:text-white text-2xl font-bold">Concept</h1>
      <div className="flex flex-wrap justify-evenly">
        <ContextCard
          title="DBMS"
          content="Learn DBMS with interactive tutorials, quizzes, and real-world projects."
          link="article/dbms"
        />
        <ContextCard
          title="Interview"
          content="Interview problems solved with structured explanations."
          link="article/interview"
        />
      </div>

      <h1 className="dark:text-white text-2xl font-bold mt-6">Language</h1>
      <div className="flex flex-wrap">
        <div className="border-2 border-black dark:border-none bg-white w-96 p-5 rounded-2xl m-5 cursor-pointer">
          <h1 className="text-lg font-bold">Python</h1>
          <hr className="border-solid border-black" />
          <p>
            Learn Python with hands-on exercises, tutorials, and real-world projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
