'use client'
import { 
    ChakraProvider, 
    Flex,
    Heading
  } from '@chakra-ui/react'
import { useRouter } from "next/navigation";
import Button from '../components/Button';
import HistoryContainer from '../components/HistoryContainer';
import ChartsContainer from '../components/ChartsContainer';
import Link from 'next/link';

export default function HistorialPage() {
    const router = useRouter();
    return (
        <ChakraProvider>
            <Flex direction="column" align="center" justify="" height="100vh" padding="20px">
                <Flex width="90%" justify="space-between" align="center" marginBottom="30px">
                    <Heading size="lg">Historial de energía generada</Heading>
                    <Link href={'/'}>
                        <Button>
                            Home
                        </Button>
                    </Link>
                </Flex>
                <HistoryContainer/> 
                <ChartsContainer/>
            </Flex>
        </ChakraProvider>
    );
  }