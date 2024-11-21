import React, { useState } from "react";
import "./carouse.css";
import fourth from "../../components/assets/5.jpg";
// import e1 from "../../components/assets/carla.jpg";
import e2 from "../../components/assets/slidingpic.jpg";
// import e3 from "../../components/assets/edited1.jpg";
// import e4 from "../../components/assets/cartoon2.jpg";
// import e4 from "../../components/assets/cartoon3.jpg";
// import e5 from "../../components/assets/freepik-export-20241115114842s91d.jpeg";
import e1 from "../../components/assets/new_carousel_1.jpg";
import e5 from "../../components/assets/new_carousel_5.jpg";
import e4 from "../../components/assets/new_carousel_4.jpg";
import e3 from "../../components/assets/new_carousel_3.jpg";
import e7 from "../../components/assets/new_carousel_2.jpg";

function NewCarousel() {
  // State to track the active item
  const [activeIndex, setActiveIndex] = useState(0); // Start from the first item
  const items = [
    // 'https://images.unsplash.com/photo-1506706435692-290e0c5b4505?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    e7,
    e1,
    e5,
    e4,
    e3,
  ];
  // const items = [
  //   "https://images.unsplash.com/photo-1630305106122-80b9ace010c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHx3aWxsYSUyMHByb2plY3RzfGVufDB8fDB8fHww",
  //   "https://plus.unsplash.com/premium_photo-1728417204249-da7d4b047c8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fE1hbmFnZWQlMjBGYXJtbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
  //   "https://images.unsplash.com/photo-1506706435692-290e0c5b4505?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //   "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  // ];
  // Functions to go to the next or previous item

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  // Function to determine the class based on position relative to activeIndex
  const getClass = (index) => {
    if (index === activeIndex) return "focus";
    if (index === (activeIndex - 1 + items.length) % items.length)
      return "big1";
    if (index === (activeIndex + 1) % items.length) return "big2";
    if (index === (activeIndex - 2 + items.length) % items.length)
      return "small1";
    if (index === (activeIndex + 2) % items.length) return "small2";
    return "";
  };

  return (
    <div className="home-new-carouse">
      <div className="home-popular">
        {/* <h3>Popular Projects</h3> */}
        <div className="slider-new">
          <div className="slider-prev-new">
            {/* Previous Button */}
            <button onClick={prev} className="prev-btn">
              {"<"}
            </button>
          </div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <img
                  style={{
                    // objectFit: "cover",
                    width: "165px",
                    boxShadow: "0 6px 12px rgba(0, 0, 0,1)",
                    borderRadius: "10px",
                  }}
                  className={`item ${getClass(index)}`}
                  src={item}
                  alt={`Course ${index + 1}`}
                />
              </li>
            ))}
          </ul>
          <div className="slider-next-new">
            {/* Next Button */}
            <button onClick={next} className="next-btn">
              {">"}
            </button>
          </div>
        </div>
        <div className="description-new-carosel">
          {/* Display the title or description if needed */}
        </div>
      </div>
    </div>
  );
}

export default NewCarousel;
