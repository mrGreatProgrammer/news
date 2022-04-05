// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchAllBlogsQuery } from "../../store/reducers/blogs-slice";
import { fetchBlogs } from "../../store/reducers/bogs-actions";
import CardNews from "../CardNews/CardNews";
import Loader from "../Loader/Loader";
import ErrMsg from "../ui/ErrMsg/ErrMsg";
import ScrollerToTop from "../ui/ScrollerToTop/ScrollerToTop";
import "./News.css";

const News = () => {
  const [limit, setLimit] = useState(6);
  const currentUser = useSelector(state=>state.user.currentUser)
  const {
    data: blogs,
    error,
    isLoading,
    refetch,
  } = useFetchAllBlogsQuery(limit);

  useEffect(() => {}, [limit]);

  let b = limit;
  function handleScroll(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      b = b * 2;
      setLimit(b);
    }
  }

  return (
    <div className="news" onScroll={handleScroll}>
      {error && <ErrMsg txt="Something went wrong" />}
      {isLoading && <Loader />}
      {blogs &&
        blogs.map((n) => (
          <CardNews
            currentUserId={currentUser.id}
            key={n.id}
            id={n.id}
            img={n.img}
            title={n.title}
            txt={n.content}
            favorites={n.favorites}
          />
        ))}

      <ScrollerToTop />
    </div>
  );
};

export default News;
