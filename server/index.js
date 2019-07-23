const { ApolloServer, gql } = require('apollo-server')

const sortObjectsArray = require('sort-objects-array')
const visitorsDataSource = require('./mocks/visitors.json')

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  type Visitor {
    date: String
    device: String
    ip_address: String
  }

  type Root {
    filters: [String]
    sort: [String]
  }

  type VisitorList {
    data: [Visitor]
    next: String
    previous: String
    total: Int
    count: Int
  }

  type Query {
    visitors(date: String, endDate: String, order: String, sort: String, page: Int): VisitorList
    root: Root
  }
`

const VISITOR_PER_PAGE = 8

const filterByDate = (visitors, date, endDate) => {
  if (date && endDate) {
    return visitors.filter(visitor => {
      const startDateValue = new Date(date)
      const endDateValue = new Date(endDate)
      const visitorDateValue = new Date(visitor.date)
      return startDateValue <= visitorDateValue && visitorDateValue <= endDateValue
    })
  }
  if (date) {
    return visitors.filter(visitor => visitor.date.indexOf(date) >= 0)
  }
  return visitors
}

const resolvers = {
  Query: {
    root: () => {
      return {
        sort: ['date', 'device', 'ip_address'],
        filters: ['Today', 'Yesterday', 'Last Week', 'This Month'],
      }
    },
    visitors: (_, { date, endDate, page = 1, sort, order = 'desc' }) => {
      let results = filterByDate(visitorsDataSource, date, endDate)
      if (sort) {
        results = sortObjectsArray(results, sort, order)
      }
      const lastDisplayed = page * VISITOR_PER_PAGE
      const total = results.length
      results = results.slice(lastDisplayed - VISITOR_PER_PAGE, lastDisplayed)
      const previousPage = page - 1
      const nextPage = page + 1
      const count = previousPage * VISITOR_PER_PAGE + results.length
      return {
        data: results,
        previous: page === 1 ? undefined : previousPage,
        next: page * VISITOR_PER_PAGE < total ? nextPage : undefined,
        total,
        count: count > total ? total : count,
      }
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
