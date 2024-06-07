"use client";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    fetch(
      "https://school-server-git-main-yousufislammes-projects.vercel.app/users",
    )
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
        console.log("show students data::: ", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredStudents = students.filter((student) => {
    if (!student.studentName) {
      return false;
    }

    const studentNameLower = student.studentName.toLowerCase();
    const studentEmailLower = student.email?.toLowerCase() || "";
    const searchQueryLower = searchQuery.toLowerCase();

    return (
      studentNameLower.includes(searchQueryLower) ||
      studentEmailLower.includes(searchQueryLower)
    );
  });

  const handleDelete = (_id) => {
    fetch(
      `https://school-server-git-main-yousufislammes-projects.vercel.app/users/${_id}`,
      {
        method: "DELETE",
      },
    )
      .then((res) => res.json())
      .then((dataDelete) => {
        setStudents((prev) => prev.filter((student) => student._id !== _id));
        console.log("Deleted data:", dataDelete);
        if (dataDelete.acknowledged) {
          alert("delete successful");
        }
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const handleEdit = (student) => {
    setCurrentStudent(student);
    setIsEditing(true);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const updatedStudent = {
      studentName: event.target.studentName.value,
      email: event.target.email.value,
      class: event.target.class.value,
      age: event.target.age.value,
      fatherName: event.target.fatherName.value,
      matherName: event.target.matherName.value,
      religion: event.target.religion.value,
      sex: event.target.sex.value,
      nationality: event.target.nationality.value,
      contactNumber: event.target.contactNumber.value,
      address: event.target.address.value,
    };

    fetch(
      `https://school-server-git-main-yousufislammes-projects.vercel.app/users/${currentStudent._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStudent),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setStudents((prev) =>
          prev.map((student) =>
            student._id === currentStudent._id
              ? { ...student, ...updatedStudent }
              : student,
          ),
        );
        setIsEditing(false);
        setCurrentStudent(null);
        console.log("Updated data:", data);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <div>
      <h2>Students information show...</h2>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={handleSearch}
          className="m-3 w-[500px] rounded-lg border px-5 py-2 outline-none"
        />
      </div>
      <div>
        {loading ? (
          <div className="flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          filteredStudents.map((item) => (
            <div
              key={item._id}
              className="group m-3 flex items-center justify-between rounded-lg border-2 px-5"
            >
              <div>
                <h2 className="py-2">{item.studentName}</h2>
                <p>{item.email}</p>
                <p>{item.age}</p>
                <p>{item.class}</p>
                <p>{item.fatherName}</p>
                <p>{item.matherName}</p>
                <p>{item.religion}</p>
                <p>{item.sex}</p>
                <p>{item.nationality}</p>
                <p>{item.contactNumber}</p>
                <p>{item.address}</p>
                <span className="text-xs text-orange-400">{item.dateTime}</span>
              </div>
              <div className="hidden transition ease-in-out group-hover:block">
                <div className="flex items-center gap-1">
                  <span className="cursor-pointer rounded-full bg-green-200 p-2">
                    <CiEdit
                      onClick={() => handleEdit(item)}
                      className="text-green-700"
                    />
                  </span>
                  <span className="cursor-pointer rounded-full bg-red-200 p-2">
                    <MdDeleteOutline
                      onClick={() => handleDelete(item._id)}
                      className="text-red-700"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {isEditing && currentStudent && (
        <div className="fixed inset-0 flex items-center justify-center overflow-scroll bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-5">
            <h2>Edit Student info</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="grid grid-cols-2 gap-2">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                  <input
                    type="text"
                    name="studentName"
                    defaultValue={currentStudent.studentName}
                    className="mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm"
                    required
                  />
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    defaultValue={currentStudent.email}
                    className="mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm"
                    required
                  />
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Age
                  <input
                    type="age"
                    name="age"
                    defaultValue={currentStudent.age}
                    className="mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Class
                  <input
                    type="class"
                    name="class"
                    defaultValue={currentStudent.class}
                    className="mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Father's Name
                  <input
                    type="fatherName"
                    name="fatherName"
                    defaultValue={currentStudent.fatherName}
                    className="mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Mather's Name
                  <input
                    type="matherName"
                    name="matherName"
                    defaultValue={currentStudent.matherName}
                    className="mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Religion
                  <input
                    type="religion"
                    name="religion"
                    defaultValue={currentStudent.religion}
                    className="mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Sex
                  <input
                    type="sex"
                    name="sex"
                    defaultValue={currentStudent.sex}
                    className="mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Nationality
                  <input
                    type="nationality"
                    name="nationality"
                    defaultValue={currentStudent.nationality}
                    className="mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Number
                  <input
                    type="contactNumber"
                    name="contactNumber"
                    defaultValue={currentStudent.contactNumber}
                    className="mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                  <input
                    type="address"
                    name="address"
                    defaultValue={currentStudent.address}
                    className="mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm"
                    required
                  />
                </label>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="rounded-lg bg-gray-300 px-4 py-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-500 px-4 py-2 text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsList;
