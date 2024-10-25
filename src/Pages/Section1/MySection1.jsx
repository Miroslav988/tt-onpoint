import React from "react";
import cl from "./MySection1.module.css";

const MySection1 = () => {
  return (
    <div className={cl.parent}>
      <div className={`${cl.leftBakt} ${cl.photos}`}></div>
      <div className={`${cl.downLeftBakt} ${cl.photos}`}></div>
      <div className={`${cl.downLeftSp} ${cl.photos}`}></div>
      <div className={`${cl.downBlur} ${cl.photos}`}></div>
      <div className={`${cl.bigBakt} ${cl.photos}`}></div>
      <div className={`${cl.bigSp} ${cl.photos}`}></div>
      <div className={`${cl.rightTopBakt} ${cl.photos}`}></div>
      <div className={`${cl.topBlur} ${cl.photos}`}></div>
      <div className={`${cl.rightMidBakt} ${cl.photos}`}></div>
      <p className={cl.greet}>привет,</p>
      <div className={cl.textCont}>
        <p className={cl.bigText}>
          это <strong>не</strong>
        </p>
        <p className={cl.bigText}>коммерческое</p>
        <p className={cl.bigText}>задание</p>
        <button className={cl.btn}>
          <div className={cl.arrowCont}>
            <div className={cl.arrow}></div>
            <span className={cl.text}>Что дальше?</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MySection1;
