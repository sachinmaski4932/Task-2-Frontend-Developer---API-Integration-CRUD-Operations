import React, { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "./api.js";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: "", email: "" });

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleAddUser = async () => {
    const addedUser = await addUser(newUser);
    setUsers([...users, addedUser]);
  };

  const handleUpdateUser = async (id) => {
    const updatedUser = await updateUser(id, { username: "Updated User" });
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>User Management</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
            <button onClick={() => handleUpdateUser(user.id)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;