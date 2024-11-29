import React from "react";
import { Circles, Oval } from "react-loader-spinner";
import "./loader.css";

const Loader = ({ color = "#4fa94d", secondaryColor = "#4fa94d" }) => {
  return (
    <div className="loader">
      <Oval
        visible={true}
        height="80"
        width="80"
        color={color}
        secondaryColor={secondaryColor}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
