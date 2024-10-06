"use client";

import { Box, Text, Flex, Progress, VStack } from "@chakra-ui/react";

const daysData = [
  { day: "Monday", value: 8 },
  { day: "Tuesday", value: 12 },
  { day: "Wednesday", value: 7 },
  { day: "Thursday", value: 20 },
  { day: "Friday", value: 6 },
  { day: "Saturday", value: 10 },
  { day: "Sunday", value: 8 },
];

const maxValue = 20; // Valor máximo para las barras de progreso

export default function DayProgress() {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      shadow="md"
      p="4"
      height="370px" // Ajustar la altura a 370px
      display="flex"
      flexDirection="column"
      justifyContent="center" // Centrar el contenido verticalmente
    >
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Days
      </Text>
      <VStack align="stretch" spacing="1" flex="1" justifyContent="space-evenly"> {/* Distribuir espacio entre elementos */}
        {daysData.map((data, index) => (
          <Flex key={index} justify="space-between" align="center" w="full" py="1">
            <Text fontWeight="medium" w="25%" fontSize="sm"> {/* Reducir tamaño del texto */}
              {data.day}
            </Text>
            <Box w="50%" mx="2"> {/* Ajustar ancho y agregar margen horizontal */}
              <Progress
                value={(data.value / maxValue) * 100} // Calcular el porcentaje en base al valor máximo
                size="xs" // Tamaño pequeño para la barra de progreso
                colorScheme="teal"
                borderRadius="md"
                hasStripe
                height="4px" // Reducir altura de la barra
                isAnimated
              />
            </Box>
            <Text w="25%" textAlign="right" fontSize="sm"> {/* Reducir tamaño del texto y ajustar ancho */}
              {data.value} Watts
            </Text>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}
