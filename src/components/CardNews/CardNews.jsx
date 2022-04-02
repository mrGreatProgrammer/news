import React, { useState } from "react";
import ShareBtns from "../ShareButtons/ShareBtns";
import "./CardNews.css";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const CardNews = ({ img, title, txt, saved }) => {
  const [visible, setVisible] = useState(false);

  function onShow() {
    setVisible(true);
  }

  return (
    <div className="card__news">
      {/* <AnimationOnScroll initiallyVisible={false} animateIn="animate__fadeIn"> */}
        <div className="card__news--image_block animate__flash">
          <img src={img} alt="" className="card__news--img" />
        </div>
        <div className="card__news--content_block">
          <h3 className="card__news--title"> {title} </h3>
          <div className="card__news--txt">{txt}</div>
        </div>
        <div className="card__news--btns">
          <div className="card__news--btns--logo"></div>
          <i className="fas fa-share" onClick={onShow}></i>
          <i className="far fa-bookmark"></i>
          {visible && <ShareBtns />}
        </div>
      {/* </AnimationOnScroll> */}
    </div>
  );
};

export default CardNews;
