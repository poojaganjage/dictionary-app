import React from 'react';
import TextField from '@mui/material/TextField';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import './Header.css';

function Header({input, setInput}) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      mode: 'dark'
    }
  });
  return (
    <div className='header'>
      <span className='title'>Word {input ? input : 'Finder'}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField 
            className='search' 
            id='standard-basic' 
            label='Search Your Word' 
            variant='standard' 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}
export default Header;
