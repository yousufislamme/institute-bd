"use client";
import { useEffect, useState } from "react";

const TeachersView = () => {
  const [teachersData, setTeachersData] = useState([]);
  useEffect(() => {
    fetch("https://school-server-phi.vercel.app/teachers")
      .then((res) => res.json())
      .then((data) => {
        setTeachersData(data);
      });
  }, []);
  console.log(teachersData);
  return (
    <div>
      <h2>Teachers View page.</h2>
      <div>
        {teachersData.map((item) => (
          <>
            <h2 className="text-lg">{item.teacherName}</h2>
            <p>{item.teacherBody}</p>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default TeachersView;
