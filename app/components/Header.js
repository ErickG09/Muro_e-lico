"use client";
import { usePathname } from 'next/navigation'; // Importar el hook usePathname
import { Flex, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

export default function Header({ children }) {
  const pathname = usePathname(); // Obtener la ruta actual

  // Determinar la página actual en base a la ruta
  const getPageName = () => {
    switch (pathname) {
      case "/":
        return "Main";
      case "/Helices":
        return "Propellers";
      case "/Historial":
        return "History";
      default:
        return "Main"; // Fallback por defecto a "Main"
    }
  };

  return (
    <Flex
      as="header"
      w="full"
      h="16"
      px="8"
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top="0"
      left="0"
      zIndex="1000" // Asegurar que esté encima del contenido
    >
      {/* Contenido centrado del Header */}
      <Box>
        <Breadcrumb separator="/" fontSize="lg" color="gray.700">
          <BreadcrumbItem>
            <BreadcrumbLink href="/"><FaHome /></BreadcrumbLink> {/* Ruta a la página principal */}
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Wind wall</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            {/* Mostrar el nombre de la página actual */}
            <BreadcrumbLink href="#">{getPageName()}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>

      {/* Botón de cierre del menú se posiciona en la derecha (pasado como children) */}
      <Box position="absolute" right="16px">
        {children}
      </Box>
    </Flex>
  );
}
