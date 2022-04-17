import { Heading, Text } from '@chakra-ui/react';
import InfoSection from './infoSection';

export default function About() {
  return (
    <InfoSection id="about">
      <Heading as="h2" size="4xl" mb="40px" fontFamily="inherit">
        柔<br />術<br />
        33 Jiu Jitsu
      </Heading>
      <Text fontSize="large">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti
        aliquam quidem animi, sed quo magnam maiores repudiandae accusantium,
        aspernatur doloribus fugiat iusto ducimus pariatur numquam, eveniet
        illum excepturi vitae.
      </Text>
      <Text fontSize="large">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti
        aliquam quidem animi, sed quo magnam maiores repudiandae accusantium,
        aspernatur doloribus fugiat iusto ducimus pariatur numquam, eveniet
        illum excepturi vitae.
      </Text>
    </InfoSection>
  );
}
