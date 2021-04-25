import React from 'react'

import _ from 'lodash'

import {
  StateType,
  initialState
} from './Types'
import Context from './Context'

import {
  createContentfulClient,
  getContentfulItems
} from '../../utils/contentful'


class Provider extends React.Component<{}, StateType> {

  state = initialState

  contentfulClient: any

  componentDidMount = () =>
    this.loadContentful()

  loadContentful = async () => {
    this.contentfulClient = createContentfulClient()

    this.setState({
      contentfulData: [
        await getContentfulItems(this.contentfulClient),
        await getContentfulItems(this.contentfulClient, {locale: 'en-US'})
      ]
    })

    console.log(this.state.contentfulData[0])
  }
  
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
      }),
    contentful: this.state.contentfulData?.[this.state.locale === "rus" ? 0 : 1],
  })

  render = () =>
    <Context.Provider value={this.stateAndSetters()}>
      {this.props.children}
    </Context.Provider>
}


export default Provider