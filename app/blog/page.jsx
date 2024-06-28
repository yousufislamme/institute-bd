"use client";

import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    fetch(
      "https://school-server-git-main-yousufislammes-projects.vercel.app/blog",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("post data is", data);
        setBlogs(data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center px-20 py-10">
        <Loading />
      </div>
    );
  }

  return (
    <div className="px-20 py-10">
      <h1>Blog page</h1>

      {blogs.map((post) => (
        <div key={post._id}>
          {/* Moved key to the outer div */}
          <h4 className="font-bold">{post.blogTitle}</h4>
          <p>{post.blogBody}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
