import React from 'react'
import { Route, Router, browserHistory } from 'react-router'
import initializeStore from './store'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import Layout from './Layout'
import { routes as HomeRoutes } from './home'
import { routes as WeekRoutes } from './weeks'
import { routes as DayRoutes } from './days'
import { routes as RunningExerciseRoutes } from './runningExercises'

const store = initializeStore()

// Make the routing information available in the store
const history = syncHistoryWithStore(browserHistory, store)

const Routes = (
  // React Redux `Provider` component to enable the `connect` function to connect to the Redux store.
  <Provider store={ store }>
    <Router history={ history } >
      <Route path="/" component={ Layout }>
        { HomeRoutes }
        { WeekRoutes }
        { DayRoutes }
        { RunningExerciseRoutes }
      </Route>
    </Router>
  </Provider>
)

export default Routes
