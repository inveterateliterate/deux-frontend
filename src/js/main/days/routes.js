import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { DAYS_ROUTE } from 'config'
import * as Views from './views'
import Layout from './Layout'

const Routes = (
  <Route path={ DAYS_ROUTE } component={ Layout }>
    <IndexRoute component={ Views.Days } />
    <Route path=":id" component={ Views.DayExercises } />
  </Route>
)

export default Routes
