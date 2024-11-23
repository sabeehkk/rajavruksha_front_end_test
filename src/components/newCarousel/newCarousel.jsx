import React, { useState } from "react";
import "./carouse.css";
import e1 from "../../components/assets/new_carousel_1.jpg";
import e2 from "../../components/assets/new_carousel_5.jpg";
import e4 from "../../components/assets/new_carousel_4.jpg";
import e3 from "../../components/assets/new_carousel_3.jpg";
import e5 from "../../components/assets/new_carousel_2.jpg";

function NewCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [e5, e1, e2, e4, e3];
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
        <div className="slider-new">
          <div className="slider-prev-new">
            <button onClick={prev} className="prev-btn">
              {"<"}
            </button>
          </div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <img
                  style={{
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
            <button onClick={next} className="next-btn">
              {">"}
            </button>
          </div>
        </div>
        <div className="description-new-carosel"></div>
      </div>
    </div>
  );
}

export default NewCarousel;
