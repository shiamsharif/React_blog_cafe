import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; // ES6

// eslint-disable-next-line react/prop-types
const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 bg-violet-100 p-4 rounded-xl m-2">
        <h1 className="text-4xl mb-3">Blogs: {blogs.length}</h1>
        {
            blogs.map(blog => <Blog 
                key={blog.id}
                blog={blog}
                handleAddToBookmark={handleAddToBookmark}
            ></Blog>)
        }
    </div>
  );
};

Blogs.PropTypes = {
  handleAddToBookmark: PropTypes.func
}

export default Blogs;
