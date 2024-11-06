import React from 'react';
import { Container, Typography } from '@mui/material';
import '../styles/index.css'; // Import global styles

const Home = () => {
  return (
    <div className="hero-section">
      <Container>
        <Typography variant="h2" gutterBottom>
          Welcome to Habit Harmony
        </Typography>
        <Typography variant="body1">
          Your personal assistant for habit stacking and improvement.
        </Typography>
      </Container>
    </div>
  );
}

export default Home;
