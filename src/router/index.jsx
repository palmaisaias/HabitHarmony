import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Habits from '../pages/Habits';
import Profile from '../pages/Profile';
import AppNavbar from '../components/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
