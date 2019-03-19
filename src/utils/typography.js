import Typography from "typography"
import CodePlugin from "typography-plugin-code"
import doelgerTheme from "typography-theme-doelger"

doelgerTheme.includeNormalize = true

doelgerTheme.overrideStyles = (
  { adjustFontSizeTo, rhythm },
  options,
  styles
) => ({
  h1: {
    fontFamily: ["Limelight", "sans-serif"].join(","),
  },
  "a, a:hover": {
    color: "black",
    textDecoration: "none",
  },
})
doelgerTheme.plugins = [new CodePlugin()]

export default new Typography(doelgerTheme)
