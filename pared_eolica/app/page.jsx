"use client";

import Image from "next/image";
import { 
  ChakraProvider, 
  Flex,
  Heading
} from '@chakra-ui/react'
import Button from "./components/button";
import CardsContainer from "./components/CardsContainer";
import MonthlyEnergyChart from "./components/MonthlyEnergyChart";
import GroupChartContainer from "./components/GroupChartContainer";

export default function Home() {
  return (
    
    <ChakraProvider>
      <Flex direction="column" align="center" justify="" height="100vh" padding="20px">
        <Flex width="90%" justify="space-between" align="center" marginBottom="30px">
          <Heading size="lg">Página web de pared eólica</Heading>
          <Button onClick={() => alert('Button clicked!')}>
            Historial
          </Button>
        </Flex>
        <CardsContainer />
        <Flex width="90%" justify="space-between" alignItems="flex-start" marginTop="30px">
          <MonthlyEnergyChart />
          <GroupChartContainer />
        </Flex>
        
      </Flex>
    </ChakraProvider>
  );
}
