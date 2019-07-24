import React from 'react'

import { Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    welcome: {
      textAlign: 'center',
      marginBottom: theme.spacing(3),
    },
  }),
)

export const Welcome = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h2" className={classes.welcome}>
        Welcome!
      </Typography>
      <br />
      <Typography variant="body1">
        This homepage is just a placeholder. Use the sidebar to navigate to the visitors listing
        page.
      </Typography>
      <br />
      <Typography variant="body1">
        When on the visitor listing page, you will find the sort and order above the table of
        visitors. The header and footer of the table will have a pagination section.
      </Typography>
    </Container>
  )
}
