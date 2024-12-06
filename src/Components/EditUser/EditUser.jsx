import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../Utils/Providers/Context/UserContext";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const { user,login } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    imageUrl: "",
    email: "",
    password: "",
    mobileNumber: "",
    type: "",
    age: "",
    country: "",
    gender: "",
    medications: [{ name: "", dosage: "", frequency: "" }],
    allergies: [""],
    emergencyContact: { name: "", phone: "", relationship: "" },
    faintingInstructions: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        imageUrl: user.imageUrl || "",
        email: user.email || "",
        password: "",
        mobileNumber: user.mobileNumber || "",
        type: user.type || "",
        age: user.age || "",
        country: user.country || "",
        gender: user.gender || "",
        medications: user.medications || [{ name: "", dosage: "", frequency: "" }],
        allergies: user.allergies || [""],
        emergencyContact: user.emergencyContact || { name: "", phone: "", relationship: "" },
        faintingInstructions: user.faintingInstructions || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (index, field, value) => {
    const updatedArray = [...formData.medications];
    updatedArray[index][field] = value;
    setFormData({ ...formData, medications: updatedArray });
  };

  const handleAllergyChange = (index, value) => {
    const updatedAllergies = [...formData.allergies];
    updatedAllergies[index] = value;
    setFormData({ ...formData, allergies: updatedAllergies });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://q-life.vercel.app/api/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(formData)
        login(formData)
        setResponseMessage("User updated successfully!");
        setTimeout(() => navigate("/profile"), 2000); // Redirect to profile after 2 seconds
      } else {
        const errorData = await response.json();
        setResponseMessage(`Error: ${errorData.error || "Something went wrong"}`);
      }
    } catch (error) {
      setResponseMessage("Error: Network or server issue.");
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form className="edit-user" onSubmit={handleSubmit}>
        {/* Input fields */}
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} />
        <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleChange} />
        <input type="text" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
        <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} />
        
        {/* Medications and Allergies */}
        <h3>Medications</h3>
        {formData.medications.map((medication, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Medication Name"
              value={medication.name}
              onChange={(e) => handleArrayChange(index, "name", e.target.value)}
            />
            <input
              type="text"
              placeholder="Dosage"
              value={medication.dosage}
              onChange={(e) => handleArrayChange(index, "dosage", e.target.value)}
            />
            <input
              type="text"
              placeholder="Frequency"
              value={medication.frequency}
              onChange={(e) => handleArrayChange(index, "frequency", e.target.value)}
            />
          </div>
        ))}

        <h3>Allergies</h3>
        {formData.allergies.map((allergy, index) => (
          <input
            key={index}
            type="text"
            placeholder="Allergy"
            value={allergy}
            onChange={(e) => handleAllergyChange(index, e.target.value)}
          />
        ))}

        {/* Emergency Contact */}
        <h3>Emergency Contact</h3>
        <input
          type="text"
          name="emergencyContact.name"
          placeholder="Contact Name"
          value={formData.emergencyContact.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              emergencyContact: { ...formData.emergencyContact, name: e.target.value },
            })
          }
        />
        <input
          type="text"
          name="emergencyContact.phone"
          placeholder="Contact Phone"
          value={formData.emergencyContact.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              emergencyContact: { ...formData.emergencyContact, phone: e.target.value },
            })
          }
        />
        <input
          type="text"
          name="emergencyContact.relationship"
          placeholder="Relationship"
          value={formData.emergencyContact.relationship}
          onChange={(e) =>
            setFormData({
              ...formData,
              emergencyContact: { ...formData.emergencyContact, relationship: e.target.value },
            })
          }
        />

        <input
          type="text"
          name="faintingInstructions"
          placeholder="Fainting Instructions"
          value={formData.faintingInstructions}
          onChange={handleChange}
        />

        <button type="submit">Update User</button>
      </form>
      <p>{responseMessage}</p>
    </div>
  );
};

export default EditUser;
