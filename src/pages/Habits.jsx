import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  LinearProgress,
} from '@mui/material';
import {
  Add,
  Edit,
  Delete,
  CheckCircle,
} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useSpring, animated } from "@react-spring/web";
import '../styles/Habits.css'; // Import the CSS file

const Habits = () => {
  const habits = [
    {
      id: 1,
      name: 'Exercise Daily',
      description: 'Morning workout routine',
      progress: 80,
      data: [
        { day: 'Mon', progress: 60 },
        { day: 'Tue', progress: 65 },
        { day: 'Wed', progress: 70 },
        { day: 'Thu', progress: 75 },
        { day: 'Fri', progress: 80 },
      ],
    },
    {
      id: 2,
      name: 'Read Books',
      description: 'Read 30 minutes before bed',
      progress: 50,
      data: [
        { day: 'Mon', progress: 40 },
        { day: 'Tue', progress: 45 },
        { day: 'Wed', progress: 50 },
        { day: 'Thu', progress: 50 },
        { day: 'Fri', progress: 50 },
      ],
    },
    {
      id: 3,
      name: 'Meditation',
      description: '15 minutes of meditation',
      progress: 70,
      data: [
        { day: 'Mon', progress: 60 },
        { day: 'Tue', progress: 65 },
        { day: 'Wed', progress: 70 },
        { day: 'Thu', progress: 70 },
        { day: 'Fri', progress: 70 },
      ],
    },
    {
      id: 4,
      name: 'Drink Water',
      description: '8 glasses a day',
      progress: 90,
      data: [
        { day: 'Mon', progress: 80 },
        { day: 'Tue', progress: 85 },
        { day: 'Wed', progress: 90 },
        { day: 'Thu', progress: 90 },
        { day: 'Fri', progress: 90 },
      ],
    },
    // Add more habits as needed
  ];

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fadeIn}>
      <Container className="habits-container">
        <Typography variant="h4" className="habits-title">
          Manage Your Habits
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          className="add-habit-button"
        >
          Add New Habit
        </Button>
        <Grid container spacing={4}>
          {habits.map((habit) => (
            <Grid item xs={12} sm={6} md={4} key={habit.id}>
              <Card className="habit-card">
                <CardContent>
                  <Typography variant="h5" className="habit-name">
                    {habit.name}
                  </Typography>
                  <Typography variant="body2" className="habit-description">
                    {habit.description}
                  </Typography>

                  {/* Progress Bar */}
                  <div className="progress-container">
                    <Typography variant="body2" className="progress-text">
                      Progress: {habit.progress}%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={habit.progress}
                      className="progress-bar"
                    />
                  </div>

                  {/* Chart */}
                  <ResponsiveContainer width="100%" height={100}>
                    <LineChart data={habit.data}>
                      <XAxis dataKey="day" hide />
                      <YAxis domain={[0, 100]} hide />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="progress"
                        stroke="#d4a373"
                        strokeWidth={2}
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>

                  {/* Action Buttons */}
                  <div className="habit-actions">
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton color="secondary">
                      <Delete />
                    </IconButton>
                    <IconButton className="complete-button">
                      <CheckCircle />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </animated.div>
  );
};

export default Habits;
