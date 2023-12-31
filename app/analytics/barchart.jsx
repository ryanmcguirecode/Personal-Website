'use client';

import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData }) => {
  const options = {
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;