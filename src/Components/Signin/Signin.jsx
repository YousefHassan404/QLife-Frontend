import React, { useContext } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { signInSchema } from '../../../Utils/Zod/schema';
import toast, { Toaster } from 'react-hot-toast';
import { useGetUsers } from '../../../Utils/Hooks/GetUsersData';
import { UserContext } from '../../../Utils/Providers/Context/UserContext';
import Profile from '../Profile/Proile';
import Loading from '../Loading/Loading';
// import './Signin.css'; // Import the CSS file for styles

export default function Signin() {
  const { data: users, isLoading, error } = useGetUsers();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  // Check if users data is available before rendering the profile component
  if (id && users) {
    const visitedUser = users.find(user => user._id === id);
    if (visitedUser) {
      return <Profile data={visitedUser} />;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = signInSchema.parse(data);
      const currentUser = users?.find(user => user.email === res.email);

      if (currentUser.password===res.password) {
        login(currentUser);
        console.log(currentUser)
        toast.success('Sign In successful');
        console.log(currentUser._id);
        navigate(`/profile?id=${currentUser._id}`); // Navigate to the profile page after successful sign-in
      } else {
        toast.error('Invalid email or password');
      }
    } catch (error) {
      if (error.errors) {
        error.errors.forEach((err) => toast.error(err.message));
      } else {
        console.error('Unexpected error:', error); // Log for debugging
        toast.error('An unexpected error occurred');
      }
    }
  };

  if (isLoading) return <Loading/> ;
  if (error) return <div>Error fetching users data.</div>;

  return (
    <div className="signin-container">
      <h2 className="signin-header">Sign In</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <input type="email" name="email" className="signin-input" placeholder="Email" required />
        <input type="password" name="password" className="signin-input" placeholder="Password" required />
        <button type="submit" className="signin-button">Sign In</button>
      </form>
      <div className="signin-footer">
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </div>
      <Toaster />
    </div>
  );
}
