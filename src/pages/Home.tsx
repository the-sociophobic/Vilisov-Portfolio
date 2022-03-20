import React from "react"

import Emoji from "../components/Emoji"
import Header from '../components/Header'
import isTouchDevice from "../utils/isTouchDevice"
import { Context } from '../components/Store'


type State = {
  opened: boolean
  alphaX: number
  alphaY: number
}


class Home extends React.Component<{}, State> {

  state = {
    opened: false,
    alphaX: 0,
    alphaY: 0,
  }

  static contextType = Context

  // componentDidMount = () =>
  //   isTouchDevice() ?
  //     window.addEventListener("scroll", e => this.setState({
  //       alphaX: window.scrollY / window.innerHeight - .5,
  //       alphaY: window.scrollY / window.innerHeight - .5,
  //     }))
  //     :
  //     window.addEventListener("mousemove", e => this.setState({
  //       alphaX: .5 - e.clientX / window.innerWidth,
  //       alphaY: .5 - e.clientY / window.innerHeight,
  //     }))


  longLongDescRef: any = React.createRef()

  render = () =>
    <div className={`Home ${this.state.opened && 'Home--opened'}`}>

      <div className="Home__red">
        <Header />
        {/* <div
          className="Home__red__guy"
          style={{
            transform: `translate(${-50 + this.state.alphaX * 15}%, ${50 + this.state.alphaY * 2.5}%)`
          }}
        /> */}
        <canvas
          id='vilisov-char'
          width={`${Math.max(document.body.clientWidth, document.body.clientHeight, 1000)}px`}
          height={`${Math.max(document.body.clientWidth, document.body.clientHeight, 1000)}px`}
          className="Home__red__vilisov"
          style={{
            transform: `translate(${-50 + this.state.alphaX * 15}%, ${-6 + this.state.alphaY * 2.5}%)`
          }}
        />
        <div
          className="Home__red__hi"
          style={{
            transform: `translate(${-50 - this.state.alphaX * 11.5}%, ${50 - this.state.alphaY * 5}%)`
          }}
        />
        {/* <FormattedMessage
          id='Home.desc'
          className='Home__red__desc'
          style={{
            transform: `translate(${-50 + this.state.alphaX * 17}%, ${50 + this.state.alphaY * 55}%)`
          }}
        /> */}
        <button
          className='Home__red__button'
          onClick={() => this.setState({opened: !this.state.opened})}
        >
          <Emoji name='right' />
          <Emoji name='strong' />
          <Emoji name='boom' />
        </button>
      </div>

      <div className='Home__long-long-desc'>
        <div
          ref={this.longLongDescRef}
          className="Home__long-long-desc__container"
        >
          {this.context?.contentful?.mainPages?.[0]?.desc}
        </div>
      </div>

      <div className="grain" />

    </div>
}


export default Home