import React from "react";
import { NavLink } from "react-router-dom";

const ContextCard = (props) => {
  return (
    <>
      <NavLink to={props.link}>
        
          <div className=" flex border-2 border-black dark:border-none flex-col bg-white w-96 p-5 rounded-2xl m-5 cursor-pointer">
            <h1 className="text-lg font-bold">{props.title}</h1>
            <hr className=" border-solid border-black" />
            <p>{props.content}</p>
          </div>

      </NavLink>
    </>
  );
};

export default ContextCard;
