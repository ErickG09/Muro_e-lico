"use client";
import { Button as ChakraButton, Icon } from "@chakra-ui/react";
import { FaFileExport } from "react-icons/fa";

const Button = ({ onClick, children, ...props }) => {
  return (
    <ChakraButton
      onClick={onClick}
      colorScheme="gray" 
      variant="outline" 
      leftIcon={<Icon as={FaFileExport} />} 
      size="md" 
      _hover={{ bg: "gray.100" }} 
      _active={{ bg: "gray.200" }} 
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
