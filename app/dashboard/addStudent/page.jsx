"use client";
import React, { useState } from "react";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  console.log(name);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    // try {
    //   const response = await fetch("/api/addUser", {
    //     method: "POST",
    //     body: formData,
    //   });
    //   // Handle response
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <div className="p-10 bg-slate-100">
      <div>
        {/* form  */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
