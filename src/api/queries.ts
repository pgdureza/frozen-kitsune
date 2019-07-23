import { gql } from 'apollo-boost'

export const GET_VISITORS = gql`
  query Visitors($date: String, $endDate: String, $page: Int, $sort: String, $order: String) {
    visitors(date: $date, endDate: $endDate, page: $page, sort: $sort, order: $order) {
      next
      previous
      total
      count
      data {
        date
        device
        ip_address
      }
    }
  }
`

export const GET_ROOT = gql`
  {
    root {
      filters
      sort
    }
  }
`
