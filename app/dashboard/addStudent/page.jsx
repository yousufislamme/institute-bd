"use client";

import Button from "@/components/Button";
import { Salsa } from "next/font/google";
import { useState } from "react";
import { toast } from "sonner";
const salsa = Salsa({ weight: "400", subsets: ["latin"] });

const AddStudent = () => {
  const [dateTime, setDateTime] = useState(null);
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    message: "",
    age: "",
    picUpload: "",
    class: "",
    fatherName: "",
    matherName: "",
    religion: "",
    sex: "",
    nationality: "",
    contactNumber: "",
    address: "",
    dateTime: "",
  });

  // Event handler to update form data when input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDateTime = new Date();
    setDateTime(currentDateTime.toLocaleString());

    const updatedFormData = {
      ...formData,
      dateTime: currentDateTime.toLocaleString(),
    };

    try {
      const response = await fetch(
        "https://school-server-git-main-yousufislammes-projects.vercel.app/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.acknowledged) {
        toast("New student is added.");
      } else {
        toast("we can't added new student.");
      }

      console.log("Response data:", data);
    } catch (error) {
      console.error("Error:", error);
    }

    console.table(updatedFormData);
    console.log(updatedFormData);
  };
  async function create() {
    console.log("create");
  }
  return (
    <section className="container mx-auto mb-52 px-10">
      <h1>Student page.</h1>
      <div className="flex w-full justify-center">
        <h2 className={`${salsa.className} text-3xl`}>
          AddStudent Information <span className="text-purple-800">.</span>
        </h2>
      </div>

      {/* user input fields */}
      <div>
        <form action={create} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <label>
              Student's Name:
              <br />
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                placeholder="Full Name"
                className="rounded-md bg-gray-300 px-3 py-2 text-xl text-black outline-none"
                onChange={handleInputChange}
              />
            </label>

            <label>
              Email:
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 rounded-md bg-gray-300 px-3 py-2 text-xl text-black outline-none"
              />
            </label>

            <label>
              Age:
              <br />
              <input
                type="text"
                name="age"
                placeholder="Enter Age"
                value={formData.age}
                onChange={handleInputChange}
                className="mt-2 rounded-md bg-gray-300 px-3 py-2 text-xl text-black outline-none"
              />
            </label>
            <label>
              Face Photo: <br />
              <input type="file" />
              {/* <input
                name="picUpload"
                value={formData.picUpload}
                onChange={handleInputChange}
                type="file"
                alt="photo"
              /> */}
            </label>
            <label className="justify-left flex items-center">
              Religion:
              <select
                onChange={handleInputChange}
                name="religion"
                value={formData.religion}
              >
                <option value="Option">Option</option>
                <option value="Islam">Islam</option>
                <option value="Hindu">Hindu</option>
                <option value="Christian">Christian</option>
              </select>
            </label>

            <label>
              Sex:
              <select
                name="sex"
                onChange={handleInputChange}
                value={formData.sex}
              >
                <option value="option">Option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label>
              Classes:
              <br />
              <select
                onChange={handleInputChange}
                name="class"
                value={formData.class}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>

            <label>
              Father's Name:
              <br />
              <input
                type="text"
                name="fatherName"
                placeholder="Father's Name"
                value={formData.fatherName}
                onChange={handleInputChange}
                className="mt-2 rounded-md bg-gray-300 px-3 py-2 text-xl text-black outline-none"
              />
            </label>

            <label>
              Mother's Name:
              <br />
              <input
                type="text"
                name="matherName"
                placeholder="Mother's Name"
                value={formData.matherName}
                onChange={handleInputChange}
                className="mt-2 rounded-md bg-gray-300 px-3 py-2 text-xl text-black outline-none"
              />
            </label>

            <label>
              Contact Number:
              <br />
              <input
                className="mt-2 rounded-md bg-gray-300 px-3 py-2 text-xl text-black outline-none"
                type="number"
                name="contactNumber"
                onChange={handleInputChange}
                value={formData.contactNumber}
              />
            </label>

            <label>
              Address:
              <br />
              <input
                className="mt-2 rounded-md bg-gray-300 px-3 py-2 text-xl text-black outline-none"
                type="text"
                name="address"
                onChange={handleInputChange}
                value={formData.address}
              />
            </label>

            <label>
              Nationality:
              <br />
              <input
                type="text"
                placeholder="Nationality"
                className="mt-2 rounded-md bg-gray-300 px-3 py-2 text-xl text-black outline-none"
                value={formData.nationality}
                onChange={handleInputChange}
                name="nationality"
              />
            </label>

            <label>
              Message:
              <br />
              <textarea
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleInputChange}
                className="mt-2 rounded-md bg-gray-300 px-3 py-2 text-xl text-black outline-none"
              />
            </label>
          </div>
          <Button
            BtnTitle="submit"
            type="submit"
            className="rounded-lg bg-orange-500 px-5 py-2"
          />
        </form>
      </div>
    </section>
  );
};

export default AddStudent;
