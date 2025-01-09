import { Theme } from '@mui/material/styles'

interface CustomShadowOptions {
  z1: Theme
  z4: string
  z8: string
  z12: string
  z16: string
  z20: string
  z24: string
  //
  primary: string
  secondary: string
  info: string
  success: string
  warning: string
  error: string
  master: string
  //
  card: string
  dialog: string
  dropdown: string
}

interface MasterPaletteColor {
  primary: string
  secondary: string
  additional: string
  additionalDark: string
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowOptions
  }
  interface Palette {
    master: Palette['primary']
  }
  interface PaletteOptions {
    master?: PaletteOptions['primary']
  }
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string
  }
  interface SimplePaletteColorOptions {
    lighter: string
    darker: string
  }
  interface PaletteColor {
    lighter: string
    darker: string
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    master: true
  }
}
