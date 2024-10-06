"use client";
import { useEffect, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
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

// Registrar los elementos de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const getFormattedDate = () => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date().toLocaleDateString("en-US", options);
};

export default function EnergyChart({ isSidebarOpen }) {
  const [currentDate, setCurrentDate] = useState("");
  const [displayData, setDisplayData] = useState([]);
  const [displayLabels, setDisplayLabels] = useState([]);
  const [chartWidth, setChartWidth] = useState("100%");

  useEffect(() => {
    // Establecer la fecha inicial cuando se cargue en el cliente
    setCurrentDate(getFormattedDate());
  }, []);

  useEffect(() => {
    const fullData = [
      0.1, 0.3, 0.2, 0.5, 0.4, 0.7, 0.6, 0.8, 0.5, 0.7, 0.9, 0.8, 0.6, 0.7,
      0.5, 0.4, 0.3, 0.2, 0.4, 0.5, 0.6, 0.4, 0.3, 0.1,
    ]; // Datos completos
    const fullLabels = Array.from({ length: 24 }, (_, i) => i); // Etiquetas completas

    if (isSidebarOpen) {
      setDisplayData(fullData.filter((_, index) => index % 2 === 0));
      setDisplayLabels(fullLabels.filter((_, index) => index % 2 === 0));
      setChartWidth("75%"); // Reducir el ancho cuando el sidebar está abierto
    } else {
      setDisplayData(fullData);
      setDisplayLabels(fullLabels);
      setChartWidth("100%"); // Ancho completo cuando el sidebar está cerrado
    }
  }, [isSidebarOpen]);

  const data = {
    labels: displayLabels,
    datasets: [
      {
        label: "mW Generados",
        data: displayData,
        borderColor: "#4A5568",
        backgroundColor: "#CBD5E0",
        pointBackgroundColor: "#4A5568",
        pointBorderColor: "#4A5568",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <Box
      bg="white"
      borderRadius="lg"
      shadow="md"
      p="6"
      height="370px"
      width={chartWidth} // Ajustar el ancho basado en `chartWidth`
      transition="width 0.3s ease-in-out"
    >
      <Flex justify="space-between" mb={4}>
        <Text fontSize="xl" fontWeight="bold">
          Generated today
        </Text>
        <Text as="span" fontSize="md" fontWeight="medium" color="gray.500">
          {currentDate}
        </Text>
      </Flex>
      <Box h="250px" width="100%">
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
}
