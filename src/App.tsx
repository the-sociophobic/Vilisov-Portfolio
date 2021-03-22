import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import routes from './utils/routes'

import './styles/index.sass'


class App extends React.Component {
  render = () =>
    <div className="App">
      <Router>
        <div className="content">
          <Switch>
            {routes.map(route =>
              <Route
                path={route.to}
                exact={route.to === "/"}
              >
                {route.Comp}
                
              </Route>
            )}
          </Switch>
        </div>
      </Router>
    </div>
}


export default App
