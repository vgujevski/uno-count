import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { NotFoundPage } from '../pages/NotFoundPage'
import { PlayerPage } from '../pages/PlayerPage'
import { GameSessionPage } from '../pages/GameSessionPage'

export const history = createBrowserHistory()

export const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact={true} path="/" component={GameSessionPage}/>
        <Route exact={true} path="/players/:playerId" component={PlayerPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
)