import React from 'react'

import { Helmet as Helmet_ } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import { Context } from './Store'
import { getMessage } from './Store/locale'
import camelize from '../utils/camelize'


type PathParamsType = {
  param1: string,
}
type Props = RouteComponentProps<PathParamsType> & {}


class Helmet extends React.Component<Props, {}> {

  static contextType = Context

  render = () =>
    <Helmet_>
      <title>
        {
        (getMessage(this, 'Vilisov')
          + (this.props.location.pathname.length > 2 ? ` / ${getMessage(this, `${camelize(this.props.location.pathname.replace('/', ''))}.name`)}`
          :
          ''))
        .toLocaleLowerCase()
        }
      </title>
    </Helmet_>
}


export default withRouter(Helmet)