import React from "react";
import cl from "./MySection3.module.css";
import MyBtn from "../../components/UI/MyBtn/MyBtn";
const MySection3 = () => {
  return (
    <section>
      <div className={cl.wtfIsWrongWithThisBG}></div>
      <div className={`${cl.bottle} ${cl.absolute}`}></div>
      <div className={`${cl.topSmBlBub} ${cl.absolute}`}></div>
      <div className={`${cl.topMidBlBub} ${cl.absolute}`}></div>
      <div className={`${cl.topLeftRedBub} ${cl.absolute}`}></div>
      <div className={`${cl.topRightRedBub} ${cl.absolute}`}></div>
      <div className={`${cl.leftBlBub} ${cl.absolute}`}></div>
      <div className={`${cl.rightBlBub} ${cl.absolute}`}></div>
      <div className={`${cl.leftRedBub} ${cl.absolute}`}></div>
      <div className={`${cl.botBlBub} ${cl.absolute}`}></div>
      <div className={`${cl.textCont} ${cl.absolute}`}>
        <p className={cl.text}>ключевое сообщение</p>
        <h1 className={cl.maintext}>
          brend<strong>xy</strong>
        </h1>
      </div>
      <div className={cl.leftSec}>
        <div className={cl.leftIcon}></div>
        <p className={cl.leftText}></p>
      </div>
      <div className={cl.rightSec}>
        <div className={cl.rightIcon}></div>
        <p className={cl.rightText}></p>
      </div>
      <MyBtn topPx={"1129"} leftPx={"1361"} text={"Подробнее"}>
        +
      </MyBtn>
    </section>
  );
};

export default MySection3;
