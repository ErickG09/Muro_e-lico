import { Box, Heading } from '@chakra-ui/react';
import ScatterChart from './ScatterChart';

const DailyScatterChart = ({energyPerHour}) => {
  const dailyData = {
    datasets: [
      {
        label: 'Watts Generados',

        data: Array.from({ length: 24 }, (_, i) => ({ x: i, y: energyPerHour[i] || 0 })),
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
