import React from "react"


import FormattedMessage from "./FormattedMessage"
import Img from "./Img"


interface Props extends Object {
  [key: string]: any
}

type State = {
  current: string
}


class Layout extends React.Component<Props, State> {

  state = {
    current: ''
  }

  render = () =>
    <div className='Layout'>
      <div className='Layout__links'>
        {Object.keys(this.props)
          .map(key =>
            <div
              key={key}
              className={`Layout__links__item ${this.state.current === key && 'Layout__links__item--active'}`}
              onClick={() => this.setState({ current: key })}
            >
              <FormattedMessage message={this.props[key].name} />
            </div>
        )}
      </div>
      <div className='Layout__preview'>
        {this.state.current !== '' &&
          <div className='Layout__preview__text'>
            <FormattedMessage message={this.props[this.state.current].text} />
          </div>}
        {this.state.current !== '' &&
          <Img
            className='Layout__preview__Img'
            src={this.props[this.state.current].src[0]}
          />}
      </div>
    </div>
}


export default Layout