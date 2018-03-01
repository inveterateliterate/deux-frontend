import React from 'react'
import { Route, IndexRoute } from 'react-router'
import * as Views from './views'
import Layout from './Layout'

const Routes = (
  <Route path="days" component={ Layout }>
    <IndexRoute component={ Views.Days }/>
  </Route>
)

export default Routes
