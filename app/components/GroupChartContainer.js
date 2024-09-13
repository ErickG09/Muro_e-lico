import { Flex, Box } from '@chakra-ui/react';
import GroupPieChart from './GroupPieChart';
import GroupLegend from './GroupLegend';

const GroupChartContainer = ({dayTotalData}) => {
  return (
    <Flex
      width="40%"
      backgroundColor="#E9ECEF"
      padding="40px"
      borderRadius="15px"
      alignItems="center"
      justifyContent="space-between"
      height="90%"
    >
      <GroupPieChart dayTotalData={dayTotalData}/>
      <GroupLegend dayTotalData={dayTotalData}/>
    </Flex>
  );
};

export default GroupChartContainer;
