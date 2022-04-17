import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      // 'html, body, #__next': {
      //   height: '100%'
      // },
      html: {
        scrollBehavior: 'smooth'
      },
      '#__next': {
        width: '100vw',
        overflowX: 'hidden'
      },
      body: {
        fontFamily: 'PT Serif, serif',
        overflowX: 'hidden',
        background: 'black',
        color: 'white',
        textAlign: 'center',
        paddingTop: '100px',
        paddingBottom: '80px'
      },
      '.carousel-root': { width: '100%' }
    }
  }
});

export default theme;
