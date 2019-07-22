import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import { LayoutMain } from './components/Layout'
import { RootProvider } from './context/Root'

const App: React.FC = () => {
  return (
    <RootProvider
      sort={['date', 'device', 'ip']}
      filters={['Today', 'Yesterday', 'Last Week', 'This Month']}
    >
      <BrowserRouter>
        <CssBaseline />
        <LayoutMain />
      </BrowserRouter>
    </RootProvider>
  )
}

export default App
