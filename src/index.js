import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';
import { orange, green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';



const myName = 'Приветствую!';



const outerTheme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
  });
  
  const innerTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });
  
ReactDOM.render( 
    <React.StrictMode>
     
       <ThemeProvider theme={outerTheme}>
          <Checkbox defaultChecked /> 
       
          </ThemeProvider>
  
       <ThemeProvider theme={innerTheme}>
        <Checkbox defaultChecked />
        <App name = { myName }  /> 
</ThemeProvider>

    </React.StrictMode> ,
    document.getElementById('root')
);