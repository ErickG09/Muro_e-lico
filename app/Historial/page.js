import { 
    ChakraProvider, 
    Flex,
    Heading
  } from '@chakra-ui/react';
import Button from '../components/Button';
import HistoryContainer from '../components/HistoryContainer';
import ChartsContainer from '../components/ChartsContainer';
import Link from 'next/link';

async function getDayTotalData() {
    try {
      const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/readDayTotal', {
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
      console.log(data); // Imprime los datos en la consola para verificar
      return data;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
  
async function getAllMonthsData() {
try {
    const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/readMonthTotal', {
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
    console.log(data); // Imprime los datos en la consola para verificar
    return data;
} catch (error) {
    console.error('Error al obtener los datos:', error);
}
}


async function getEnergyPerHour() {
    try {
        const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/readCurrentDay', {
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
        console.log(data); // Imprime los datos en la consola para verificar
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

export default async function HistorialPage() {

    const dayTotalData = await getDayTotalData();
    const allMonthsData = await getAllMonthsData();
    const energyPerHour = await getEnergyPerHour();

    return (
        <ChakraProvider>
            <Flex direction="column" align="center" justify="" height="100vh" padding="20px">
                <Flex width="90%" justify="space-between" align="center" marginBottom="30px">
                    <Heading size="lg">Historial de energía generada</Heading>
                    <Link href={'/'}>
                        <Button>
                            Home
                        </Button>
                    </Link>
                </Flex>
                <HistoryContainer daysData={dayTotalData} monthsData={allMonthsData}/> 
                <ChartsContainer daysData={dayTotalData} monthsData={allMonthsData} energyPerHour={energyPerHour}/>
            </Flex>
        </ChakraProvider>
    );
  }