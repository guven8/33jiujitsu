import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Box
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

type P = {
  navLinks: { name: string; href: string }[];
};

export default function MobileMenu(props: P) {
  const router = useRouter();

  return (
    <Box display={['block', 'block', 'none']}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon color="white" />}
          variant="outline"
          color="black"
        />
        <MenuList>
          {props.navLinks.map((navLink) => (
            <MenuItem
              color="black"
              key={navLink.href}
              onClick={() => router.push(navLink.href)}
            >
              {navLink.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
