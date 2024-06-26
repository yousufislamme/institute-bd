"use client";
import Image from "next/image";

const TeacherCard = ({ teacherName, teacherDesc, teacherPic }) => {
  return (
    <>
      <div className="h-[300px] rounded-sm border-2">
        <div className="flex h-[200px] items-center justify-center bg-slate-600 object-cover">
          <img
            // width={200}
            // height={200}
            src="https://images.pexels.com/photos/63238/pexels-photo-63238.jpeg"
          />
        </div>
        <div className="px-2 py-1">
          <h2 className="text-lg font-semibold">{teacherName}</h2>
          <hr />
          <p className="text-sm">{teacherDesc}</p>
        </div>
      </div>
    </>
  );
};

export default TeacherCard;
