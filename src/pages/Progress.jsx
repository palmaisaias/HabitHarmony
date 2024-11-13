import React from 'react';
import { Container, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // Import the Filler plugin
} from 'chart.js';
import '../styles/Progress.css'; // Import specific styles for Progress page

// Register the necessary components including the Filler plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Progress = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Habit Completion Rate',
        data: [70, 85, 90, 75],
        fill: true,
        backgroundColor: 'rgba(106, 17, 203, 0.2)',
        borderColor: '#6a11cb',
      },
    ],
  };

  return (
    <Container className="progress-container">
      <Typography variant="h4" className="progress-heading">
        Your Progress
      </Typography>
      <div className="progress-chart">
        <Line data={data} />
      </div>
      <Typography variant="body1" className="progress-description">
        Track your progress over time and see how your habits are improving!
      </Typography>
    </Container>
  );
};

export default Progress;
