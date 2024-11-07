import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import {
  CheckCircle,
  Schedule,
  TrendingUp,
} from '@mui/icons-material';
import '../styles/Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <Container maxWidth="md">
          <Typography variant="h2" className="hero-title">
            Welcome to Habit Harmony
          </Typography>
          <Typography variant="h5" className="hero-subtitle">
            Your personal assistant for habit stacking and improvement.
          </Typography>
          <Button variant="contained" color="primary" className="hero-button">
            Get Started
          </Button>
        </Container>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <Container maxWidth="lg">
          <Typography variant="h4" className="section-title">
            Why Choose Habit Harmony?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Card className="feature-card">
                <CardContent>
                  <CheckCircle className="feature-icon" />
                  <Typography variant="h5" className="feature-title">
                    Build Good Habits
                  </Typography>
                  <Typography variant="body1" className="feature-text">
                    Create and maintain positive habits effortlessly.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className="feature-card">
                <CardContent>
                  <Schedule className="feature-icon" />
                  <Typography variant="h5" className="feature-title">
                    Stay Organized
                  </Typography>
                  <Typography variant="body1" className="feature-text">
                    Keep track of your routines and schedule with ease.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className="feature-card">
                <CardContent>
                  <TrendingUp className="feature-icon" />
                  <Typography variant="h5" className="feature-title">
                    Improve Continuously
                  </Typography>
                  <Typography variant="body1" className="feature-text">
                    Monitor your progress and achieve your goals.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <Container maxWidth="md">
          <Typography variant="h4" className="section-title">
            What Our Users Say
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card className="testimonial-card">
                <CardContent>
                  <Avatar
                    src="https://via.placeholder.com/80"
                    alt="User 1"
                    className="testimonial-avatar"
                  />
                  <Typography variant="h6" className="testimonial-name">
                    Jane Doe
                  </Typography>
                  <Typography variant="body2" className="testimonial-text">
                    "Habit Harmony has transformed the way I build habits.
                    Highly recommended!"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="testimonial-card">
                <CardContent>
                  <Avatar
                    src="https://via.placeholder.com/80"
                    alt="User 2"
                    className="testimonial-avatar"
                  />
                  <Typography variant="h6" className="testimonial-name">
                    John Smith
                  </Typography>
                  <Typography variant="body2" className="testimonial-text">
                    "An essential tool for anyone looking to improve their daily routines."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <Container maxWidth="sm" className="cta-container">
          <Typography variant="h4" className="cta-title">
            Ready to Transform Your Life?
          </Typography>
          <Button variant="contained" color="primary" className="cta-button">
            Join Now
          </Button>
        </Container>
      </div>

      {/* Footer */}
      <footer className="footer">
        <Container maxWidth="md">
          <Typography variant="body2" className="footer-text">
            &copy; {new Date().getFullYear()} Habit Harmony. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
