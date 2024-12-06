import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../../../Utils/Zod/schema.jsx";
import toast, { Toaster } from "react-hot-toast";
import { useGetUsers } from "../../../Utils/Hooks/GetUsersData";
import { UserContext } from "../../../Utils/Providers/Context/UserContext";

export default function Signup() {
  const navigate = useNavigate();
  const { data: users, isLoading, error } = useGetUsers();
  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Validate form data using Zod
      signUpSchema.parse(data);

      // Check if email already exists
      const emailCheckResponse = await fetch(
        `https://q-life.vercel.app/api/users/email/${data.email}`
      );

      if (!emailCheckResponse.ok) {
        const emailError = await emailCheckResponse.json();
        if (emailError.message === "User not found") {
          console.log("Email is available for registration.");
        } else {
          throw new Error(emailError.message || "Failed to check email.");
        }
      } else {
        const emailExists = await emailCheckResponse.json();
        if (emailExists) {
          toast.error("Email already exists. Please use another one.");
          return; // Stop execution if the email already exists
        }
      }

      // Proceed with sign-up
      const response = await fetch("https://q-life.vercel.app/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const newUser = await response.json();
        toast.success("Sign up successful!");
        login(newUser);
        navigate("/");
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to sign up. Please try again.");
      }
    } catch (error) {
      if (error.errors) {
        error.errors.forEach((err) => toast.error(err.message));
      } else {
        console.error("Error during signup:", error.message || error);
        toast.error(error.message || "An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <div className="form-container">
  <h2>Sign Up</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <input type="text" name="firstName" placeholder="First Name..." required />
    </div>
    <div className="form-group">
      <input type="text" name="lastName" placeholder="Last Name..." required />
    </div>
    <div className="form-group">
      <input type="email" name="email" placeholder="Email..." required />
    </div>
    <div className="form-group">
      <input type="password" name="password" placeholder="Password..." required />
    </div>
    <div className="form-group">
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password..."
        required
      />
    </div>
    <div className="form-group">
      <select name="type" id="type" required>
        <option value="">Select...</option>
        <option value="Patient">Patient</option>
        <option value="Doctor">Doctor</option>
      </select>
    </div>
    <div className="form-group">
      <select name="gender" id="gender" required>
        <option value="">Select...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div className="form-group">
      <input
        type="text"
        name="mobileNumber"
        placeholder="Mobile Number..."
        required
      />
    </div>
    <div className="form-group">
      <input type="number" name="age" placeholder="Age..." required />
    </div>
    <div className="form-group">
      <input type="text" name="country" placeholder="Country..." required />
    </div>
    <div className="form-group">
      <input type="text" name="imageUrl" placeholder="Your Image URL..." />
    </div>
    <button type="submit">Sign Up</button>
  </form>
  <Toaster />
</div>
    </>
  );
}
