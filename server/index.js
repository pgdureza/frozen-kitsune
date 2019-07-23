const { ApolloServer, gql } = require('apollo-server')

const visitors = require('./mocks/visitors.json')

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  type Visitor {
    date: String
    device: String
    ip_address: String
  }

  type Query {
    visitors: [Visitor]
  }
`

const resolvers = {
  Query: {
    visitors: () => visitors,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
