import React from 'react'
import Router from './routes/Router'
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Box } from '@chakra-ui/layout';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box border='1px solid' borderColor='#C4C4C4' w="360px" h="640px">
        <Router/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
