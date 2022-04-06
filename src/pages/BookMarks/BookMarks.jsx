import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardNews from "../../components/CardNews/CardNews";
import Loader from "../../components/Loader/Loader";
import ErrMsg from "../../components/ui/ErrMsg/ErrMsg";
import { useBookmarksQuery } from "../../store/reducers/blogs-slice";
import "./BookMarks.css";

const BookMarks = () => {
  const [books, setBooks] = useState(null);
  const userId = useSelector((state) => state.user.currentUser.id);
  const { data, error, isLoading, refetch } = useBookmarksQuery({ id: userId });

  useEffect(() => {
    setBooks(data);
  }, [data]);

  return (
    <div className="bookmarks">
      {error && <ErrMsg txt="Something went wrong" />}
      {isLoading && <Loader />}
      {!books ? (
        <h3 className="no_books">No Bookmarks</h3>
      ) : (
        <>
          {books.map((b) => (
            <CardNews
              currentUserId={userId}
              key={b.id}
              id={b.id}
              img={b.img}
              title={b.title}
              txt={b.content}
              favorites={b.favorites}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default BookMarks;
