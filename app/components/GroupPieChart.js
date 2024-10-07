"use client";

import { Pie } from 'react-chartjs-2';
import { Box, Flex, Text } from '@chakra-ui/react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GroupPieChart = ({dayTotalData}) => {

  // Si dayTotalData no tiene valores definidos, usa valores por defecto
  const dataValues = [dayTotalData?.group1 * 0.1, dayTotalData?.group2 * 0.1, dayTotalData?.group3 * 0.1];

  const data = {
    labels: ['Grupo 1', 'Grupo 2', 'Grupo 3'],
    datasets: [
      {
        label: 'Energia',
        data: dataValues, 
        backgroundColor: ['#FF6384', '#FF9F40', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#FF9F40', '#36A2EB'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Box width="50%">
      <Pie data={data} options={options} />
    </Box>
  );
};

export default GroupPieChart;
