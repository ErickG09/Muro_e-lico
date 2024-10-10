"use client";

import { useState, useEffect } from "react";
import { Box, Button, ButtonGroup, Flex, Text, Select, HStack } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import DatePicker from "react-datepicker"; // Componente para mostrar el calendario
import "react-datepicker/dist/react-datepicker.css"; // Estilos del calendario
import axios from "axios";
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function DynamicChart() {
  // Estados para controlar la vista de tiempo y los datos del gráfico
  const [timeFrame, setTimeFrame] = useState("hour"); // Controla el periodo de tiempo seleccionado
  const [selectedDate, setSelectedDate] = useState(new Date()); // Controla la fecha seleccionada en el DatePicker
  const [hourChart, setHourChart] = useState([]);
  const [dayChart, setDayChart] = useState([]);
  const [monthChart, setMonthChart] = useState([]);
  const [yearChart, setYearChart] = useState([]);
  const [formattedDate, setFormattedDate] = useState(""); // Almacena la fecha seleccionada en formato ISO

  // useEffect para obtener datos de la API cuando cambian el periodo de tiempo o la fecha
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        const formattedDate = selectedDate.toISOString(); // Formatea la fecha seleccionada a formato ISO
        setFormattedDate(formattedDate);

        // Realiza la solicitud a la API según el periodo de tiempo seleccionado
        if (timeFrame === "hour") {
          response = await axios.get(`https://orm-pared-eolica.vercel.app/api/v1/getAllMinutes?date=${formattedDate}`);
          setHourChart(response.data);
        } else if (timeFrame === "day") {
          response = await axios.get(`https://orm-pared-eolica.vercel.app/api/v1/getAllHours?date=${formattedDate}`);
          setDayChart(response.data);
        } else if (timeFrame === "month") {
          response = await axios.get(`https://orm-pared-eolica.vercel.app/api/v1/read30days?date=${formattedDate}`);
          setMonthChart(response.data);
        } else if (timeFrame === "year") {
          response = await axios.get(`https://orm-pared-eolica.vercel.app/api/v1/readAllMonths?date=${formattedDate}`);
          setYearChart(response.data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [timeFrame, selectedDate]); // Ejecutar cada vez que cambie `timeFrame` o `selectedDate`

  // Función para obtener los datos correctos según el periodo de tiempo
  const getDataForTimeFrame = () => {
    switch (timeFrame) {
      case "hour":
        return {
          labels: Array.from({ length: 60 }, (_, i) => `${i + 1}`), // Minutos del gráfico para la vista "hour"
          data: hourChart ? Array.from({ length: 60 }, (_, i) => hourChart[i + 1] || 0) : [],
        };
      case "day":
        return {
          labels: Array.from({ length: 24 }, (_, i) => `${i + 1}`), // Horas del día para la vista "day"
          data: dayChart ? Array.from({ length: 24 }, (_, i) => dayChart[i + 1] || 0) : [],
        };
      case "month":
        return {
          labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`), // Días del mes para la vista "month"
          data: monthChart ? Array.from({ length: 30 }, (_, i) => monthChart[String(i + 1).padStart(2, "0")] || 0) : [],
        };
      case "year":
        return {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Meses del año para la vista "year"
          data: yearChart ? Array.from({ length: 12 }, (_, i) => yearChart[i + 1] || 0) : [],
        };
      default:
        return { labels: [], data: [] };
    }
  };

  // Extrae los datos del gráfico y las etiquetas correspondientes
  const { labels, data } = getDataForTimeFrame();

  // Configuración de datos y opciones para la gráfica
  const chartData = {
    labels,
    datasets: [
      {
        label: "mW Generated",
        data,
        borderColor: "#3182CE",
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
        display: false, // Ocultar la leyenda del gráfico
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text:
            timeFrame === "hour"
              ? "Minutes"
              : timeFrame === "day"
              ? "Hours"
              : timeFrame === "month"
              ? "Days"
              : "Months", // Cambiar el título del eje X según la vista seleccionada
          color: "#4A5568",
        },
        grid: { display: false },
        ticks: { color: "#4A5568" },
      },
      y: {
        title: {
          display: true,
          text: "mW Generated", // Título del eje Y
          color: "#4A5568",
        },
        grid: { display: false },
        ticks: { color: "#4A5568" },
      },
    },
  };

  return (
    <Box bg="white" borderRadius="lg" shadow="md" p="6" height="500px" width="100%">
      <Flex justify="space-between" mb="4" alignItems="center">
        {/* Título principal del gráfico y visualización de la fecha seleccionada */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">Generated this {timeFrame}</Text>
          <Text fontSize="sm" color="gray.500">
            Selected Date: {selectedDate.toLocaleDateString()} {selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </Box>
        {/* Contenedor de los botones de selección y el DatePicker */}
        <HStack>
          {/* Botones para seleccionar el periodo de tiempo */}
          <ButtonGroup size="sm" isAttached variant="outline">
            <Button onClick={() => setTimeFrame("hour")} isActive={timeFrame === "hour"}>
              Hour
            </Button>
            <Button onClick={() => setTimeFrame("day")} isActive={timeFrame === "day"}>
              Day
            </Button>
            <Button onClick={() => setTimeFrame("month")} isActive={timeFrame === "month"}>
              Month
            </Button>
            <Button onClick={() => setTimeFrame("year")} isActive={timeFrame === "year"}>
              Year
            </Button>
          </ButtonGroup>
          {/* Selector de fecha con DatePicker */}
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)} // Actualiza el estado con la nueva fecha seleccionada
            showTimeSelect // Mostrar las horas para la vista de "hour"
            showTimeSelectOnly={false}
            timeIntervals={60} // Mostrar solo horas completas
            dateFormat="MMMM d, yyyy h:mm aa"
            popperPlacement="bottom-end" // Coloca el pop-up del calendario hacia abajo y a la derecha
            customInput={
              <Button borderRadius="md" border="1px" borderColor="gray.300" boxShadow="sm" bg="white" _hover={{ bg: "gray.100" }}>
                Select Date
              </Button>
            }
          />
        </HStack>
      </Flex>
      {/* Contenedor de la gráfica */}
      <Box h="400px">
        <Line data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
}
