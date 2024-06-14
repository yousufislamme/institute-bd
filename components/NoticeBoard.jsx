"use client";
import { useEffect, useState } from "react";

const NoticeBoard = () => {
  const [Notices, setNotices] = useState([]);
  const [currentNotice, setCurrentNotice] = useState(null); // Add state for current notice

  useEffect(() => {
    fetch(
      "https://school-server-git-main-yousufislammes-projects.vercel.app/notices",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNotices(data);

        // Set the current notice to the last item
        if (data.length > 0) {
          setCurrentNotice(data[data.length - 1]);
        }
      });
  }, []);
  return (
    <div className="mx-auto my-5 w-[700px] rounded-lg bg-yellow-200 p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Notice Board</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <div className="text-gray-700">
            <strong>Important:</strong> The school will be closed on Monday, May
            27, 2024 due to a holiday.
          </div>
        </li>
        <li className="flex items-center">
          <div className="text-gray-700">
            <strong>Reminder:</strong> Please submit your assignments on time.
          </div>
        </li>
      </ul>
      {currentNotice ? (
        <div>
          <p>{currentNotice.title}</p>
          <p>{currentNotice.details}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NoticeBoard;
