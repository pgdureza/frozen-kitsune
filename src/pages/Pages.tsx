import React from 'react'

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { Visitors } from './Visitors'

export const Pages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact={true} path="/visitors" component={Visitors} />
        <Route exact={true} path="/visitors/:datefilter" component={Visitors} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  )
}
