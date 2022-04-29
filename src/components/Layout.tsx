import React from "react"

import {
  NavLink,
  withRouter
} from 'react-router-dom'
import { RouteComponentProps } from 'react-router'


import { Context } from './Store'
import {
  ProjType,
  Project
} from './Store/Types'
import ImgViewer from "./ImgViewer"
import Link from './Link'


type PathParamsType = {
  param1: string,
}

interface MyProps extends Object {
  projType: ProjType
}

type Props = RouteComponentProps<PathParamsType> & MyProps

type State = {
  current: string
}


class Layout extends React.Component<Props, State> {

  static contextType = Context

  state = {
    current: this.props.location.pathname
      .replace(this.props.projType.url, '')
      .replace(/\//g, '')
  }

  componentDidMount = () => {
    this.context.setState({ opened: true })
    this.setState({
      current: this.props.projType?.projects?.length === 1 ?
        this.props.projType?.projects?.[0].url
        :
        ''
    })
  }

  componentDidUpdate = (prevProps: { location: Object }) =>
    this.props.location !== prevProps.location &&
      this.setState({
        current: this.props.location.pathname
          .replace(this.props.projType.url, '')
          .replace(/\//g, '')
      })

  renderCurrent = (currentItem: Project | ProjType | undefined) =>
    !currentItem ? '' :
      <>
        <div className='Layout__preview__text'>
          {currentItem.desc}
        </div>
        <ImgViewer
          images={currentItem.images || []}
        />
        {currentItem.externalLink &&
          <Link to={currentItem.externalLink}>
            <h2 className='h2 mt-3'>
              🔗
            </h2>
          </Link>
        }
      </>

  render = () => {
    const currentItem = this.state.current === '' ?
      this.props.projType
      :
      this.props.projType?.projects
        ?.find((item: Project) =>
          item.url === this.state.current)

    return (
      <div className='Layout'>
        <div className='Layout__container'>
          <div className={`Layout__links ${
            this.props.projType?.projects
              ?.some((item: Project) =>
                this.props.location.pathname.includes(item.url))
            && 'Layout__links--hide-inactive'
          }`}>
            <div className='Layout__links__container'>
              {this.props.projType?.projects
                // .sort((a: Project, b: Project) => (a.order || 100) - (b.order || 100))
                ?.map((item: Project) =>
                this.props.projType?.projects?.length === 1 ?
                  <div
                    key={item.url}
                    className='Layout__links__item'
                  >
                    {item.name}
                  </div>
                  :
                  <NavLink
                    key={item.url}
                    to={`/${this.props.projType.url}/${this.props.location.pathname.includes(item.url) ? '' : item.url}`}
                    className='Layout__links__item'
                    activeClassName='Layout__links__item--active'
                  >
                    {item.name}
                  </NavLink>
              )}
            </div>
          </div>
          <div className='Layout__preview'>
            {this.renderCurrent(currentItem)}
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(Layout)