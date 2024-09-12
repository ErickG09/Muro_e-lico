import { Box, VStack } from '@chakra-ui/react';
import DailyHistory from './DailyHistory';
import MonthlyHistory from './MonthlyHistory';

const HistoryContainer = () => {
  return (
    <Box width="90%" backgroundColor="#F7F8FA" padding="20px" borderRadius="20px">
      <VStack spacing="30px">
        <DailyHistory />
        <MonthlyHistory />
      </VStack>
    </Box>
  );
};

export default HistoryContainer;
