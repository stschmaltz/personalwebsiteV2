import { lifecycle } from 'recompose'
import { trackPageView } from '../../lib/ga'

const withPageView = lifecycle({
  componentDidMount() {
    if (window.location.pathname) {
      trackPageView(window.location.pathname)
    }
  },
})

export default withPageView
