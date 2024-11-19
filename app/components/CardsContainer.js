'use client'
import { Flex, Box, keyframes } from '@chakra-ui/react';
import PropellerCard from './PropellerCard';
import ButtonTest from './ButtonTest';
import { useEffect, useState } from 'react';

// Definimos las animaciones de entrada y salida
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



const CardsContainer = ({ latestData, onToggle, isExiting }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <Flex 
      justify="space-between" 
      align="center"
      marginBottom="20px" 
      backgroundColor="#E9ECEF" 
      padding="20px" 
      borderRadius="20px" 
      width="90%"
      gap="20px" 
      height="45%"
      position="relative" 
      animation={`${isExiting ? slideOutToLeft : slideInFromRight} 0.5s ease-in-out`} // Cambia la animación según el estado `isExiting`
    >
      <PropellerCard title="Propeller 1" percentage={Math.floor((latestData?.propeller1 * 100) / 5) || 0} voltage={`${(latestData?.propeller1 * 0.01).toFixed(2) || 0} mW`} />
      <PropellerCard title="Propeller 2" percentage={Math.floor((latestData?.propeller2 * 100) / 5)|| 0} voltage={`${(latestData?.propeller2 * 0.01).toFixed(2) || 0} mW`} />
      <PropellerCard title="Propeller 3" percentage={Math.floor((latestData?.propeller3 * 100) / 5)|| 0} voltage={`${(latestData?.propeller3 * 0.01).toFixed(2) || 0} mW`} />
      <PropellerCard title="Propeller 4" percentage={Math.floor((latestData?.propeller4 * 100) / 5)|| 0} voltage={`${(latestData?.propeller4 * 0.01).toFixed(2) || 0} mW`} />
      <PropellerCard title="Propeller 5" percentage={Math.floor((latestData?.propeller5 * 100) / 5)|| 0} voltage={`${(latestData?.propeller5 * 0.01).toFixed(2) || 0} mW`} />
      
    </Flex>
  );
};

export default CardsContainer;
