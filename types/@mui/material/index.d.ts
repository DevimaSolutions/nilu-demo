import type { PaletteColorOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    magenta?: PaletteColorOptions;
    purple?: PaletteColorOptions;
    orange?: PaletteColorOptions;
  }
}
declare module '@mui/material/Button/Button' {
  interface ButtonPropsColorOverrides {
    magenta: true;
    purple: true;
    orange: true;
  }
}

declare module '@mui/material/SvgIcon/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    magenta: true;
    purple: true;
    orange: true;
  }
}