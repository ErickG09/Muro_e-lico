import { Box, Heading } from '@chakra-ui/react';
import ScatterChart from './ScatterChart';

const MonthlyScatterChart = () => {
  const monthlyData = {
    datasets: [
      {
        label: 'Energía por mes',
        data: [
          { x: 8, y: 300 },
          { x: 9, y: 300 },
          { x: 10, y: 300 },
        ],
        backgroundColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  return (
    <Box width="90%">
      <Heading size="md" marginBottom="20px">Gráfica de Energía por Mes</Heading>
      <ScatterChart data={monthlyData} title="Energía por Mes" width="100%" height="500px" /> 
    </Box>
  );
};

export default MonthlyScatterChart;
