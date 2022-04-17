import { Heading, Stack, Text } from '@chakra-ui/react';
import InfoSection from './infoSection';
import Map from './map';

export default function Location() {
  return (
    <InfoSection id="location">
      <Heading as="h4" size="2xl" mb="40px" fontFamily="inherit">
        Location
      </Heading>
      <Stack gap="20px">
        <Stack>
          <Text fontSize="large">Ymca Harringay club</Text>
          <Text fontSize="large">50 Tottenham Ln</Text>
          <Text fontSize="large">London</Text>
          <Text fontSize="large">N8 3EE</Text>
        </Stack>
        <Stack>
          <Text fontSize="xl" fontWeight="extrabold">
            Hours
          </Text>
          <Text fontSize="large">Tuesday</Text>
          <Text fontSize="large">5:00 PM–8:00 PM</Text>
          <Text fontSize="large">Friday</Text>
          <Text fontSize="large">5:00 PM–8:00 PM</Text>
        </Stack>
        <Stack>
          <Text fontSize="xl" fontWeight="extrabold">
            Phone
          </Text>
          <Text fontSize="large">07506509924</Text>
        </Stack>
      </Stack>
      <Map />
    </InfoSection>
  );
}
