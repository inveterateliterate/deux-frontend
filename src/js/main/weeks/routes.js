import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { WEEKS_ROUTE } from 'config'
import * as Views from './views'
import Layout from './Layout'

const Routes = (
  <Route path={ WEEKS_ROUTE } component={ Layout }>
    <IndexRoute component={ Views.Weeks } />
    <Route path=":id/days" component={ Views.WeekDays } />
  </Route>
)

export default Routes
