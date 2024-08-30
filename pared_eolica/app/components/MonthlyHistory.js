import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading } from '@chakra-ui/react';

const MonthlyHistory = () => {
  const data = [
    { mes: 'Agosto 2024', energia: 300 },
    { mes: 'Septiembre 2024', energia: 300 },
    { mes: 'Octubre 2024', energia: 300 },
  ];

  return (
    <TableContainer marginTop="30px" width="90%">
      <Heading size="md" marginBottom="20px">Energía por mes</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th backgroundColor="green.400" color="white" borderLeftRadius="15px">Mes</Th>
            <Th backgroundColor="green.400" color="white" borderRightRadius="15px">Energía total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>{row.mes}</Td>
              <Td>{row.energia}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MonthlyHistory;
