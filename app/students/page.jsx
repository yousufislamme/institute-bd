"use client"

import Button from "@/components/Button";
import { Salsa } from "next/font/google";
import { useState } from "react";
const salsa = Salsa({ weight: '400', subsets: ['latin'] })


const Students = () => {
   
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can do something with the form data, like sending it to a server
    console.table(formData);
  };
  return (
    <section className="container mx-auto px-10 ">
      <h1>Student page.</h1>
      <div className="flex w-full justify-center ">
        <h2 className={`${salsa.className} text-3xl`}>Students Information<span className="text-purple-800">.</span> </h2> 
      </div>

        {/* user er sob input fields eikhane */}
      
      <div>
       <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
              value={formData.name} 
              placeholder="Full Name"
              className="bg-gray-300 text-black text-xl px-3 py-2 outline-none rounded-md" 
          onChange={handleInputChange} 
            />
          
      </label>
      <br />
      <label>
        Email:
        <input 
          type="email" 
          name="email" 
              placeholder="Enter Email"
          value={formData.email} 
              onChange={handleInputChange} 
              className="bg-gray-300 mt-2 text-black text-xl px-3 py-2 outline-none rounded-md" 
              
        />
      </label>
      <br />
      <label>
        Message:
        <textarea 
          name="message" 
              value={formData.message} 
              placeholder="Message"
              onChange={handleInputChange} 
              className="bg-gray-300 mt-2 text-black text-xl px-3 py-2 outline-none rounded-md" 
              
        />
      </label>
      <br />
                <Button BtnTitle="submit" type="submit" />

    </form>
      </div>
    </section>
  )
}

export default Students