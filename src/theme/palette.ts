import { alpha } from "@mui/material/styles";

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "master";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

const GREY = {
  // 0: "#FFFFFF",
  // 100: "#F9FAFB",
  // 200: "#F4F6F8",
  // 300: "#DFE3E8",
  // 400: "#C4CDD5",
  // 500: "#919EAB",
  // 600: "#637381",
  // 700: "#454F5B",
  // 800: "#212B36",
  // 900: "#161C24",
  50: "#FCFDFD",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#1C252E",
  900: "#141A21",
};

// #3866b1
const MASTER = {
  lighter: "#7AA2E3",
  light: "#7AA2E3",
  main: "#3866b1",
  dark: "#003DA6",
  darker: "#002D74",
  contrastText: "#fff",
};

const PRIMARY = {
  lighter: "#D1E9FC",
  light: "#76B0F1",
  main: "#2065D1",
  dark: "#103996",
  darker: "#061B64",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#CCF4FE",
  light: "#68CDF9",
  main: "#078DEE",
  dark: "#0351AB",
  darker: "#012972",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#CAFDFC",
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#D3FCD2",
  light: "#77ED8B",
  main: "#22C55E",
  dark: "#118D57",
  darker: "#065E49",
  contrastText: "#ffffff",
};

// const WARNING = {
//   lighter: '#FFF5CC',
//   light: '#FFD666',
//   main: '#FFAB00',
//   dark: '#B76E00',
//   darker: '#7A4100',
//   contrastText: GREY[800],
// }

const WARNING = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#f3d210", // Yellow color you provided
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#FFFFFF",
};

// const MASTER = {
//   lighter: '#5EB3E4',
//   light: '#0071CE',
//   main: '#003DA6',
//   dark: '#002D74',
//   darker: '#002D74',
//   contrastText: '#fff',
// }

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: MASTER,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  master: PRIMARY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode: "light" | "dark") {
  const light = {
    ...COMMON,
    mode: "light",
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: {
      paper: "#FFFFFF",
      default: GREY[100],
      neutral: GREY[200],
    },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  } as const;

  const dark = {
    ...COMMON,
    mode: "dark",
    text: {
      primary: "#fff",
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[200],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  } as const;

  return themeMode === "light" ? light : dark;
}
