import { Box, Image } from '@chakra-ui/react';

type P = {
  image: string;
};

export default function ImageSection(props: P) {
  const name = props.image?.split('.')?.[0]?.replace('/', '') ?? 'image';

  return (
    <Box width="100%" h="calc(100vh - 100px)" overflow="hidden">
      <Image
        src={props.image}
        alt={name}
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </Box>
  );
}
