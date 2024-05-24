"use client"

import Button from "@/components/Button";
import { Salsa } from "next/font/google";
import { useState } from "react";

const salsa = Salsa({ weight: '400', subsets: ['latin'] })


const Students = () => {
   
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    message: '',
    age: '',
    class: '',
    fatherName: '',
    matherName: '',
    religion: '',
    sex: '',
    nationality: '',
    contactNumber: '',
    address: '',
  });

  // Event handler to update form data when input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Event handler to handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  
 try {
   const response = await fetch('https://school-server-git-main-yousufislammes-projects.vercel.app/users', {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(formData)
   },
   );
         if (!response.ok) {
        throw new Error("Network response was not ok");
      }

   const data = await response.json();
     if (data.acknowledged) {
    alert("Student added.");
  } else {
    alert("Something error.");
    
  }
      console.log("my data:::", data);
    } catch (error) {
      console.error("Error:", error);
  }

  console.table(formData);
  console.log(formData);

 } 

    // Optionally reset the form or update state here
    // setFormData({}); // Reset form data if necessary



  return (
    <section className="container mx-auto px-10 mb-52">
      <h1>Student page.</h1>
      <div className="flex w-full justify-center ">
        <h2 className={`${salsa.className} text-3xl`}>Students Information<span className="text-purple-800">.</span> </h2> 
      </div>

        {/* user er sob input fields eikhane */}
      
      <div>
       <form className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4" onSubmit={handleSubmit}>
      <label>
        Student's Name: 
        <br />
        <input 
          type="text" 
          name="studentName" 
              value={formData.studentName} 
              placeholder="Full Name"
              className="bg-gray-300 text-black text-xl px-3 py-2 outline-none rounded-md" 
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
              className="bg-gray-300 mt-2 text-black text-xl px-3 py-2 outline-none rounded-md" 
              
        />
          </label> 
          <label> Age:  
            <br />
            <input type="text" name="age" placeholder="Enter Age" value={formData.age}
            onChange={handleInputChange}  className="bg-gray-300 mt-2 text-black text-xl px-3 py-2 outline-none rounded-md" />
          </label> 
          <label className="flex items-center justify-center"> Religion 
              <br />
            <select onChange={handleInputChange} name="religion">
              <option value="Option">Option</option>
              <option value="Islam">Islam</option>
              <option value="Hindu">Hindu</option>
              <option value="Christian">Christian </option>
          </select>
          </label>
          
          <label>
            sex: 
            <br />
            <select name="sex" onChange={handleInputChange} >
              <option value="option">Option</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label> 
          <label>
            Classes: 
            <br />
            <select onChange={handleInputChange} name="class">
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
          <label> Father's Name: <br />
            <input type="text" name="fatherName" placeholder="Father's Name" value={formData.fatherName}
            
            onChange={handleInputChange}  className="bg-gray-300 mt-2 text-black text-xl px-3 py-2 outline-none rounded-md" />
          </label>
      
          <label> Mather's Name: <br />
            <input type="text" name="matherName" placeholder="Mather's Name" value={formData.matherName}
           
            onChange={handleInputChange}  className="bg-gray-300 mt-2 text-black text-xl px-3 py-2 outline-none rounded-md" />
          </label> 
          <label>
            Contact Number:  
            <br />
              <input className="bg-gray-300 mt-2 text-black text-xl px-3 py-2 outline-none rounded-md" type="number" name="contactNumber" onChange={handleInputChange} value={formData.contactNumber} />
          </label> 
          <label>
            Address:  
            <br />
              <input className="bg-gray-300 mt-2 text-black text-xl px-3 py-2 outline-none rounded-md" type="text" name="address" onChange={handleInputChange} value={formData.address} />
          </label> 
          <label>Nationality: 
          <input type="text" placeholder="Nationality" className="bg-gray-300 mt-2 text-black text-xl px-3 py-2 outline-none rounded-md" value={formData.nationality} onChange={handleInputChange} name="nationality" />
          <br />
          </label>
      
      <label>
        Message:
        <br />
        <textarea 
          name="message" 
              value={formData.message} 
              placeholder="Message"
              onChange={handleInputChange} 
              className="bg-gray-300 mt-2 text-black text-xl px-3 py-2 outline-none rounded-md" 
              
        />
      </label>
      
        <Button BtnTitle="submit" type="submit" className="bg-orange-500 px-5 py-2 rounded-lg" />

    </form>
      </div>
    </section>
  )
}

export default Students