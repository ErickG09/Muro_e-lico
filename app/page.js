'use client'
import { useEffect, useState } from 'react';
import { ChakraProvider, Flex, Heading } from '@chakra-ui/react';
import Button from './components/Button';
import CardsContainer from "./components/CardsContainer";
import MonthlyEnergyChart from "./components/MonthlyEnergyChart";
import GroupChartContainer from "./components/GroupChartContainer";
import Link from 'next/link';
import prisma from "@/libs/prisma";

async function getData() {
  try {
    const response = await fetch('/api/get');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data); // Imprime los datos en la consola para verificar
    return data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Función para obtener y actualizar datos
    const fetchData = async () => {
      const latestData = await getData();
      setData(latestData);
    };

    // Obtén los datos inmediatamente al montar el componente
    fetchData();

    // Configura un intervalo para obtener datos cada 10 segundos
    const intervalId = setInterval(fetchData, 10000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

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
          <CardsContainer latestData={data}/>
          <Flex width="90%" justify="space-between" alignItems="flex-start" marginTop="30px">
            <MonthlyEnergyChart />
            <GroupChartContainer />
          </Flex>
        </Flex>
      </ChakraProvider>
    </main>
  );
}