"use client";
import { Button as ChakraButton, Icon, keyframes } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

// Definimos la animación de deslizamiento y rebote
// const slideIn = keyframes`
//   from { transform: translateX(100%); opacity: 0; }
//   to { transform: translateX(0); opacity: 1; }
// `;

// const bounce = keyframes`
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-5px); }
// `;

const ButtonTest = ({ onClick, loading = false, icon = <FaArrowRight />, ...props }) => {
  return (
    <ChakraButton
      onClick={onClick}
      colorScheme="teal" 
      variant="solid" 
      borderRadius="full" 
      p="0" 
      w="16" 
      h="16" 
      fontSize="lg"
     
      transition="all 0.2s ease-in-out"
      isLoading={loading}
      spinnerPlacement="center"
      iconSpacing="0"
      {...props}
    >
      {!loading && <Icon as={icon.type} />} {/* Usa el ícono pasado como prop */}
    </ChakraButton>
  );
};

export default ButtonTest;
