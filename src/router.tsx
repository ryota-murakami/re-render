import { createBrowserRouter } from 'react-router-dom'

import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout/Layout'
import Index from './pages/Index'
import Notfound from './pages/Notfound'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Layout>
          <Index />
        </Layout>
      </ErrorBoundary>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <Notfound />
      </Layout>
    ),
  },
])

export default router
