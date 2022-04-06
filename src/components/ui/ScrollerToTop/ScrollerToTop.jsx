import React from "react";
import "./ScrollerToTop.css";

function ScrollerToTop({toTopUpElem, setToTopEl, goToTop}) {
  // let [toTopUpEl, setToTopEl] = useState("isShowBtn_hide");

  // window.onscroll = () => {
  //   if (window.scrollY > 700) {
  //     setToTopEl("isShowBtn");
  //   } else if (window.scrollY < 700) {
  //     setToTopEl("isShowBtn_hide");
  //   }
  // };

  // function goToTop() {
  //   window.scrollTo(0, 0);
  // }

  return (
    <div id="to-top-up" className={toTopUpElem} onClick={goToTop}>
      <i className="far fa-arrow-alt-circle-up" style={{fontSize: '48px'}} ></i>
    </div>
  );
}

export default ScrollerToTop;
