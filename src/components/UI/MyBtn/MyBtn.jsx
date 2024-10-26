import React from "react";
import cl from "./MyBtn.module.css";
const MyBtn = ({ topPx, leftPx, text, icon, href, children, handelClick }) => {
  return (
    <button
      style={{ top: `${topPx}px`, left: `${leftPx}px` }}
      className={cl.btn}
    >
      <div className={cl.arrowCont}>
        <div
          style={{ backgroundImage: `url("${icon}")` }}
          className={cl.arrow}
        ></div>
        <div className={cl.child}>{children}</div>
        <span className={cl.text}>{text}</span>
      </div>
    </button>
  );
};

export default MyBtn;
