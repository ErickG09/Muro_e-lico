"use client";
import { Box, SimpleGrid, Grid, GridItem, Heading } from "@chakra-ui/react";
import OverviewCard from "./components/OverviewCard";
import EnergyChart from "./components/EnergyChart";
import DaysCard from "./components/DaysCard";
import WeatherWidget from "./components/WeatherWidget";
import GeneratingTodayCard from "./components/GeneratingTodayCard";
import { useEffect, useState } from 'react';
import { set } from "mongoose";

async function getData() {
  try {
    const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/getTotal', {
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

async function getCurrentMonth() {
  try {
    const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/getCurrentMonth', {
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

async function getWeek() {
  try {
    const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/getWeek', {
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

async function getAllHours() {
  try {
    const response = await fetch('https://orm-pared-eolica.vercel.app/api/v1/getAllHours', {
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

async function getLatest(){
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

export default function MainPage() {

  const [data, setData] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);
  const [week, setWeek] = useState(null);
  const [currentDay, setCurrentDay] = useState(null);
  const [allHours, setAllHours] = useState(null);
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    // Función para obtener y actualizar datos
    const fetchData = async () => {
      const data = await getData();
      setData(data);
      const currentMonth = await getCurrentMonth();
      setCurrentMonth(currentMonth);
      const week = await getWeek();
      setWeek(week);
      const currentDay = await getCurrentDay();
      setCurrentDay(currentDay);
      const allHours = await getAllHours();
      setAllHours(allHours);
      const latest = await getLatest();
      setLatest(latest);
    };

    // Obtén los datos inmediatamente al montar el componente
    fetchData();

    // Configura un intervalo para obtener datos cada 10 segundos
    const intervalId = setInterval(fetchData, 10000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);


  return (
    <Box px="8" py="4" height="100vh" bg="#F8F9FA">
      <Box mb="8">
        <Heading as="h3" size="lg" mb="4">Overview</Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing="4">
          <OverviewCard bg="blue.50" title="Today" value={(currentDay?.total * 0.01).toFixed(4)} unit="mW" />
          <OverviewCard title="This week" value={(week?.total_week * 0.01).toFixed(4)} unit="mW" bg="purple.50"/>
          <OverviewCard title="This month" value={(currentMonth?.total * 0.01).toFixed(4)} unit="mW" bg="blue.50"/>
          <OverviewCard title="All generated" value={(data?.total * 0.01).toFixed(4)} unit="mW" bg="purple.50"/>
        </SimpleGrid>
      </Box>

      <Grid templateColumns={{ base: "1fr", md: "1.2fr 1fr" }} gap={6} mb={8}>
        <GridItem>
          <EnergyChart allHours={allHours}/>
        </GridItem>
        <GridItem>
          <DaysCard weekData={week}/>
        </GridItem>
      </Grid>

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}> 
        <GridItem>
          <WeatherWidget />
        </GridItem>
        <GridItem>
          <GeneratingTodayCard todayData={latest}/>
        </GridItem>
      </Grid>
    </Box>
  );
}
