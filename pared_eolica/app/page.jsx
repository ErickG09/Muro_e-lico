import Image from "next/image";
import { 
  ChakraProvider, 
  Button, 
  ButtonGroup,
  CircularProgress,
  CircularProgressLabel,
  Flex 
} from '@chakra-ui/react'

export default function Home() {
  return (
    
    <ChakraProvider>

      <h1>Hola</h1>
      <Flex direction='row'>
        <Button colorScheme="blue">Button</Button>

        <CircularProgress value={40} color='green.400'>
          <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>
      </Flex>

    </ChakraProvider>
  );
}
