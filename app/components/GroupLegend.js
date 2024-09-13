import { Box, Flex, Text, Icon, Spacer } from '@chakra-ui/react';

const GroupLegend = () => {
  const groups = [
    { name: 'Grupo 1', turbines: 'Hélice 1, Hélice 2', color: '#FF6384' },
    { name: 'Grupo 2', turbines: 'Hélice 3', color: '#FF9F40' },
    { name: 'Grupo 3', turbines: 'Hélice 4, Hélice 5', color: '#36A2EB' },
  ];

  return (
    <Box>
        <Text fontSize="md" as={'b'}>
          Total Generado el día de hoy
        </Text>
      {groups.map((group, index) => (
        <Flex key={index} align="center" marginBottom="20px" marginTop='20px' marginLeft='30px'>

          <Box
            width="12px"
            height="12px"
            backgroundColor={group.color}
            borderRadius="50%"
            marginRight="10px"
          />
          <Text fontSize="sm">
            <strong>{group.name}</strong> <br /> {group.turbines}
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default GroupLegend;
