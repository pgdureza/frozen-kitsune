import React from 'react'

import {
  Container,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { format, startOfMonth, subDays, subWeeks } from 'date-fns'
import { Query } from 'react-apollo'
import { IVisitor } from '../'
import { GET_VISITORS } from '../../../api/queries'
import usePagination from '../../../hooks/usePagination'
import useSelectedFilter from '../../../hooks/useSelectedFilter'
import useSelectedSort from '../../../hooks/useSelectedSort'
import Pagination from '../../Pagination'
import Sort from '../../Sort'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
    paper: {
      width: '100%',
      marginTop: theme.spacing(2),
      overflowX: 'auto',
      minHeight: '80vh',
    },
    tableHeader1: {
      width: '20%',
    },
    tableHeader2: {
      width: '40%',
    },
  }),
)

const formatDate = (date: Date) => {
  return format(date, 'YYYY-MM-DD')
}

export const getDates = (filter: string) => {
  const today = new Date()
  if (filter === 'Yesterday') {
    return { date: formatDate(subDays(today, 1)), endDate: formatDate(today) }
  }
  if (filter === 'Last Week') {
    return { date: formatDate(subWeeks(today, 1)), endDate: formatDate(today) }
  }
  if (filter === 'This Month') {
    return { date: formatDate(startOfMonth(today)), endDate: formatDate(today) }
  }
  return { date: formatDate(today) }
}

export const VisitorList = () => {
  const classes = useStyles()
  const page = usePagination()
  const [sort, order] = useSelectedSort()
  const filter = useSelectedFilter()
  const dates = getDates(filter)

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Sort />
      <Paper className={classes.paper}>
        <Query query={GET_VISITORS} variables={{ page, sort, order, ...dates }}>
          {({ loading, data }: any) => {
            if (loading || !(data && data.visitors && data.visitors.data)) {
              return null
            }
            return (
              <React.Fragment>
                <Pagination
                  next={data.visitors.next}
                  previous={data.visitors.previous}
                  count={data.visitors.count}
                  total={data.visitors.total}
                />
                <Divider />
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHeader1}>Date</TableCell>
                      <TableCell className={classes.tableHeader2}>Device</TableCell>
                      <TableCell className={classes.tableHeader1}>IP Address</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.visitors.data.map((visitor: IVisitor, index: number) => (
                      <TableRow key={`${index}-${data.ip_address}`}>
                        <TableCell>{format(visitor.date, 'YYYY MMM DD')}</TableCell>
                        <TableCell>{visitor.device}</TableCell>
                        <TableCell>{visitor.ip_address}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Pagination
                  next={data.visitors.next}
                  previous={data.visitors.previous}
                  count={data.visitors.count}
                  total={data.visitors.total}
                />
              </React.Fragment>
            )
          }}
        </Query>
      </Paper>
    </Container>
  )
}
