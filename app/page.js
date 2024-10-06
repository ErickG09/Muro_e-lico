"use client";
import { Box, SimpleGrid, Grid, GridItem, Heading } from "@chakra-ui/react";
import OverviewCard from "./components/OverviewCard";
import EnergyChart from "./components/EnergyChart";
import DaysCard from "./components/DaysCard";
import WeatherWidget from "./components/WeatherWidget";
import GeneratingTodayCard from "./components/GeneratingTodayCard";

export default function MainPage() {
  return (
    <Box px="8" py="4" height="100vh" bg="#F8F9FA">
      <Box mb="8">
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

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}> 
        <GridItem>
          <WeatherWidget />
        </GridItem>
        <GridItem>
          <GeneratingTodayCard />
        </GridItem>
      </Grid>
    </Box>
  );
}
