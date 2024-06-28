"use client"; // Next.js specific directive for client-side component

import { Context } from "@/components/Context/Context"; // Ensure this path is correct
import { app } from "@/firebase.init";
import { useContext, useState } from "react";

const RoleManagementForm = ({ onUpdateRole }) => {
  const { users } = useContext(Context); // Ensure `users` exists in `Context`
  const [selectedUser, setSelectedUser] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser && role) {
      onUpdateRole(selectedUser, role); // Ensure this function is passed as a prop
    } else {
      alert("Please select both a user and a role");
    }
  };
  console.log("status", app);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">Select User:</label>
      <select
        id="user"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">--Select User--</option>
      </select>

      <label htmlFor="role">Select Role:</label>
      <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">--Select Role--</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      <button type="submit">Update Role</button>
    </form>
  );
};

export default RoleManagementForm;
