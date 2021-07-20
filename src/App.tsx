import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import themeList from './theme';
import Routes from './routes';
import './App.css';

function App() {
  return (
    <MuiThemeProvider theme={themeList[0]}>
      <Routes />
    </MuiThemeProvider>
  );
}

export default App;
