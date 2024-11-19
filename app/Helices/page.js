
'use client';
import { ChakraProvider, Flex, Heading, Box } from '@chakra-ui/react';
import Button from '../components/Button';
import CardsContainer from "../components/CardsContainer";
import MonthlyEnergyChart from "../components/MonthlyEnergyChart";
import GroupChartContainer from "../components/GroupChartContainer";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import OverviewCard from '../components/OverviewCard';
import CardsContainer2 from '../components/CardsContainer2';
import ButtonTest from '../components/ButtonTest';

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
    const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/getCurrentDay', {
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

async function getTempLatest(){
  try {
    const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/readTempLatest', {
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
  const [tempLatest, setTempLatest] = useState(null);
  const [showFirstContainer, setShowFirstContainer] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  useEffect(() => {
    // Función para obtener y actualizar datos
    const fetchData = async () => {
      const latestData = await getData();
      const latestDay = await getCurrentDay();
      setData(latestData);
      setDayTotalData(latestDay);
      const tempLatest = await getTempLatest();
      setTempLatest(tempLatest);
    };

    // Obtén los datos inmediatamente al montar el componente
    fetchData();

    // Configura un intervalo para obtener datos cada 10 segundos
    const intervalId = setInterval(fetchData, 10000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const deleteData = async () => {
      try {
        const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/resetTempWallData', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'cors': 'no-cors'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Data deleted successfully');
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    };

    // Set up an interval to delete data every 5 minutes
    const intervalId = setInterval(deleteData, 300000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

   // Función para alternar entre los dos contenedores
   const toggleContainer = () => {
    setIsExiting(true); // Inicia la animación de salida

    setTimeout(() => {
      setShowFirstContainer(!showFirstContainer); // Cambia el contenedor
      setIsExiting(false); // Restablece la animación de entrada
    }, 500); // La duración debe coincidir con la duración de la animación `fadeOut`
  };

  return (
    <main>
      <ChakraProvider>
        <Flex direction="column" align="center" height="100vh" padding="20px">
          <Flex width="90%" justify="space-between" align="center" marginBottom="30px">
            <Heading as="h3" size="lg" mb="4">Propellers Overview</Heading>
          </Flex>

          {/* Esta sección es para cambiar el grupo de helices */}
          {/* CardsContainer2 es para el segundo grupo de helices, duplique ese componente, solo para cambiar los valores de las 
          nuevas hélices */}
          {showFirstContainer ? (
            <CardsContainer latestData={tempLatest} onToggle={toggleContainer} isExiting={isExiting} />
          ) : (
            <CardsContainer2 latestData={tempLatest} onToggle={toggleContainer} isExiting={isExiting} />
          )}


          <Flex width="90%" justify="space-between" alignItems="flex-start" marginTop="30px">
            <GroupChartContainer dayTotalData={dayTotalData} />

            <Flex direction="column" gap="4" width="25%"> 
              <OverviewCard title="Today" value={(dayTotalData?.total * 0.01).toFixed(4) || 'N/A'} unit="mW" />
              <OverviewCard title="Now" value={((tempLatest?.propeller1 + tempLatest?.propeller2 + tempLatest?.propeller3 + tempLatest?.propeller4 + tempLatest?.propeller5) * 0.01).toFixed(4)  || 'N/A'} unit="mW" />
            </Flex>
          </Flex>
        </Flex>
      </ChakraProvider>
    </main>
  );
}