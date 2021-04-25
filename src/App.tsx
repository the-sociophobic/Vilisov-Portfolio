import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"

import Helmet from './components/Helmet'
import {
  Provider,
  Context
} from './components/Store'
import Routes from './components/Routes'

import './styles/index.sass'
import Loader from './components/Loader'


class App extends React.Component {

  static contextType = Context

  render = () =>
    <Provider>
      <div className="App">
        <Router>
          <Helmet />
          <Loader loaded={this?.context?.contentful ? true : false} />
          <Routes />
        </Router>
      </div>
    </Provider>
}


export default App
