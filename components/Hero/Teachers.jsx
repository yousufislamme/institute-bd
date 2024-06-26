"use client";
import { useEffect, useState } from "react";
import HeadingContents from "../HeadingContents";
import TeacherCard from "./TeacherCard";

const Teachers = () => {
  const [teachersData, setTeachersData] = useState([]);
  useEffect(() => {
    fetch("https://school-server-phi.vercel.app/teachers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeachersData(data);
      });
  }, []);
  console.log(teachersData);
  return (
    <section className="block bg-green-50">
      <HeadingContents
        titleColor={`text-green-900`}
        descColor={`text-green-900`}
        solidColor="bg-green-600"
        titleText="Teachers"
        descText="Meet out the talented teachers of this years."
      />
      <div className="mt-5 grid grid-cols-2 gap-5 px-4 py-5 md:grid-cols-3 lg:grid-cols-4 lg:px-20">
        {teachersData.map((item) => (
          <TeacherCard
            teacherName={item.teacherName}
            teacherDesc={item.teacherBody}
          />
        ))}
      </div>
    </section>
  );
};

export default Teachers;
