import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './layout/Header/Header';
import Wrapper from './layout/Wrapper';
import Home from './layout/Components/Home';
const theme = createTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "rgb(39,49,66)"
    },
    secondary: {
      main: "rgb(197,208,222)"
    },
    background: {
      main: "rgb(226,231,238)"
    }
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Wrapper>
      <Header />
      <Home />
   
    </Wrapper>
    </ThemeProvider>
  );
}

export default App;
