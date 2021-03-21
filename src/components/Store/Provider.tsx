import React from 'react'

import _ from 'lodash'

import {
  StateType,
  initialState
} from './Types'
import Context from './Context'


class Provider extends React.Component<{}, StateType> {

  state = initialState

  stateAndSetters = () => ({
    ...this.state,
    setState: (obj: any) =>
      this.setState(obj),
    setLocale: (_locale: string) =>
      this.setState({
        locale: _locale
      }),
    toggleLocale: () =>
      this.setState({
        locale: this.state.locale === "rus" ? "eng" : "rus"
      })
  })

  render = () =>
    <Context.Provider value={this.stateAndSetters()}>
      {this.props.children}
    </Context.Provider>
}


export default Provider