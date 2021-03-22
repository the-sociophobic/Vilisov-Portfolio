import React from 'react'

import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import Link from "./Link"
import Frame from "./Frame"
import { Context } from './Store'
import FormattedMessage from './FormattedMessage'

import routes from '../utils/routes'
import camelize from '../utils/camelize'


type PathParamsType = {
  param1: string,
}

type Props = RouteComponentProps<PathParamsType> & {}

type State = {
  opened: boolean;
  linksOpened: boolean;
}


class Header extends React.Component<Props, State> {
  state = {
    opened: true,
    linksOpened: false,
  }

  static contextType = Context

  closeAll = () =>
    this.setState({
      // opened: false,
      linksOpened: false
    })

  componentDidUpdate = (prevProps: {location: any}) =>
    this.props.location !== prevProps.location &&
      this.closeAll()

  render = () =>
    <header className={`Header ${this.state.opened && "Header--opened"}`}>

      <div className="Header__buttons">
        
        <div
          className="Header__buttons__links"
          onClick={() => this.setState({ linksOpened: !this.state.linksOpened })}
        />
        {/* <div className="Header__buttons__locale">
          <FormattedMessage id="Header.buttons.locale" />
        </div> */}
        {/* <div
          className="Header__buttons__open"
          onClick={() => this.setState({ opened: !this.state.opened })}
        /> */}
      </div>

      {this.state.linksOpened &&
        <div className='Header__links'>
          {[
            {
              id: 'tg',
              to: 'https://t.me/apollonia'
            },
            {
              id: 'inst',
              to: 'https://www.instagram.com/paragvaev/'
            },
            {
              id: 'ar',
              to: 'https://t.me/ya_aru'
            },
            {
              id: 'twi',
              to: 'https://twitter.com/paragvaev'
            },
            {
              id: 'fb',
              to: 'https://www.facebook.com/paragvaev'
            },
          ].map(link =>
            <Link
              to={link.to}
              className='Header__links__item'
            >
              <FormattedMessage id={`Header.links.${link.id}`} />
            </Link>
          )}
        </div>}

      <div className='Header__content'>
        <Frame>
          <div className='Header__content__long-desc'>
            <FormattedMessage id='Header.longDesc' />
          </div>
          <div className='Header__content__routes'>
            {[
              ...routes.slice(1, 3),
              { to: 'http://apollonia.today/ar', id: 'AR' },
              ...routes.slice(3)
            ]
              .map(route =>
                <Link
                  onClick={() => this.closeAll()}
                  to={route.to}
                  className='Header__content__routes__item'
                >
                  <FormattedMessage id={`${route.id || camelize(route.to.replace('/', ''))}.name`} />
                </Link>
            )}
          </div>
        </Frame>       
      </div>
      
    </header>
}


export default withRouter(Header)