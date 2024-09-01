import { Flex } from '@chakra-ui/react';
import PropellerCard from './PropellerCard';
import { useEffect, useState } from 'react';

const CardsContainer = ({latestData}) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  


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
      <PropellerCard title="Hélice 1" percentage={Math.floor((latestData?.propeller1 * 100) / 7)} voltage={`${latestData?.propeller1.toFixed(2)}V`} />
      <PropellerCard title="Hélice 2" percentage={Math.floor((latestData?.propeller2 * 100) / 7)} voltage={`${latestData?.propeller2.toFixed(2)}V`} />
      <PropellerCard title="Hélice 3" percentage={Math.floor((latestData?.propeller3 * 100) / 7)} voltage={`${latestData?.propeller3.toFixed(2)}V`}/>
      <PropellerCard title="Hélice 4" percentage={Math.floor((latestData?.propeller4 * 100) / 7)} voltage={`${latestData?.propeller4.toFixed(2)}V`}/>
      <PropellerCard title="Hélice 5" percentage={Math.floor((latestData?.propeller5 * 100) / 7)} voltage={`${latestData?.propeller5.toFixed(2)}V`}/>
    </Flex>
  );
};

export default CardsContainer;
