import React, { memo } from 'react'
import { RouterProvider } from 'react-router-dom'

import router from './router'

const App: React.FC = memo(() => <RouterProvider router={router} />)
App.displayName = 'App'
export default App
