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
type Props = RouteComponentProps<PathParamsType> & {
  className?: string
}


class Frame extends React.Component<Props, {}> {
  render = () =>
    <div className={`Frame ${this.props.className}`}>
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
          this.props.location.pathname.split('/').length === 3 ?
            <Link to={`/${this.props.location.pathname.split('/')[1]}`}>
              <FormattedMessage id={`pages.${camelize(this.props.location.pathname.split('/')[1])}.name`} />
            </Link>
            :
            <FormattedMessage id={`pages.${camelize(this.props.location.pathname.split('/')[1])}.name`} />
        }
      </div>
    </div>
}


export default withRouter(Frame)