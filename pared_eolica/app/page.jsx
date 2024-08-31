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
import prisma from "@/libs/prisma";

async function getdata() {
  const data = await prisma.propellerData.findMany();
  console.log(data);

  return data;
}

export default function Home() {
  const data = getdata();
  console.log(data);
  const router = useRouter();
  return (
    
    <ChakraProvider>
      <main>
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
      </main>
    </ChakraProvider>
  );
}
