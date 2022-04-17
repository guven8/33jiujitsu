import { Heading, Stack, Text } from '@chakra-ui/react';
import InfoSection from './infoSection';

export default function Pricing() {
  return (
    <InfoSection id="pricing">
      <Heading as="h4" size="2xl" mb="40px" fontFamily="inherit">
        Pricing
      </Heading>
      <Stack gap="20px">
        <Text fontSize="large">£60 per month</Text>
      </Stack>
    </InfoSection>
  );
}
