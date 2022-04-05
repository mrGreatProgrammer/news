import React, { useState } from "react";
import ShareBtns from "../ShareButtons/ShareBtns";
import "./CardNews.css";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  useRemoveFromFavoritesMutation,
  useAddToFavoritesMutation,
} from "../../store/reducers/blogs-slice";

const CardNews = ({ id, img, title, txt, favorites, currentUserId }) => {
  const [visible, setVisible] = useState(false);
  const [addToFavorites, { isLoading: addIsLoading }] =
    useAddToFavoritesMutation();
  const [removeFromFavorites, { isLoading: removeIsLoading }] =
    useRemoveFromFavoritesMutation();

  function onShow() {
    setVisible(true);
  }
  function onHide() {
    setVisible(false)
  }

  let data = { postId: id, userId: currentUserId, favorites: favorites };
  function handleAddToFavorites() {
    addToFavorites(data);
  }
  function handleRemoveFromFavorites() {
    removeFromFavorites(data);
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

        
        


        {favorites.includes(data.userId) ? (
          addIsLoading ?
          (<i
            className="fas fa-bookmark disabled"
          ></i>):
          (<i
            className="fas fa-bookmark"
            onClick={handleRemoveFromFavorites}
          ></i>)
          
        ) : (
          removeIsLoading ? (
            <i
              className="far fa-bookmark disabled"
            ></i>
          ) : (
          <i className="far fa-bookmark" onClick={handleAddToFavorites}></i>
          )
        )}

        {visible && <ShareBtns hideModal={onHide} />}
      </div>
      {/* </AnimationOnScroll> */}
    </div>
  );
};

export default CardNews;
