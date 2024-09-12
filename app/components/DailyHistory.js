import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading } from '@chakra-ui/react';

const DailyHistory = () => {
  const data = [
    { fecha: '30/08/2024', energia: 300 },
    { fecha: '29/08/2024', energia: 280 },
    { fecha: '28/08/2024', energia: 290 },
  ];

  return (
    <TableContainer width="90%" >
      <Heading size="md" marginBottom="20px">Energía por día</Heading>
      <Table variant="simple" >
        <Thead>
          <Tr>
            <Th backgroundColor="green.400" color="white" borderLeftRadius="15px">Fecha</Th>
            <Th backgroundColor="green.400" color="white" borderRightRadius="15px">Energía total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>{row.fecha}</Td>
              <Td>{row.energia}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DailyHistory;
