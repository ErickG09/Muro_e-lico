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

const GroupPieChart = ({temp1, temp2}) => {

  const totalTemp1 = temp1?.propeller1 +temp1?.propeller2 + temp1?.propeller3 + temp1?.propeller4 + temp1?.propeller5;
  const totalTemp2 = temp2?.propeller1 +temp2?.propeller2 + temp2?.propeller3 + temp2?.propeller4 + temp2?.propeller5;

  // Si dayTotalData no tiene valores definidos, usa valores por defecto
  const dataValues = [totalTemp1 * 0.1 || 0, totalTemp2 * 0.1 || 0];

  const data = {
    labels: ['Grupo 1', 'Grupo 2'],
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
