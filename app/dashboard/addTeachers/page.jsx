"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const Teachers = () => {
  const [teacherData, setTeacherData] = useState({
    teacherName: "",
    teacherBody: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({
      ...teacherData,
      [name]: value,
    });
  };

  const handleTeacherAdd = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://school-server-phi.vercel.app/teachers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teacherData),
        },
      );

      if (response.ok) {
        toast.success("Teacher is added.");
        // Clear input fields
        setTeacherData({
          teacherName: "",
          teacherBody: "",
        });
      } else {
        toast.error("Failed to add teacher.");
      }
    } catch (error) {
      console.error("Error adding teacher:", error);
      toast.error("An error occurred while adding the teacher.");
    }
  };

  return (
    <div className="p-5">
      <div className="flex gap-3">
        <h1>Teachers</h1>
        <Link
          className="text-blue-700 underline"
          href="/dashboard/addTeachers/teachersView"
        >
          View
        </Link>
      </div>
      <form onSubmit={handleTeacherAdd}>
        <div className="mt-10 flex w-[600px] flex-col gap-2">
          <input
            onChange={handleInputChange}
            className="w-full rounded-lg border-2 p-2 font-bold outline-none"
            placeholder="Title"
            name="teacherName"
            value={teacherData.teacherName}
          />
          <textarea
            onChange={handleInputChange}
            name="teacherBody"
            value={teacherData.teacherBody}
            className="h-52 rounded-lg border-2 p-2 outline-none"
            placeholder="Blog Body"
          ></textarea>
        </div>
        <button
          className="mt-2 rounded-lg bg-green-500 px-5 py-2"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Teachers;
