"use client";
import Button from "@/components/Button";
import { Context } from "@/components/Context/Context";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const TeachersView = () => {
  const { setTeachers } = useContext(Context);
  const [teachersData, setTeachersData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/teachers")
      .then((res) => res.json())
      .then((data) => {
        setTeachersData(data);
        setTeachers(data); // Keep context and local state in sync
      })
      .catch((err) => {
        console.error("Error fetching teachers:", err);
      });
  }, [setTeachers]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/teachers/${_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete the teacher");
        }
        return res.json();
      })
      .then((dataDelete) => {
        if (dataDelete.acknowledged) {
          setTeachers((prev) => prev.filter((teacher) => teacher._id !== _id));

          setTeachersData((prev) =>
            prev.filter((teacher) => teacher._id !== _id),
          );
          toast("Teacher info deleting.");
        } else {
          console.warn("Delete response did not acknowledge:", dataDelete);
        }
      })
      .catch((err) => {
        console.error("Error deleting teacher:", err);
      });
  };

  return (
    <div>
      <h2>Teachers View page.</h2>
      <div className="w-[400px]">
        {teachersData.map((item) => (
          <div
            key={item._id}
            className="mx-10 my-3 w-full rounded-lg border-2 px-4 py-2 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold capitalize">
                {item.teacherName}
              </h2>
              <hr />
              <p className="text-md">{item.teacherBody}</p>
              <div className="">
                <Button
                  BtnTitle="Delete"
                  onClick={() => handleDelete(item._id)}
                  className="rounded-lg bg-red-500 px-3 py-1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersView;
