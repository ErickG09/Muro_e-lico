import Image from "next/image";
//import { useRouter } from "next/navigation";
import { 
  ChakraProvider, 
  Flex,
  Heading
} from '@chakra-ui/react'
import Button from './components/Button';
import CardsContainer from "./components/CardsContainer";
import MonthlyEnergyChart from "./components/MonthlyEnergyChart";
import GroupChartContainer from "./components/GroupChartContainer";
import Link from 'next/link';
import prisma from "@/libs/prisma";

async function getData(){
  const latestData = await prisma.propellerData.findFirst({
    orderBy: {
      id: 'desc',
    },
  });
  console.log(latestData);
  return latestData;
}

export default async function Home() {

  const latestData = await getData();

  return (
    <main>
      <ChakraProvider>
        <Flex direction="column" align="center" justify="" height="100vh" padding="20px">
          <Flex width="90%" justify="space-between" align="center" marginBottom="30px">
            <Heading size="lg">Página web de pared eólica</Heading>
            <Button>
              <Link href={'/Historial'}>
                Historial
              </Link>
            </Button>
          </Flex>
          <CardsContainer latestData={latestData}/>
          <Flex width="90%" justify="space-between" alignItems="flex-start" marginTop="30px">
            <MonthlyEnergyChart />
            <GroupChartContainer />
          </Flex>
          
        </Flex>
      </ChakraProvider>
      </main>
  );
}
