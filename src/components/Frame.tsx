import React from 'react'

import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import Context from './Store/Context'
import FormattedMessage from './FormattedMessage'
import Link from './Link'
import Img from './Img'
import camelize from '../utils/camelize'


type PathParamsType = {
  param1: string,
}
type Props = RouteComponentProps<PathParamsType> & {
  className?: string
}


class Frame extends React.Component<Props, {}> {
  
  static contextType = Context

  avatarRef: any = React.createRef()

  componentDidMount = () => {
    this.avatarRef.current.containerRef.current.addEventListener?.('mouseenter', () => this.context.setState({ showAvatar: true }))
    this.avatarRef.current.containerRef.current.addEventListener?.('mouseleave', () => this.context.setState({ showAvatar: false }))
  }

  componentWillUnmount = () => {
    this.avatarRef.current.containerRef.current.removeEventListener?.('mouseenter', () => this.context.setState({ showAvatar: true }))
    this.avatarRef.current.containerRef.current.removeEventListener?.('mouseleave', () => this.context.setState({ showAvatar: false }))
  }

  render = () =>
    <div className={`Frame ${this.props.className}`}>
      <div className='Frame__content'>
        <div className='Frame__content__scrollable'>
          {this.props.children}
        </div>
      </div>
      <div className="Frame__navigation">
        <Link
          to='/'
          // onClick={() => this.context.setState({ opened: false })}
        >
          <FormattedMessage id="Vilisov" />
        </Link>
        <div className="Frame__navigation__arrow" />
        {this.props.location.pathname === '/' ?
          <Img
            ref={this.avatarRef}
            className='Frame__navigation__Img'
            src={this.context.contentful?.mainPages?.[0]?.avatar?.file?.url}
          />
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