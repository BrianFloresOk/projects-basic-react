import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ProgressBar } from '../components/ProgressBar'
import { ShowHideMessage } from '../components/ShowHideMessage'

export const routesPublic =  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/*",
      element: <Error404 />,
    },
    {
      path: "/show-hide-message",
      element: <ShowHideMessage />,
    },
    {
      path: "/progress-bar",
      element: <ProgressBar />,
    }
  ]