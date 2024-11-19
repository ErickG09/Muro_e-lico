import { Flex, Box } from '@chakra-ui/react';
import GroupPieChart from './GroupPieChart';
import GroupLegend from './GroupLegend';

const GroupChartContainer = ({ dayTotalData }) => {
  return (
    <Flex
      width="50%"           // Cambiado de "40%" a "50%" para darle más espacio
      backgroundColor="#E9ECEF"
      padding="30px"         // Reducido de "40px" a "30px" para ganar espacio sin perder el relleno
      borderRadius="15px"
      alignItems="center"
      justifyContent="space-between"
      height="90%"
    >
      <GroupPieChart dayTotalData={dayTotalData} />
      <GroupLegend dayTotalData={dayTotalData} />
    </Flex>
  );
};

export default GroupChartContainer;
