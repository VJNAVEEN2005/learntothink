import React from "react";
import ContextCard from "./ContextCard";

const Content = () => {
  return (
    <>
      <div className=" mt-6 mx-40">
        <h1 className="dark:text-white text-2xl font-bold">Concept</h1>
        <div className=" flex flex-wrap justify-start">
        <ContextCard
          title={"DBMS"}
          content={
            "Learn DBMS with interactive tutorials, quizzes, and real-world projects to enhance your understanding and skills."
          }
          link={"/dbms"}
        />

        <ContextCard
          title={"Interview"}
          content={
            "Interview problems solved"
          }
          link={"/interview"}
        />
        </div>
      </div>

      <div className=" mt-6 mx-40">
        <h1 className="dark:text-white text-2xl font-bold">Language</h1>

        <div className=" flex flex-wrap justify-start">
          <div className=" flex border-2 border-black dark:border-none flex-col bg-white w-96 p-5 rounded-2xl m-5 cursor-pointer">
            <h1 className="text-lg font-bold">Python</h1>
            <hr className=" border-solid border-black" />
            <p>
              Learn Python with hands-on exercises, comprehensive tutorials, and
              real-world projects to build your programming skills.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
