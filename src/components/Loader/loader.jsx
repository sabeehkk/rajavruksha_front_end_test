import React from "react";
import loader_video from "../../components/assets/loader_new.mp4";
import { Oval } from "react-loader-spinner";
import "./loader.css";

const Loader = ({ color = "#4fa94d", secondaryColor = "#4fa94d", logo }) => {
  return (
    <div className={`loader ${logo ? "" : "loader-with-bg"}`}>
      {!!logo ? (
        <video
          src={loader_video}
          type="video/mp4"
          autoPlay
          loop
          muted
          className="loader-logo"
        />
      ) : (
        <Oval
          visible={true}
          height="80"
          width="80"
          color={color}
          secondaryColor={secondaryColor}
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass="oval-spinner"
        />
      )}
    </div>
  );
};

export default Loader;
