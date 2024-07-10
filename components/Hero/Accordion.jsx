"use client";
import { useEffect, useState } from "react";

export default function ColorFullAccordion() {
  const [isOpen, setIsOpen] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://school-server-git-main-yousufislammes-projects.vercel.app/faq",
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <div className="space-y-4 p-2 md:p-6">
      {data?.map((item, idx) => (
        <div key={idx}>
          {/* header / Title */}
          <div
            onClick={() => handleToggle(idx)}
            className={`cursor-pointer border-l-[3px] px-4 py-6 md:px-8 ${item.color ? `border-${item.color}-500 bg-${item.color}-200` : "border-gray-500 bg-gray-200"}`}
          >
            <div className="flex items-center">
              <span>
                <svg
                  className={`mr-4 shrink-0 fill-${item.color || "gray"}-900`}
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${isOpen === idx ? "rotate-180" : ""}`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx ? "rotate-180" : ""}`}
                  />
                </svg>
              </span>
              <h4 className={`text-xl text-${item.color || "gray"}-900`}>
                {item.faqTitle}
              </h4>
            </div>
          </div>
          {/* body / content */}
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">
              <div
                className={`border-l-[3px] pb-6 pl-14 pr-4 text-sm md:pl-16 border-${item.color || "gray"}-500 bg-${item.color || "gray"}-200 text-${item.color || "gray"}-900`}
              >
                {item.faqBody}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
