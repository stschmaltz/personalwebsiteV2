import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'
import irvingTheme from 'typography-theme-irving'
import stowLakeTheme from 'typography-theme-stow-lake'
import twinPeaksTheme from 'typography-theme-twin-peaks'

stowLakeTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5': {
    marginTop: rhythm(0),
  },
})

const typography = new Typography(stowLakeTheme)

export default typography
