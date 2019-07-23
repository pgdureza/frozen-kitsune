import React from 'react'

import {
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme,
} from '@material-ui/core'
import { SortRounded } from '@material-ui/icons'
import queryString from 'query-string'
import { useRootContext } from '../../context/Root'
import hooks from '../../hooks'
import useSelectedSort from '../../hooks/useSelectedSort'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    select: {
      minWidth: '10rem',
    },
    orderIconButton: {
      marginLeft: theme.spacing(1),
      cursor: 'pointer',
    },
    orderIconButtonDesc: {
      rotate: '180deg',
    },
    invert: {
      transform: 'scaleY(-1)',
    },
  }),
)

export const Sort = () => {
  const { sort: sortOptions } = useRootContext()
  const { history, location } = hooks.useReactRouter()
  const [selectedSort, selectedOrder] = useSelectedSort()

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const [sort, order] = event.target.value.split('--')
    const searchParamObject = {
      ...queryString.parse(location.search),
      sort,
      order,
    }
    history.push(`${location.pathname}?${queryString.stringify(searchParamObject)}`)
  }

  const onOrderClick = () => {
    const searchParamObject = {
      ...queryString.parse(location.search),
      order: selectedOrder === 'desc' ? 'asc' : undefined,
    }
    history.push(`${location.pathname}?${queryString.stringify(searchParamObject)}`)
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <FormControl>
        <InputLabel htmlFor="sort">Sort By</InputLabel>
        <Select
          className={classes.select}
          value={selectedSort}
          onChange={onChange as any}
          inputProps={{
            name: 'sort',
          }}
        >
          {sortOptions.map(option => (
            <MenuItem key={`${option}`} value={`${option}`}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedOrder === 'desc' ? (
        <SortRounded onClick={onOrderClick} className={classes.orderIconButton} />
      ) : (
        <SortRounded
          onClick={onOrderClick}
          className={`${classes.orderIconButton} ${classes.invert}`}
          color="primary"
        />
      )}
    </div>
  )
}
