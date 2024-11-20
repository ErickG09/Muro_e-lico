'use client'
import { Flex, Box, keyframes, Text } from '@chakra-ui/react';
import PropellerCard from './PropellerCard';
import ButtonTest from './ButtonTest';
import { FaArrowLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';

// const slideInFromLeft = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(-100%);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// const slideOutToRight = keyframes`
//   from {
//     opacity: 1;
//     transform: translateX(0);
//   }
//   to {
//     opacity: 0;
//     transform: translateX(100%);
//   }
// `;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutToLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const CardsContainer2 = ({ latestData, onToggle, isExiting }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <Flex 
      direction="column" 
      align="center"
      marginBottom="20px" 
      backgroundColor="#E9ECEF" 
      padding="20px" 
      borderRadius="20px" 
      width="90%"
      gap="20px" 
      height="55%"
      position="relative" 
      animation={`${isExiting ? slideOutToLeft : slideInFromRight} 0.5s ease-in-out`} // Cambia la animación según el estado `isExiting`

      // animation={`${isExiting ? slideOutToRight : slideInFromLeft} 0.5s ease-in-out`} // Animacíon
    >
      <Text fontSize="xl" fontWeight="bold" mb="10px">
        Group 2
      </Text>
      {/* La información del segundo grupo de hélices */}
      <Flex justify="space-between" align="center" width="100%" gap="20px">
        <PropellerCard title="Propeller 6" percentage={Math.floor((latestData?.propeller6 * 100) / 5) || 0} voltage={`${(latestData?.propeller6 * 0.01).toFixed(2) || 0} mW`} />
        <PropellerCard title="Propeller 7" percentage={Math.floor((latestData?.propeller7 * 100) / 5) || 0} voltage={`${(latestData?.propeller7 * 0.01).toFixed(2) || 0} mW`} />
        <PropellerCard title="Propeller 8" percentage={Math.floor((latestData?.propeller8 * 100) / 5) || 0} voltage={`${(latestData?.propeller8 * 0.01).toFixed(2) || 0} mW`} />
        <PropellerCard title="Propeller 9" percentage={Math.floor((latestData?.propeller9 * 100) / 5) || 0} voltage={`${(latestData?.propeller9 * 0.01).toFixed(2) || 0} mW`} />
        <PropellerCard title="Propeller 10" percentage={Math.floor((latestData?.propeller10 * 100) / 5) || 0} voltage={`${(latestData?.propeller10 * 0.01).toFixed(2) || 0} mW`} />
      </Flex>
    </Flex>
  );
};

export default CardsContainer2;
