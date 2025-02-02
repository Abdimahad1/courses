import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Lesson from './pages/Lesson';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ContactUs from './pages/ContactUs';
import Admin from './pages/Admin';

const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (email, password, userType) => {
    const adminEmail = '123@gmail.com';
    const adminPassword = '123';

    if (userType === 'admin' && email === adminEmail && password === adminPassword) {
      const adminUser = { email, isAdmin: true };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
    } else {
      const registeredUser = users.find((user) => user.email === email && user.password === password);
      if (registeredUser) {
        const normalUser = { ...registeredUser, isAdmin: false };
        setUser(normalUser);
        localStorage.setItem('user', JSON.stringify(normalUser));
      } else {
        alert('Invalid credentials');
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleRegister = (formData) => {
    setUsers([...users, formData]);
    alert('Registered successfully! Please login.');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/about-us" element={user ? <AboutUs /> : <Navigate to="/login" />} />
            <Route path="/courses" element={user ? <Courses /> : <Navigate to="/login" />} />
            <Route path="/courses/:courseId" element={user ? <CourseDetails /> : <Navigate to="/login" />} />
            <Route path="/courses/:courseId/lesson/:lessonId" element={user ? <Lesson /> : <Navigate to="/login" />} />
            <Route path="/login" element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />} />
            <Route path="/contact-us" element={user ? <ContactUs /> : <Navigate to="/login" />} />
            {user && user.isAdmin && <Route path="/admin" element={<Admin users={users} />} />}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
