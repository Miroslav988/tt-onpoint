import React, { useState, useRef } from "react";
import "./MainPage.css"; // Импортируем CSS для стилей
import MySection1 from "./Section1/MySection1";
import MySection2 from "./Section2/MySection2";
import MySection3 from "./Section3/MySection3";

const HorizontalPage = () => {
  const sections = [<MySection1 />, <MySection2 />, <MySection3 />];

  const [currentSection, setCurrentSection] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;

    if (startX > endX + 50) {
      // Перелистывание влево
      setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
    } else if (startX < endX - 50) {
      // Перелистывание вправо
      setCurrentSection((prev) => Math.max(prev - 1, 0));
    }

    setIsDragging(false);
  };

  return (
    <div
      className="horizontal-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `translateX(-${currentSection * 100}vw)`,
        transition: isDragging ? "none" : "transform 0.5s ease",
      }}
    >
      {sections.map((section, index) => (
        <div
          className="section"
          style={{ transform: "scale(0.5)", transformOrigin: "0 0" }}
          key={index}
        >
          {section}
        </div>
      ))}
    </div>
  );
};

export default HorizontalPage;
