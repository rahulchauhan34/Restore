import React, { useEffect,useState } from 'react';

import Catalog from '../../features/catalog/catalog';
import { Container, Typography, createTheme } from '@mui/material';
import Header from './Header';
import { ThemeProvider } from '@emotion/react';
import { Outlet } from 'react-router-dom';





function App() {
 
const [darkMode,setDarkmode]=useState(false);
const palleteType=darkMode?'dark':'light';


const theme=createTheme({
  palette:{
    mode:palleteType
  }
})

  return (
    <ThemeProvider theme={theme} >
      <Header darkMode={darkMode} setDarkmode={setDarkmode}/>
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
