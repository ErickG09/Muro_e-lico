import { Box, Heading } from '@chakra-ui/react';
import ScatterChart from './ScatterChart';

const DailyScatterChart = () => {
  const dailyData = {
    datasets: [
      {
        label: 'Energía por día',
        data: [
          { x: 1, y: 300 },
          { x: 2, y: 280 },
          { x: 3, y: 290 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return (
    <Box width="90%">
      <Heading size="md" marginBottom="20px">Gráfica de Energía por Día</Heading>
      <ScatterChart data={dailyData} title="Energía por Día" />
    </Box>
  );
};

export default DailyScatterChart;
