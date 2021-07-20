import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import themeList from './theme';
import Routes from './routes';
import './App.css';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <MuiThemeProvider theme={themeList[0]}>
      <Box p={5}>
        <Routes />
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
