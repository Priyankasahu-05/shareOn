import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootRoute, Router, RootRouteWithoutId, createRouter } from '@tanstack/react-router'
import { Route } from './routes/index'
import './styles.css'

const rootRoute = new RootRouteWithoutId({
  component: () => <Route.Component />,
})

const router = createRouter({
  routeTree: rootRoute,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <router.Provider />
  </React.StrictMode>,
)
