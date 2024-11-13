import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Habits from '../pages/Habits';
import Profile from '../pages/Profile';
import Progress from '../pages/Progress'; // Import the new Progress page
import AppNavbar from '../components/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/progress" element={<Progress />} /> {/* Add Progress route */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
