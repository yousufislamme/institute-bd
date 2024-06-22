"use client";

import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      "https://school-server-git-main-yousufislammes-projects.vercel.app/blog",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("post data is", data);
        setBlogs(data);
      });
  }, []);
  return (
    <div className="px-20 py-10">
      <h1>Blog page</h1>

      {blogs.map((post) => (
        <div>
          <h4 className="font-bold" key={post._id}>
            {post.blogTitle}
          </h4>
          <p key={post._id}>{post.blogBody}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
