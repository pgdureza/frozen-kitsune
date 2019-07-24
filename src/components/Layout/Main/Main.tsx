import React from 'react'

import { createStyles, makeStyles } from '@material-ui/core'
import { LayoutFooter, LayoutSidebar } from '..'

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

interface ILayoutMainProps {
  children: React.ReactNode
}

export const LayoutMain = ({ children }: ILayoutMainProps) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <main className={classes.main}>
        <LayoutSidebar />
        <div className={classes.content}>
          {children}
          <LayoutFooter />
        </div>
      </main>
    </div>
  )
}
