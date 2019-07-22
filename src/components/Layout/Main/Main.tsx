import React from 'react'

import { createStyles, makeStyles } from '@material-ui/core'
import { LayoutFooter, LayoutSidebar } from '..'
import VisitorList from '../../Visitor/List'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: '100vh',
    },
    main: {
      display: 'flex',
    },
    content: {
      width: '100%',
    },
  }),
)

export const LayoutMain = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <main className={classes.main}>
        <LayoutSidebar />
        <div className={classes.content}>
          <VisitorList />
          <LayoutFooter />
        </div>
      </main>
    </div>
  )
}
