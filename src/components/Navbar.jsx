import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../styles/index.css'; // Import global styles

const AppNavbar = () => {
  return (
    <nav className="navbar-wrapper">
      <Container>
        <Link to="/" className="navbar-brand">Habit Harmony</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/habits">Habits</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/progress">Progress</Link> {/* Link to Progress page */}
        </div>
      </Container>
    </nav>
  );
};

export default AppNavbar;
