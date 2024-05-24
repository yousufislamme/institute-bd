"use client";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Result = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => { 
        setStudents(data);
        setLoading(false);
        console.log("show students data::: ", data);
      })
      .catch(error => {
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
    const studentEmailLower = student.email?.toLowerCase() || '';
    const searchQueryLower = searchQuery.toLowerCase();

    return studentNameLower.includes(searchQueryLower) || studentEmailLower.includes(searchQueryLower);
  });

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(dataDelete => {
        setStudents((prev) => prev.filter((student) => student._id !== _id));
        console.log("Deleted data:", dataDelete);
        if (dataDelete.acknowledged) {
          alert("delete successful");
        }
      })
      .catch(error => {
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
  };

  fetch(`http://localhost:5000/users/${currentStudent._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedStudent),
  })
    .then(res => res.json())
    .then(data => {
      setStudents((prev) =>
        prev.map((student) =>
          student._id === currentStudent._id ? { ...student, ...updatedStudent } : student
        )
      );
      setIsEditing(false);
      setCurrentStudent(null);
      console.log("Updated data:", data);
    })
    .catch(error => {
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
          className="border px-5 py-2 m-3 w-[500px] rounded-lg outline-none"
        />
      </div>
      <div>
        {
          loading ? (
            <p>Loading....</p>
          ) : (
            filteredStudents.map((item) => (
              <div key={item._id} className="group border-2 flex justify-between items-center px-5 rounded-lg m-3">
                <div>
                  <h2 className="py-2">{item.studentName}</h2>
                  <p>{item.email}</p>
                </div>
                <div className="hidden group-hover:block transition ease-in-out">
                  <div className="flex items-center gap-1">
                    <span className="bg-green-200 p-2 rounded-full cursor-pointer">
                      <CiEdit onClick={() => handleEdit(item)} className="text-green-700" />
                    </span>
                    <span className="p-2 rounded-full bg-red-200 cursor-pointer">
                      <MdDeleteOutline onClick={() => handleDelete(item._id)} className="text-red-700" />
                    </span>
                  </div>
                </div>
              </div>
            ))
          )
        }
      </div>

      {isEditing && currentStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg">
            <h2>Edit Student</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                  <input
                    type="text"
                    name="studentName"
                    defaultValue={currentStudent.studentName}
                    className="mt-1 block w-full border px-3 py-2 rounded-lg shadow-sm"
                    required
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    defaultValue={currentStudent.email}
                    className="mt-1 block w-full border px-3 py-2 rounded-lg shadow-sm"
                    required
                  />
                </label>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
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
}

export default Result;
