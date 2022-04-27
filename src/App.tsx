import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Div100vh from 'react-div-100vh'

import Helmet from './components/Helmet'
import {
  Provider,
  Context
} from './components/Store'
import Home from './pages/Home'

import './styles/index.sass'
import Loader from './components/Loader'


class App extends React.Component {

  static contextType = Context

  render = () =>
    <Provider>
      <Div100vh>
        <div className="App">
          <Router>
            <Helmet />
            <Loader loaded={this?.context?.contentful ? true : false} />
            <Home />
          </Router>
        </div>
      </Div100vh>
    </Provider>
}


export default App
