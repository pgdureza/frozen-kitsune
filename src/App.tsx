import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'

import { RootProvider } from './context/Root'

import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import { GET_ROOT } from './api/queries'
import Pages from './pages'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
})

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Query query={GET_ROOT}>
        {({ loading, data }: any) => {
          if (loading) {
            return null
          }
          return (
            <RootProvider {...data.root}>
              <CssBaseline />
              <Pages />
            </RootProvider>
          )
        }}
      </Query>
    </ApolloProvider>
  )
}

export default App
