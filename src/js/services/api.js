import { configureApi } from 'lp-requests'
import { middleware as configureMiddleware } from 'lp-redux-api'

// Configure middleware and api services

export const config = {
  root: 'http://localhost:3000/',
  mode: 'cors',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  successDataPath: 'data.attributes',
}

export const middleware = configureMiddleware(config)
export const api = configureApi(config)
