import React from 'react'
import Router from './routes/Router'
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Box } from '@chakra-ui/layout';
import GlobalState from './Global/GlobalState'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box border='1px solid' borderColor='#C4C4C4' minW="360px" minH="640px">
        <GlobalState>
          <Router/>
        </GlobalState>
      </Box>
    </ThemeProvider>
  );
}

export default App;
