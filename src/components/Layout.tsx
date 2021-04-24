import React from "react"

import {
  NavLink,
  withRouter
} from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import camelize from '../utils/camelize'


import FormattedMessage from "./FormattedMessage"
import Img from "./Img"


type PathParamsType = {
  param1: string,
}

interface MyProps extends Object {
  url: string
  [key: string]: any
}

type Props = RouteComponentProps<PathParamsType> & MyProps

type State = {
  current: string
}


class Layout extends React.Component<Props, State> {

  state = {
    current: this.props.location.pathname.replace(this.props.url, '').replace('/', '')
  }

  componentDidUpdate = (prevProps: { location: Object }) =>
    this.props.location !== prevProps.location &&
      this.setState({
        current: this.props.location.pathname.replace(this.props.url, '').replace('/', '')
      })

  renderCurrent = () =>
    this.state.current !== '' &&
      <>
        <div className='Layout__preview__text'>
          <FormattedMessage message={this.props.items[this.state.current]?.text} />
        </div>
        <Img
          className='Layout__preview__Img'
          src={this.props[this.state.current]?.src[0]}
        />
      </>

  render = () =>
    <div className='Layout'>
      <div className='Layout__links'>
        {Object.keys(this.props.items)
          .map(key =>
            <NavLink
              key={key}
              to={`${this.props.url}/${key}`}
              className='Layout__links__item'
              activeClassName='Layout__links__item--active'
            >
              <FormattedMessage message={this.props.items[key].name} />
            </NavLink>
        )}
      </div>
      <div className='Layout__preview'>
          {this.state.current !== '' ?
          this.renderCurrent()
          :
          <FormattedMessage id={`pages.${camelize(this.props.url.replace('/', ''))}.desc`} />
        }
      </div>
    </div>
}


export default withRouter(Layout)