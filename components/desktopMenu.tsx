import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import router from 'next/router';
import { BsInstagram } from 'react-icons/bs';

type P = {
  navLinks: { name: string; href: string }[];
};

export default function DesktopMenu(props: P) {
  return (
    <Flex gap="30px" align="center" display={['none', 'none', 'flex']}>
      {props.navLinks.map((item) => {
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
  );
}
