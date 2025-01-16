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

      <h1 className="dark:text-white text-2xl font-bold">Language</h1>
      <div className="flex flex-wrap justify-evenly">
        <ContextCard
          title="Python"
          content="Learn Python with hands-on exercises, tutorials, and real-world projects."
          link="article/python"
        />
        
      </div>

    </div>
  );
};

export default Content;
