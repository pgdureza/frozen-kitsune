import { gql } from 'apollo-boost'

interface IGetVisitorsProps {
  date?: string
  endDate?: string
  page?: number
  sort?: string
  order?: string
}

export const getVisitors = ({ sort, date, endDate, page, order }: IGetVisitorsProps) => gql`
  {
    visitors(date: "${date}"
      ${endDate ? `,endDate: "${endDate}"` : ''} 
      ${page ? `,page: ${page}` : ''} 
      ${sort ? `,sort: "${sort}"` : ''} 
      ${order ? `,order: "${order}"` : ''} )
    {  
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
