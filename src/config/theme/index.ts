import { createTheme } from '@mui/material/styles';

export const colors = {
  grey: {
    3: '#F5F5F5',
    4: '#F0F0F0',
    5: '#D9D9D9',
    6: '#BFBFBF',
    7: '#8C8C8C',
    8: '#595959',
    9: '#434343',
    10: '#262626',
  },
  magenta: {
    5: '#F759AB',
  },
  purple: {
    5: '#9254DE',
  },
  orange: {
    5: '#FA8C16',
  },
} as const;

export const dimensions = {
  headerHeight: 54,
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#1890FF',
      light: '#BAE7FF',
    },
    error: {
      main: '#F5222D',
    },
    text: {
      primary: colors.grey[9],
    },
    grey: {
      300: colors.grey[3],
      400: colors.grey[4],
      500: colors.grey[5],
      600: colors.grey[6],
      700: colors.grey[7],
      800: colors.grey[8],
      900: colors.grey[9],
      A100: colors.grey[10],
    },
    magenta: {
      main: colors.magenta[5],
      500: colors.magenta[5],
      contrastText: '#fff',
    },
    purple: {
      main: colors.purple[5],
      500: colors.purple[5],
      contrastText: '#fff',
    },
    orange: {
      main: colors.orange[5],
      500: colors.orange[5],
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif;",
    //12px | 20px
    caption: {
      fontSize: '0.75rem',
      lineHeight: '1.67',
    },
    //14px | 22px
    body1: {
      fontSize: '0.875rem',
      lineHeight: '1.57',
    },
    //16px | 24px
    body2: {
      fontSize: '1rem',
      lineHeight: '1.5',
    },
    //20px | 28px
    subtitle1: {
      fontSize: '1.25rem',
      lineHeight: '1.4',
    },
    //24px | 32px
    subtitle2: {
      fontSize: '1.5rem',
      lineHeight: '1.33',
    },
    //38px | 32px
    h2: {
      fontSize: '2.375rem',
      lineHeight: '1.21',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 0.5,
          boxShadow: 'none !important',
          '&:hover, &:active, &:focus': {
            boxShadow: 'none !important',
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          '& svg > circle': {
            strokeWidth: '2px',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: 16,
          borderRadius: 10,
          maxWidth: 568,
        },
      },
    },
  },
});

export default theme;
