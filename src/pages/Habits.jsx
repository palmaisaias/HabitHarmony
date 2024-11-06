import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import '../styles/index.css'; // Import global styles

const Habits = () => {
  const habits = [
    { id: 1, name: 'Exercise Daily', description: 'Morning workout routine' },
    { id: 2, name: 'Read Books', description: 'Read 30 minutes before bed' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Your Habits
      </Typography>
      <Grid container spacing={4}>
        {habits.map((habit) => (
          <Grid item xs={12} sm={6} md={4} key={habit.id}>
            <Card className="habit-card">
              <CardContent>
                <Typography variant="h5">{habit.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {habit.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Habits;
