import React from "react";

export default function UserList({ users, onselect }) {
  return (
    <select
      onChange={(e) => onselect(Number(e.target.value))}
      className="border p-2 rounded"
    >
      <option value="">Select User</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}
