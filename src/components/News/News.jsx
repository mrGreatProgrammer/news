import axios from "axios";
import React, { useEffect, useState } from "react";
import CardNews from "../CardNews/CardNews";
import Loader from "../Loader/Loader";
import ScrollerToTop from "../ui/ScrollerToTop/ScrollerToTop";
import "./News.css";

const News = () => {
  const [blogs, setBlogs] = useState([]);
  let res = undefined;

  const getBlogs = async () => {
    res = await axios.get("https://6246c1b4e3450d61b00249a5.mockapi.io/blogs");
    setBlogs(res.data);
    console.log(res.data);
    return res;
  };

  useEffect(() => {
    getBlogs();
  }, [res]);

  return (
    <div className="news">
      {!blogs && <Loader />}
      {blogs.map((n) => (
        <CardNews key={n.id} img={n.img} title={n.title} txt={n.content} />
      ))}

      <ScrollerToTop />
    </div>
  );
};

export default News;
