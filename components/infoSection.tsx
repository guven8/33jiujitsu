import { Container } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export default function InfoSection(props: PropsWithChildren<{ id: string }>) {
  return (
    <Container
      id={props.id}
      maxW="4xl"
      py={['50px', '50px', '80px', '120px']}
      px="20px"
    >
      {props.children}
    </Container>
  );
}
