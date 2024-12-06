import { QRCodeCanvas } from "qrcode.react"; // Correct import
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../Utils/Providers/Context/UserContext";

export default function Profile({ data }) {
    const { user : currentUser} = useContext(UserContext);
    console.log(currentUser)
    // Extract user data from props
    const user = data;
    const url = `http://192.168.1.6:5173/profile?id=${user._id}`;

    return (
        <div className="profile-container">
            {/* Image Section */}
            <div className="image-section">
                <img
                    src={user.imageUrl || "/default-profile.png"}
                    alt="Profile"
                    className="image"
                />
                {<QRCodeCanvas value={url} size={256} />}
            </div>

            {/* Information Section */}
            <div className="info-section">
                <h1>{`${user.firstName} ${user.lastName}`}</h1>
                <p>Age: {user.age || "Not provided"}</p>
                <p>Gender: {user.gender || "Not provided"}</p>
                <p>Country: {user.country || "Not provided"}</p>
                <p>Email: {user.email || "Not provided"}</p>
                <p>Mobile: {user.mobileNumber || "Not provided"}</p>

                {/* Medical Information */}
                <div className="medical-info">
                    <h2>Medical Details :</h2>

                    <h3>Medications:</h3>
                    {user.medications && user.medications.length > 0 ? (
                        <ul>
                            {user.medications.map((medication) => (
                                <li key={medication._id}>
                                    {`${medication.name} - ${medication.dosage} (${medication.frequency})`}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No medications provided.</p>
                    )}

                    <h3>Allergies:</h3>
                    {user.allergies && user.allergies.length > 0 ? (
                        <ul>
                            {user.allergies.map((allergy, index) => (
                                <li key={index}>{allergy}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No allergies provided.</p>
                    )}

                    <h3>Fainting Instructions:</h3>
                    <p>
                        {user.faintingInstructions || "No instructions provided."}
                    </p>

                    <h2>Emergency Contact</h2>
                    {user.emergencyContact ? (
                        <>
                            <p>Name: {user.emergencyContact.name}</p>
                            <p>Phone: {user.emergencyContact.phone}</p>
                            <p>Relationship: {user.emergencyContact.relationship}</p>
                        </>
                    ) : (
                        <p>No emergency contact provided.</p>
                    )}
                    
                    {currentUser?(
                        
                        <>
                        
                        <Link to={'./edit'} className="btn edit-profile">Edit</Link>
                        <Link to={'./delete'} className="btn delete-profile">Delete</Link>
                        </>
                    ):
                    <></>
                    }
                    
                </div>
            </div>
            <p>
                Last Updated:{" "}
                {user.lastUpdated
                    ? new Date(user.lastUpdated).toLocaleString()
                    : "Unknown"}
            </p>
        </div>
    );
}
