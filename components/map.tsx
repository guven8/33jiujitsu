import { Box, Button } from '@chakra-ui/react';
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
mapboxgl.accessToken =
  'pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg';
import { MdLocationPin } from 'react-icons/md';

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const gymLocation = [-0.1130915, 51.5858301];
  const [recenterVisible, setRecentreVisible] = useState(false);
  const [pinVisible, setPinVisible] = useState(true);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as any,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: gymLocation as any,
      zoom: 17
    });
    map.current.on('move', () => {
      setRecentreVisible(true);
      setPinVisible(false);
    });
  });
  const handleRecentre = () => {
    map.current?.setCenter(gymLocation as any);
    setPinVisible(true);
  };

  return (
    <Box ref={mapContainer} className="map-container" h="400px" my="40px">
      <Button
        pos="absolute"
        top="10px"
        left="10px"
        zIndex="100"
        color="black"
        fontSize="large"
        hidden={!recenterVisible}
        onClick={handleRecentre}
      >
        Recenter
      </Button>
      <Box
        as={MdLocationPin}
        color="blue.500"
        position="absolute"
        w="40px"
        h="40px"
        borderRadius="full"
        zIndex="100"
        left="calc(50% - 20px)"
        top="calc(50% - 20px)"
        hidden={!pinVisible}
      />
    </Box>
  );
}
