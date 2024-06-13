"use client";
import { useState } from "react";

const Notice = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const notice = { title, details };

    try {
      const response = await fetch(
        "https://school-server-git-main-yousufislammes-projects.vercel.app/notices",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(notice),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit notice");
      }

      const data = await response.json();
      console.log("Notice submitted:", data);
    } catch (error) {
      console.error("Error submitting notice:", error);
    }
  };

  return (
    <div className="px-5 py-2">
      <h2 className="text-xl">Important Notice Board</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="m-1 border-2"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          className="m-1 w-[300px] border-2"
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <br />
        <button className="m-1 border-2 px-3 py-1" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Notice;
