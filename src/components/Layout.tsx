import React from "react"

import {
  NavLink,
  withRouter
} from 'react-router-dom'
import { RouteComponentProps } from 'react-router'


import {
  ProjType,
  Project
} from './Store/Types'

type PathParamsType = {
  param1: string,
}

interface MyProps extends Object {
  projType: ProjType
  items: Project[]
}

type Props = RouteComponentProps<PathParamsType> & MyProps

type State = {
  current: string
}


class Layout extends React.Component<Props, State> {

  state = {
    current: this.props.location.pathname.replace(this.props.projType.url, '').replace(/\//g, '')
  }

  componentDidUpdate = (prevProps: { location: Object }) =>
    this.props.location !== prevProps.location &&
      this.setState({
        current: this.props.location.pathname.replace(this.props.projType.url, '').replace(/\//g, '')
      })

  renderCurrent = () => {
    const currentItem = this.props.items
      .find((item: Project) =>
        item.url === this.state.current)

    return !currentItem ? '' :
      <>
        <div className='Layout__preview__text'>
          {currentItem.desc}
        </div>
        {/* <Img
          className='Layout__preview__Img'
          src={currentItem}
        /> */}
      </>
  }

  render = () =>
    <div className='Layout'>
      <div className='Layout__links'>
        {this.props.items
          .map((item: Project) =>
            <NavLink
              key={item.url}
              to={`/${this.props.projType.url}/${item.url}`}
              className='Layout__links__item'
              activeClassName='Layout__links__item--active'
            >
              {item.name}
            </NavLink>
        )}
      </div>
      <div className='Layout__preview'>
        {this.state.current !== '' ?
          this.renderCurrent()
          :
          this.props.projType.desc
        }
      </div>
    </div>
}


export default withRouter(Layout)