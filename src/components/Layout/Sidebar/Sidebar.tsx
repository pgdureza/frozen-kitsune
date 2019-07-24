import React from 'react'

import {
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  CalendarTodayRounded,
  MenuRounded,
  TodayRounded,
  ViewHeadlineRounded,
  ViewWeekRounded,
} from '@material-ui/icons'
import CloseRounded from '@material-ui/icons/CloseRounded'
import { Link } from 'react-router-dom'
import { useRootContext } from '../../../context/Root'
import useSelectedFilter from '../../../hooks/useSelectedFilter'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mobileDrawerIcon: {
      display: 'block',
      marginLeft: 'auto',
      position: 'fixed',
      right: 0,
    },
    drawerContainer: {
      minWidth: '15rem',
    },
    companyName: {
      padding: '0.5rem 1rem',
    },
    logo: {
      width: 180,
    },
    link: {
      textDecoration: 'none',
    },
    active: {
      backgroundColor: theme.palette.grey[200],
    },
  }),
)

interface ILayoutSidebarContentItemProps {
  text: string
}

export const LayoutSidebarContentItem = ({ text }: ILayoutSidebarContentItemProps) => {
  const selectedFilter = useSelectedFilter()
  const classes = useStyles()
  const active = selectedFilter === text
  return (
    <Link className={classes.link} to={`/visitors/${text}`} data-cy-element={`link-${text}`}>
      <ListItem button={true} className={active ? classes.active : undefined}>
        <ListItemIcon>
          <React.Fragment>
            {text === 'Today' && <CalendarTodayRounded />}
            {text === 'Yesterday' && <TodayRounded />}
            {text === 'Last Week' && <ViewWeekRounded />}
            {text === 'This Month' && <ViewHeadlineRounded />}
          </React.Fragment>
        </ListItemIcon>
        <ListItemText secondary={text} />
      </ListItem>
    </Link>
  )
}

export const LayoutSidebarContent: React.FC = () => {
  const classes = useStyles()
  const rootValues = useRootContext()
  return (
    <React.Fragment>
      <Link to="/">
        <img src="/img/logo.png" className={classes.logo} alt="logo" />
      </Link>
      <Typography variant="h6" noWrap={true} className={classes.companyName}>
        Frozen Kitsune
      </Typography>
      <Divider />
      <List className={classes.drawerContainer}>
        <ListItem>
          <ListItemText primary="Visitor Listing" />
        </ListItem>
        {rootValues.filters.map((text, index) => (
          <LayoutSidebarContentItem text={text} key={text} />
        ))}
      </List>
    </React.Fragment>
  )
}

export const LayoutSidebar: React.FC = () => {
  const classes = useStyles()

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const onMobileToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <React.Fragment>
      <Hidden mdUp={true} implementation="css">
        <IconButton
          aria-label="Open drawer"
          onClick={onMobileToggle}
          className={classes.mobileDrawerIcon}
        >
          {mobileOpen ? <CloseRounded /> : <MenuRounded />}
        </IconButton>
        <Drawer
          data-cy-element="sidebar"
          open={mobileOpen}
          onClose={onMobileToggle}
          anchor="left"
          variant="temporary"
          className={classes.drawerContainer}
        >
          <LayoutSidebarContent />
        </Drawer>
      </Hidden>
      <Hidden smDown={true} implementation="css">
        <Drawer
          data-cy-element="sidebar"
          open={true}
          variant="permanent"
          className={classes.drawerContainer}
          anchor="left"
        >
          <LayoutSidebarContent />
        </Drawer>
      </Hidden>
    </React.Fragment>
  )
}
