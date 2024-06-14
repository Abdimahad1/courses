import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        EduPlatform
      </Link>
      {user && (
        <nav className="space-x-4">
          <Link to="/profile">Profile</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about-us">About Us</Link>
          {user.isAdmin && <Link to="/admin">See Users</Link>}
          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
            Logout
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
