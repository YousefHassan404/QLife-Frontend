import React, { useState, useContext } from "react";
import { UserContext } from "../../../Utils/Providers/Context/UserContext";
import { useNavigate } from "react-router-dom";

const DeleteUser = () => {
  const { user ,logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [responseMessage, setResponseMessage] = useState("");

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://q-life.vercel.app/api/users/${user._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        logout()
        setResponseMessage("User deleted successfully!");
      } else {
        const errorData = await response.json();
        setResponseMessage(`Error: ${errorData.error || "Something went wrong"}`);
      }
    } catch (error) {
      setResponseMessage("Error: Network or server issue.");
    }
  };

  return (
    <div className="delete-user-container">
      <h2>Delete User</h2>
      <button onClick={handleDelete}>Delete User</button>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
};

export default DeleteUser;
