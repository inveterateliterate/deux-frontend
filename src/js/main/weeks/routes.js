import React from 'react'
import { Route, IndexRoute } from 'react-router'
import * as Views from './views'
import Layout from './Layout'

const Routes = (
  <Route path="weeks" component={ Layout }>
    <IndexRoute component={ Views.Weeks }/>
  </Route>
)

export default Routes
