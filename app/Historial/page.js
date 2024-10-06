"use client";

import { Box, SimpleGrid, Grid, GridItem, Heading, Flex } from "@chakra-ui/react";
import DynamicChart from "../components/DynamicChart"; 
import DaysCard from "../components/DaysCard";
import EnergyChart from "../components/EnergyChart";
import OverviewCard from "../components/OverviewCard";
import Button from "../components/Button"; 

export default function HistorialPage() {
  return (
    <Box px="8" py="4" height="100vh" bg="#F8F9FA" position="relative">
      <Box position="absolute" top="16px" right="16px">
        <Button>
          Export 
        </Button>
      </Box>

      <Box mb="8" pt="10"> 
        <Heading as="h3" size="lg" mb="4">Overview</Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing="4">
          <OverviewCard bg="blue.50" title="Today" value="7,265" unit="mW" />
          <OverviewCard title="This week" value="3,671" unit="mW" bg="purple.50"/>
          <OverviewCard title="This month" value="156" unit="mW" bg="blue.50"/>
          <OverviewCard title="All generated" value="2,318" unit="mW" bg="purple.50"/>
        </SimpleGrid>
      </Box>

      <Grid templateColumns={{ base: "1fr", md: "1.2fr 1fr" }} gap={6} mb={8}>
        <GridItem>
          <EnergyChart />
        </GridItem>
        <GridItem>
          <DaysCard />
        </GridItem>
      </Grid>

      <Box mt="8">
        <DynamicChart />
      </Box>
    </Box>
  );
}


// import { 
//   ChakraProvider, 
//   Flex,
//   Heading
// } from '@chakra-ui/react';
// import Button from '../components/Button';
// import HistoryContainer from '../components/HistoryContainer';
// import ChartsContainer from '../components/ChartsContainer';
// import Link from 'next/link';

// async function getDayTotalData() {
//   try {
//     const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/readDayTotal', {
//       cache: 'no-cache',
//       headers: {
//         'Content-Type': 'application/json',
//         'cors': 'no-cors'
//       }

//     });
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     console.log(data); // Imprime los datos en la consola para verificar
//     return data;
//   } catch (error) {
//     console.error('Error al obtener los datos:', error);
//   }
// }

// async function getAllMonthsData() {
// try {
//   const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/readMonthTotal', {
//   cache: 'no-cache',
//   headers: {
//       'Content-Type': 'application/json',
//       'cors': 'no-cors'
//   }

//   });
//   if (!response.ok) {
//   throw new Error('Network response was not ok');
//   }
//   const data = await response.json();
//   console.log(data); // Imprime los datos en la consola para verificar
//   return data;
// } catch (error) {
//   console.error('Error al obtener los datos:', error);
// }
// }


// async function getEnergyPerHour() {
//   try {
//       const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/readCurrentDay', {
//       cache: 'no-cache',
//       headers: {
//           'Content-Type': 'application/json',
//           'cors': 'no-cors'
//       }

//       });
//       if (!response.ok) {
//       throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data); // Imprime los datos en la consola para verificar
//       return data;
//   } catch (error) {
//       console.error('Error al obtener los datos:', error);
//   }
// }

// export default async function HistorialPage() {

//   const dayTotalData = await getDayTotalData();
//   const allMonthsData = await getAllMonthsData();
//   const energyPerHour = await getEnergyPerHour();

//   return (
//       <ChakraProvider>
//           <Flex direction="column" align="center" justify="" height="100vh" padding="20px">
//               <Flex width="90%" justify="space-between" align="center" marginBottom="30px">
//                   <Heading size="lg">Historial de energía generada</Heading>
//                   <Link href={'/'}>
//                       <Button>
//                           Home
//                       </Button>
//                   </Link>
//               </Flex>
//               <HistoryContainer daysData={dayTotalData} monthsData={allMonthsData}/> 
//               <ChartsContainer daysData={dayTotalData} monthsData={allMonthsData} energyPerHour={energyPerHour}/>
//           </Flex>
//       </ChakraProvider>
//   );
// }

