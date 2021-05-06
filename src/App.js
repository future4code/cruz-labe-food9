import React from 'react'
import Router from './routes/Router'
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
<<<<<<< HEAD
import { Box } from '@chakra-ui/layout';
import GlobalState from './Global/GlobalState'
=======

>>>>>>> 67eacc6daac23634d6b51a12f8d8fa6d02e6c194


const App = () => {
  return (
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <Box border='1px solid' borderColor='#C4C4C4' w="360px" h="640px">
        <GlobalState>
          <Router />
        </GlobalState>
      </Box>
=======
        <Router/>
>>>>>>> 67eacc6daac23634d6b51a12f8d8fa6d02e6c194
    </ThemeProvider>
  );
}

export default App;
