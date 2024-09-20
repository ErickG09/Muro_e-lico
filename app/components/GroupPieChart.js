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
  const dataValues = [dayTotalData?.grupo1, dayTotalData?.grupo2, dayTotalData?.grupo3];

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
