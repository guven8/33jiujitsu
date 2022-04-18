import { Box, Text, Fade } from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import About from '../components/about';
import ImageSection from '../components/imageSection';
import Location from '../components/location';
import Timetable from '../components/timetable';
import Pricing from '../components/pricing';

export default function Home() {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    let timeout: any = null;
    if (offset < 200) {
      timeout = setTimeout(() => {
        setHeadingVisible(true);
      }, 1500);
    } else {
      setHeadingVisible(false);
    }
    return () => window.clearTimeout(timeout);
  }, [offset, headingVisible, setHeadingVisible]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A jiu jitsu training center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fade in={headingVisible}>
        <Box pos="absolute" mt="200px" width="100%" zIndex="100">
          <Text
            color="white"
            fontSize={['6xl', '8xl', '8xl', '8xl']}
            fontWeight="extrabold"
          >
            柔<br />術<br /> 33 Jiu Jitsu
          </Text>
        </Box>
      </Fade>
      <Box as="main">
        <ImageSection image="/class-adults.jpeg" />
        <About />
        <ImageSection image="/studio.jpeg" />
        <Location />
        <ImageSection image="/competition.jpeg" />
        <Timetable />
        <ImageSection image="/class-kids.jpeg" />
        <Pricing />
      </Box>
    </>
  );
}
