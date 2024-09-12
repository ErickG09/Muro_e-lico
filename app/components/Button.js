import { Button as ChakraButton } from "@chakra-ui/react";

const Button = ({ onClick, children, ...props }) => {
  return (
    <ChakraButton 
      onClick={onClick} 
      colorScheme="green" 
      variant="solid" 
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
