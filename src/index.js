import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider, ColorModeScript, extendTheme} from '@chakra-ui/react';


const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({
  config, 
  colors: {
    brand: {
        100: "#5cb646",
        900: '#121212',
      },
    },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

