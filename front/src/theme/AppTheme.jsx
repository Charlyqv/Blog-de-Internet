import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { grayTheme } from './';


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ grayTheme }>
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}
