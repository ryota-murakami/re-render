import { createBrowserRouter } from 'react-router-dom'

import ErrorBoundary from './components/ErrorBoundary'
import Container from './components/Layout/Container'
import Index from './pages/Index'
import Notfound from './pages/Notfound'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Container>
          <Index />
        </Container>
      </ErrorBoundary>
    ),
  },
  {
    path: '*',
    element: (
      <Container>
        <Notfound />
      </Container>
    ),
  },
])

export default router
