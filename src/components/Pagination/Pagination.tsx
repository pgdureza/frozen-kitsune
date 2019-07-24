import React from 'react'

import { IconButton, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { NavigateBeforeRounded, NavigateNextRounded } from '@material-ui/icons'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import hooks from '../../hooks'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '0.25rem 1rem',
    },
    text: {
      marginRight: '0.5rem',
    },
  }),
)

interface IPaginationProps {
  count: number
  total: number
  next?: number
  previous?: number
}

export const Pagination = ({ count, total, next, previous }: IPaginationProps) => {
  const classes = useStyles()
  const { location } = hooks.useReactRouter()

  const preventClick = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <div className={classes.root}>
      <Typography variant="body2" className={classes.text}>
        Showing {count} out of {total}
      </Typography>
      <Link
        data-cy-element="pagination-previous"
        onClick={!previous ? preventClick : undefined}
        to={{
          pathname: location.pathname,
          search: queryString.stringify({
            ...queryString.parse(location.search),
            page: previous,
          }),
        }}
      >
        <IconButton disabled={!previous}>
          <NavigateBeforeRounded />
        </IconButton>
      </Link>
      <Link
        data-cy-element="pagination-next"
        onClick={!next ? preventClick : undefined}
        to={{
          pathname: location.pathname,
          search: queryString.stringify({
            ...queryString.parse(location.search),
            page: next,
          }),
        }}
      >
        <IconButton disabled={!next}>
          <NavigateNextRounded />
        </IconButton>
      </Link>
    </div>
  )
}
