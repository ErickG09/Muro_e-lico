
'use client';
import { ChakraProvider, Flex, Heading } from '@chakra-ui/react';
import Button from '../components/Button';
import CardsContainer from "../components/CardsContainer";
import MonthlyEnergyChart from "../components/MonthlyEnergyChart";
import GroupChartContainer from "../components/GroupChartContainer";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import OverviewCard from '../components/OverviewCard';

async function getData() {
  try {
    const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/readLatest', {
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'cors': 'no-cors'
      }

    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

async function getCurrentDay() {
  try {
    const response = await fetch('http://127.0.0.1:5000/api/v1/getCurrentDay', {
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'cors': 'no-cors'
      }

    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

export default function Home() {

  //const data = {propeller1: 1, propeller2: 1, propeller3: 1, propeller4: 1, propeller5: 1}
  // const data = await getData();
  // const dayTotalData = await getLatestDay();
  
  const [data, setData] = useState(null);
  const [dayTotalData, setDayTotalData] = useState(null);

  useEffect(() => {
    // Función para obtener y actualizar datos
    const fetchData = async () => {
      const latestData = await getData();
      const latestDay = await getCurrentDay();
      setData(latestData);
      setDayTotalData(latestDay);
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
        <Flex direction="column" align="center" height="100vh" padding="20px">
          <Flex width="90%" justify="space-between" align="center" marginBottom="30px">
            <Heading as="h3" size="lg" mb="4">Propellers Overview</Heading>
          </Flex>

          <CardsContainer latestData={data} />

          <Flex width="90%" justify="space-between" alignItems="flex-start" marginTop="30px">
            <GroupChartContainer dayTotalData={dayTotalData} />

            <Flex direction="column" gap="4" width="25%"> 
              <OverviewCard title="Today" value={dayTotalData?.total * 0.01 || 'N/A'} unit="mW" />
              <OverviewCard title="Now" value={(data?.propeller1 + data?.propeller2 + data?.propeller3 + data?.propeller4 + data?.propeller5) * 0.01  || 'N/A'} unit="mW" />
            </Flex>
          </Flex>
        </Flex>
      </ChakraProvider>
    </main>
  );
}