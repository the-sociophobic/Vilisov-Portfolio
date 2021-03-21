import React from 'react'

import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import FormattedMessage from './FormattedMessage'
import camelize from '../utils/camelize'


type PathParamsType = {
  param1: string,
}
type Props = RouteComponentProps<PathParamsType> & {}


class Frame extends React.Component<Props, {}> {
  render = () =>
    <div className="Header__navigation">
      <FormattedMessage id="Vilisov" />
      <div className="Header__navigation__arrow" />
      <FormattedMessage id={`${camelize(this.props.location.pathname.replace('/', ''))}.name`} />
    </div>
}


export default withRouter(Frame)