"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  ChakraProvider, 
  Flex,
  Heading
} from '@chakra-ui/react'
import Button from './components/Button';
import CardsContainer from "./components/CardsContainer";
import MonthlyEnergyChart from "./components/MonthlyEnergyChart";
import GroupChartContainer from "./components/GroupChartContainer";

export default function Home() {

  const router = useRouter();
  return (
    
    <ChakraProvider>
      <Flex direction="column" align="center" justify="" height="100vh" padding="20px">
        <Flex width="90%" justify="space-between" align="center" marginBottom="30px">
          <Heading size="lg">Página web de pared eólica</Heading>
          <Button onClick={() => router.push('/Historial')}>
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
