import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      padding: theme.spacing(3),
    },
  }),
)

export const LayoutFooter: React.FC = () => {
  const classes = useStyles()
  return <div className={classes.root}>Frozen Kitsune © 2019</div>
}
