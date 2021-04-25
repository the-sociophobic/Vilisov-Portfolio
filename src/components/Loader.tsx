import React from 'react'

import Frame from './Frame'
import FormattedMessage from './FormattedMessage'


type Props = {
  loaded: boolean
}

type State = {
  transparent: boolean
  hidden: boolean
  hide: Function
}


class Loader extends React.Component<Props, State> {

  state: State = {
    transparent: false,
    hidden: false,
    hide: () => {
      setTimeout(() => this.setState({ transparent: true }), 500)
      setTimeout(() => this.setState({ hidden: true }), 1500)
    }
  }
  
  static getDerivedStateFromProps = (props: Props, state: State) =>
    (!state.transparent && props.loaded) &&
      state.hide()

  render = () =>
    this.state.hidden ?
      ''
      :
      <Frame
        className={`Frame--Loader ${this.state.transparent && 'Frame--Loader--transparent'}`}
      >
        <div className='Loader'>
          <h1 className='h1'>
            <FormattedMessage id='Loading' />
          </h1>
        </div>
      </Frame>
}


export default Loader