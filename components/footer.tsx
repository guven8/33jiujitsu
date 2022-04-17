import { Flex } from '@chakra-ui/react';
import { BsInstagram } from 'react-icons/bs';

export default function Footer() {
  return (
    <Flex
      pos="fixed"
      bottom="0"
      w="100%"
      h="100px"
      justify="center"
      align="center"
      bg="blackAlpha.800"
    >
      <a
        href="https://www.instagram.com/33jiujitsu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram fontSize="2rem" />
      </a>
    </Flex>
  );
}
