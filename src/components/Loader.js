import React from "react";
import "./Loader.module.css";

const Loader = () => {
  return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
};

export default Loader;
