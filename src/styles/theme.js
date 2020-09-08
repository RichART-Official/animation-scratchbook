const theme = {}

const white = "#FFFFFF"
const black = "#000000"
const shadow = "rgba(0,0,0,0.55)"
const transparentBlack = "rgba(0,0,0,0.33)"
const transparentWhite = "rgba(255,255,255,0.15)"
const lightGray = "#F6F6F6"

theme.colors = {
  black,
  white,
  shadow,
  transparentBlack, 
  transparentWhite,
  bgLight: lightGray,
}

theme.breakpoints = {
  xs: "48em",
  sm: "64em",
  md: "85.375em",
  lg: "122em",
  xl: "160em",
  xxl: "192em",
}

theme.mediaQuery = {
  xs: `(min-width: ${theme.breakpoints.xs})`,
  sm: `(min-width: ${theme.breakpoints.sm})`,
  md: `(min-width: ${theme.breakpoints.md})`,
  lg: `(min-width: ${theme.breakpoints.lg})`,
  xl: `(min-width: ${theme.breakpoints.xl})`,
  xxl: `(-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-width: ${theme.breakpoints.xxl})`,
}

theme.container = {
  xxs: "1vw",
  xs: "4vw",
  sm: "8vw",
  md: "12vw",
  lg: "18vw",
  xl: "25vw",
}

theme.typography = {
  base: {
    size: "1em",
    lineHeight: "1.66em",
    font: ["Source Sans Pro", "sans-serif"],
  },
  heading: {
    lineHeight: "1.11em",
    font: ["Karla", "sans-serif"],
  },
}

export default theme
