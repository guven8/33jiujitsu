import {
  TableContainer,
  Table,
  TableCaption,
  Tr,
  Tbody,
  Td,
  Heading,
  Stack
} from '@chakra-ui/react';
import InfoSection from './infoSection';

export default function Timetable() {
  return (
    <InfoSection id="timetable">
      <Heading as="h4" size="2xl" mb="40px" fontFamily="inherit">
        Timetable
      </Heading>
      <Stack gap="20px">
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Expanding in May</TableCaption>
            <Tbody>
              <Tr>
                <Td isNumeric>Teusday</Td>
                <Td>Friday</Td>
              </Tr>
              <Tr>
                <Td isNumeric>Adults 8 - 9PM</Td>
                <Td>Kids 5 - 6PM</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td>Adults 7 - 8PM</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </InfoSection>
  );
}
