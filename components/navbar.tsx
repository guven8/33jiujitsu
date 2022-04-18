import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import DesktopMenu from './desktopMenu';
import MobileMenu from './mobileMenu';

export default function Navbar() {
  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Location', href: '/#location' },
    { name: 'Timetable', href: '/#timetable' },
    { name: 'Pricing', href: '/#pricing' }
  ];

  return (
    <Flex
      h="100px"
      justify="space-between"
      align="center"
      pos="fixed"
      top="0"
      w="100%"
      bg="blackAlpha.800"
      px={['20px', '40px', '40px', '60px', '100px']}
      zIndex="100"
    >
      <Box>
        <Link href="/" passHref>
          <Text fontSize="3xl" as="a">
            柔術 33 Jiu Jitsu
          </Text>
        </Link>
      </Box>
      <DesktopMenu navLinks={navLinks} />
      <MobileMenu navLinks={navLinks} />
    </Flex>
  );
}
