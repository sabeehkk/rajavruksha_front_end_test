import React from "react";
import VideoModal from "../../components/ModalVideo";


import "./style.css";

const Tour = () => {
  return (
   <div className="mt-5">
     <div className="col-md-11 tour-container " >
            <div className="tour-inn" data-aos="fade-right" >
              <img style={{height:'450px'}} src={'https://rajavrukshagroup.in/wp-content/uploads/2023/12/pexels-jahoo-clouseau-388415-2048x1080.jpg'} alt="img" />
              <div className="video-main">
                <div className="tour_video_waves">
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1" />
                      <div className="waves wave-2" />
                      <div className="waves wave-3" />
                    </div>
                  </div>
                  <VideoModal videoId="bFYc54lb9kE" />
                </div>
              </div>
            </div>
          </div>
   </div>
  );
};

export default Tour;
