import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif',
  },
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      light: '#EDF7FA',
      main: '#00A8CC',
    },
    error: {
      main: '#f44336',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px', // default 680px
          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          maxWidth: '860px', // default 860px
          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
      },
      defaultProps: {
        maxWidth: 'md',
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'black',
          '&:hover, &.active': {
            color: '#FF6464',
          },
        },
      },
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: 'white',
          },
        },
      ],
    },
  },
})
