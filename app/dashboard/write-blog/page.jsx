"use client";

import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
const WriteBlog = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [blogData, setBlogData] = useState({
    blogTitle: "",
    blogBody: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    console.log(blogData);
    try {
      const response = await fetch("http://localhost:5000/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Blog submitted successfully:", responseData);
        if (responseData.acknowledged) {
          toast({
            title: "New Blog Post is added",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }
      } else {
        console.error("Server responded with an error:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }

    if (isSubmitting) return; // Prevents multiple submissions

    setIsSubmitting(true);

    try {
      // Simulate an async operation (e.g., an API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted");
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="m-2 w-full">
      <h1 className="text-xl">Write a Blog</h1>
      <form onSubmit={handleBlogSubmit}>
        <div className="mt-10 flex w-full flex-col gap-2">
          <input
            className="w-full rounded-lg border-2 p-2 font-bold outline-none"
            type="text"
            value={blogData.blogTitle}
            placeholder="Title"
            name="blogTitle"
            onChange={handleInputChange}
          />
          <textarea
            name="blogBody"
            value={blogData.WriteBlog}
            onChange={handleInputChange}
            className="h-52 rounded-lg border-2 p-2 outline-none"
            placeholder="Blog Body"
          ></textarea>
        </div>
        <button
          className="my-1 flex items-center gap-2 rounded-lg bg-orange-300 px-4 py-2"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default WriteBlog;
