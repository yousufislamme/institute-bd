"use client";
import { useEffect, useState } from "react";

const TeacherCard = () => {
  const [teachersData, setTeachersData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/teachers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeachersData(data);
      });
  }, []);
  return (
    <>
      <div className="h-[300px] rounded-sm border-2">
        <div className="h-[200px] bg-slate-600"></div>
      </div>
    </>
  );
};

export default TeacherCard;
