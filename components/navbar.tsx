import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsInstagram } from 'react-icons/bs';

export default function Navbar() {
  const router = useRouter();
  const navigation = [
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
      px="100px"
      zIndex="1"
    >
      <Box>
        <Link href="/" passHref>
          <Text fontSize="3xl" as="a">
            柔術 33 Jiu Jitsu
          </Text>
        </Link>
      </Box>
      <Flex gap="30px" align="center">
        {navigation.map((item) => {
          const current = router.asPath === item.href;
          return (
            <Link href={item.href} key={item.name} passHref>
              <Text
                as="a"
                textDecor={current ? 'underline' : 'none'}
                aria-current={current ? 'page' : undefined}
              >
                {item.name}
              </Text>
            </Link>
          );
        })}
        <a
          href="https://www.instagram.com/33jiujitsu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram fontSize="2rem" />
        </a>
      </Flex>
    </Flex>
  );
}
