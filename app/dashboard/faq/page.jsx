"use client";
import Link from "next/link";
import { useState } from "react";

const FAQ_Dashboard = () => {
  const [faqTitle, setFaqTitle] = useState("");
  const [faqBody, setFaqBody] = useState("");
  const [faqColor, setFaqColor] = useState(""); // Initially empty

  const colors = [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];

  const handleFaqSubmit = async (e) => {
    e.preventDefault();
    const selectedColor =
      faqColor || colors[Math.floor(Math.random() * colors.length)];
    const faqData = { faqTitle, faqBody, color: selectedColor }; // Correctly set color
    console.log(faqData);
    const response = await fetch(
      "https://school-server-git-main-yousufislammes-projects.vercel.app/faq",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(faqData),
      },
    );
    if (response.ok) {
      // Handle success
      console.log("FAQ submitted successfully");
    } else {
      // Handle error
      console.error("Error submitting FAQ");
    }
  };

  return (
    <>
      <div className="px-3">
        <h1 className="text-lg font-semibold">FAQ Dashboard</h1>
        <Link
          className="text-blue-500 underline"
          href="/dashboard/faq/faq-view"
        >
          Edit and View
        </Link>
        <div>
          <form onSubmit={handleFaqSubmit}>
            <div className="mt-10 flex w-[600px] flex-col gap-2">
              <input
                className="w-full rounded-lg border-2 p-2 font-bold outline-none"
                placeholder="Add FAQ title"
                value={faqTitle} // Bind state
                onChange={(e) => setFaqTitle(e.target.value)}
              />
              <textarea
                className="h-52 rounded-lg border-2 p-2 outline-none"
                placeholder="FAQ Body"
                value={faqBody} // Bind state
                onChange={(e) => setFaqBody(e.target.value)}
              ></textarea>
              <select
                value={faqColor} // Bind state
                onChange={(e) => setFaqColor(e.target.value)}
                className="inline-block w-[100px] rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select Color</option>{" "}
                {/* Add default empty option */}
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="mt-2 rounded-lg bg-green-500 px-5 py-2 text-white"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FAQ_Dashboard;
