import React from 'react'

import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import Link from "./Link"
import Frame from "./Frame"
import { Context } from './Store'
import FormattedMessage from './FormattedMessage'
import { ProjType } from './Store/Types'
import Layout from '../components/Layout'


type PathParamsType = {
  param1: string,
}

type Props = RouteComponentProps<PathParamsType> & {}

type State = {
  linksOpened: boolean
}


class Header extends React.Component<Props, State> {
  state = {
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

  getTypes = () =>
    this.context?.contentful?.types
      // ?.sort((a: ProjType, b:ProjType) => (a.order || 100) - (b.order || 100))
    || []

  renderHomeMenu = () =>
    <>
      <div className='Header__content__long-desc'>
        <div className='Header__content__long-desc__content'>
          <FormattedMessage id='Header.longDesc' />
        </div>
      </div>
      <div className='Header__content__links'>
        <div className='Header__content__links__routes'>
          {this.getTypes()
            .map((type: ProjType) =>
              <Link
                onClick={() => this.closeAll()}
                to={type.url}
                className='Header__content__links__routes__item'
              >
                {type.name}
              </Link>
          )}
        </div>
        <div className='Header__content__links__buttons'>
          <button className={'Header__content__links__buttons__item Header__content__links__buttons__item--left'}>
            <FormattedMessage id='Header.whatAmIButton' />
          </button>
          <button className={'Header__content__links__buttons__item Header__content__links__buttons__item--right'}>
            <FormattedMessage id='Header.helpButton' />
          </button>
        </div>
      </div>
    </>

  render = () =>
    <header className={`Header ${this.context.opened && "Header--opened"}`}>

      <div className="Header__buttons">
        
        <div
          className="Header__buttons__links"
          onClick={() => this.setState({ linksOpened: !this.state.linksOpened })}
        />
        <div
          className="Header__buttons__locale"
          onClick={() => this.context.setState({
            locale: this.context.locale === 'ru' ? 'en' : 'ru'
          })}
        >
          {this.context.locale}
        </div>
        <div
          className="Header__buttons__open"
          onClick={() => {
            this.context.setState({ opened: !this.context.opened })
            this.props.location.pathname !== '/' && this.props.history.push('/')
          }}
        />
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
        <Frame
          className='Frame--Header'
        >
          <Switch>
            <Route
              path='/'
              exact
            >
              {this.renderHomeMenu()}
            </Route>
            {this?.context?.contentful?.types
              ?.map((projType: ProjType) =>
                <Route path={`/${projType.url}`}>
                  <Layout projType={projType} />
                </Route>
              )}
          </Switch>
        </Frame>       
      </div>
      
    </header>
}


export default withRouter(Header)