import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
// import Footer from './footer';
import Navbar from './navbar';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />
      <Box overflowY="scroll">{children}</Box>
      {/* <Footer /> */}
    </>
  );
}
