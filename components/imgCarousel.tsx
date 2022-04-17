import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

export default function ImgCarousel() {
  const images = ['/studio.jpeg', '/class-adults.jpeg', '/class-kids.jpeg'];

  return (
    <Carousel
      width="100%"
      autoPlay
      interval={3000}
      infiniteLoop
      showStatus={false}
    >
      {images.map((image) => (
        <Box w="100%" h="calc(100vh - 100px)" key={image}>
          <Image src={image} alt="studio" layout="fill" objectFit="cover" />
        </Box>
      ))}
    </Carousel>
  );
}
