import { useEffect, useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingtime, setReadingtime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handelMakeAsRead = time => {
    const newReadingTime = readingtime + time;
    setReadingtime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
          <Blogs 
            handleAddToBookmark={handleAddToBookmark}
            handelMakeAsRead={handelMakeAsRead}
          ></Blogs>
          <Bookmarks 
            bookmarks={bookmarks}
            readingtime={readingtime}
          ></Bookmarks>
      </div>
    </>
  );
}

export default App;
