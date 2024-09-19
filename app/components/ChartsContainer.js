import { Box, VStack } from '@chakra-ui/react';
import DailyScatterChart from './DailyScatterChart';
import MonthlyScatterChart from './MonthlyScatterChart';

const ChartsContainer = ({energyPerHour, monthsData, daysData}) => {
  return (
    <Box width="90%" backgroundColor="#F7F8FA" padding="20px" borderRadius="15px" marginTop="30px">
      <VStack spacing="30px">
        <DailyScatterChart energyPerHour={energyPerHour}/>
        <MonthlyScatterChart daysData={daysData}/>
      </VStack>
    </Box>
  );
};

export default ChartsContainer;
