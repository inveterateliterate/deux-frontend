import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { RUNS_ROUTE } from 'config'
import * as Views from './views'
import Layout from './Layout'

const Routes = (
  <Route path={ RUNS_ROUTE } component={ Layout }>
    <IndexRoute component={ Views.RunningExercises }/>
  </Route>
)

export default Routes
