// components/CardsContainer.js
import { Flex } from '@chakra-ui/react';
import PropellerCard from './PropellerCard';

const CardsContainer = () => {
  return (
    <Flex 
      justify="space-between" 
      marginBottom="20px" 
      backgroundColor="#E9ECEF" 
      padding="20px" 
      borderRadius="20px" 
      width="90%"
      gap="20px" 
      height="45%"
    >
      <PropellerCard title="Hélice 1" percentage={30} voltage="220V" />
      <PropellerCard title="Hélice 2" percentage={40} voltage="230V" />
      <PropellerCard title="Hélice 3" percentage={65} voltage="240V" />
      <PropellerCard title="Hélice 4" percentage={55} voltage="210V" />
      <PropellerCard title="Hélice 5" percentage={0} voltage="--" />
    </Flex>
  );
};

export default CardsContainer;
