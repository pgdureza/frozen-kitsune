import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import { LayoutMain } from './components/Layout'
import { RootProvider } from './context/Root'

import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import { GET_ROOT } from './api/queries'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
})

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Query query={GET_ROOT}>
          {({ loading, data }: any) => {
            if (loading) {
              return null
            }
            return (
              <RootProvider {...data.root}>
                <CssBaseline />
                <LayoutMain />
              </RootProvider>
            )
          }}
        </Query>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
