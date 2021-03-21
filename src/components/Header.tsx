import React from 'react'

import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import Link from "./Link"
import { Context } from './Store'
import FormattedMessage from './FormattedMessage'


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
    opened: false,
    linksOpened: false,
  }

  static contextType = Context

  render = () =>
    <header className={`Header ${this.state.opened && "Header--opened"}`}>

      <div className="Header__content">
        <div className="Header__content__buttons">
          
          <div
            className="Header__content__buttons__links"
            onClick={() => this.setState({ linksOpened: !this.state.linksOpened })}
          />
          {/* <div className="Header__content__buttons__locale">
            <FormattedMessage id="Header.buttons.locale" />
          </div> */}
          <div
            className="Header__content__buttons__open"
            onClick={() => this.setState({ opened: !this.state.opened })}
          />
        </div>
      </div>
      
    </header>
}


export default withRouter(Header)