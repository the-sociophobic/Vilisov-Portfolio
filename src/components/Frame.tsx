import React from 'react'

import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import FormattedMessage from './FormattedMessage'
import Link from './Link'
import Img from './Img'
import camelize from '../utils/camelize'

import VilisovImg from '../styles/img/photo.png'


type PathParamsType = {
  param1: string,
}
type Props = RouteComponentProps<PathParamsType> & {}


class Frame extends React.Component<Props, {}> {
  render = () =>
  <div className='Frame'>
    <div className='Frame__content'>
      {this.props.children}
    </div>
    <div className="Frame__navigation">
      <Link to='/'>
        <FormattedMessage id="Vilisov" />
      </Link>
      <div className="Frame__navigation__arrow" />
      {this.props.location.pathname === '/' ?
        <Img className='Frame__navigation__Img' src={VilisovImg} />
        :
        <FormattedMessage id={`${camelize(this.props.location.pathname.replace('/', ''))}.name`} />}
    </div>
  </div>
}


export default withRouter(Frame)