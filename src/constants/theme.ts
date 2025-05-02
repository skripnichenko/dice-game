import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        main: '#000000DE',
      },
      secondary: {
        main: '#9C27B0',
      },
      success: {
        main: '#2E7D32',
        contrastText: '#FFFFFF'
      },
      error: {
        main: '#D32F2F',
        contrastText: '#FFFFFF'
      }
    },
  });