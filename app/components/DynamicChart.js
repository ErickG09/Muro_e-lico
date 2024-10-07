"use client";

import { useState, useEffect} from "react";
import { Box, Button, ButtonGroup, Flex, Text, Select } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function DynamicChart() {
  const [timeFrame, setTimeFrame] = useState("hour"); // Estado para controlar el periodo de tiempo
  const [hourChart, setHourChart] = useState();
  const [dayChart, setDayChart] = useState();
  const [monthChart, setMonthChart] = useState();
  const [yearChart, setYearChart] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
      if (timeFrame === "hour") {
        const response = await axios.get('https://orm-pared-eolica.vercel.app/api/v1/getAllMinutes');
        setHourChart(response.data);
        console.log(response.data);
        console.log(typeof hourChart);
      } else if (timeFrame === "day") {
        const response = await axios.get('https://orm-pared-eolica.vercel.app/api/v1/getAllHours');
        setDayChart(response.data);
        console.log(response.data);
      } else if (timeFrame === "month") {
        const response = await axios.get('https://orm-pared-eolica.vercel.app/api/v1/read30days');
        setMonthChart(response.data);
        console.log(response.data);
      } else if (timeFrame === "year") {
        const response = await axios.get('https://orm-pared-eolica.vercel.app/api/v1/readAllMonths');
        setYearChart(response.data);
        console.log(response.data);
      }
      } catch (error) {
      console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [timeFrame]);




  const handleTimeFrameChange = (value) => {
    setTimeFrame(value);
  };

  // Datos simulados para las diferentes vistas
  const getDataForTimeFrame = () => {
    switch (timeFrame) {
      case "hour":

      return {
        labels: Array.from({ length: 60 }, (_, i) => `${i + 1}`), // Minutos de la hora
        data: hourChart ? Array.from({ length: 60 }, (_, i) => hourChart[i + 1] || 0) : [],
      };

      case "day":
        return {
          labels: Array.from({ length: 24 }, (_, i) => `${i + 1}`), // Horas del día
          data: dayChart ? Array.from({ length: 24 }, (_, i) => dayChart[i + 1] || 0) : [],
        };
      case "month":
        return {
          labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`), // Días del mes
          data: monthChart ? Array.from({ length: 30 }, (_, i) => monthChart[String(i + 1).padStart(2, '0')] || 0) : [],
        };
      case "year":
        return {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Meses del año
          data: yearChart ? Array.from({ length: 12 }, (_, i) => yearChart[i + 1] || 0) : [],
        };
      default:
        return { labels: [], data: [] };
    }
  };

  const { labels, data } = getDataForTimeFrame();

  const chartData = {
    labels,
    datasets: [
      {
        label: "mW Generated",
        data,
        borderColor: "#3182CE", // Color de la línea
        backgroundColor: "#90CDF4",
        pointBackgroundColor: "#3182CE",
        pointBorderColor: "#3182CE",
        pointHoverBackgroundColor: "#3182CE",
        pointHoverBorderColor: "#3182CE",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: timeFrame === "hour" ? "Minutes" : timeFrame === "day" ? "Hours" : timeFrame === "month" ? "Days" : "Months",
          color: "#4A5568",
        },
        grid: { display: false },
        ticks: { color: "#4A5568" },
      },
      y: {
        title: {
          display: true,
          text: "mW Generated",
          color: "#4A5568",
        },
        grid: { display: false },
        ticks: { color: "#4A5568" },
      },
    },
  };

  return (
    <Box bg="white" borderRadius="lg" shadow="md" p="6" height="450px" width="100%">
      {/* Título y selección de tiempo */}
      <Flex justify="space-between" mb="4">
        <Text fontSize="xl" fontWeight="bold">Generated this {timeFrame}</Text>
        {/* Botones para seleccionar el intervalo de tiempo */}
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button onClick={() => handleTimeFrameChange("hour")} isActive={timeFrame === "hour"}>Hour</Button>
          <Button onClick={() => handleTimeFrameChange("day")} isActive={timeFrame === "day"}>Day</Button>
          <Button onClick={() => handleTimeFrameChange("month")} isActive={timeFrame === "month"}>Month</Button>
          <Button onClick={() => handleTimeFrameChange("year")} isActive={timeFrame === "year"}>Year</Button>
        </ButtonGroup>
      </Flex>
      {/* Contenedor de la gráfica */}
      <Box h="300px">
        <Line data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
}
