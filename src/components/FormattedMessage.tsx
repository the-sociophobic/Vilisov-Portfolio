import React from 'react'

import addNewLines from '../utils/addNewLines'
import { Context } from './Store'
import { getMessage } from './Store/locale'


type Props = {
  id: string,
  className?: string,
  style?: object,
  onClick?: Function,
}


class FormattedMessage extends
  React.Component<Props, {}> {

    static contextType = Context

    render = () =>
      <div
        className={`FormattedMessage ${this.props.className}`}
        style={this.props.style || {}}
        onClick={() => this.props?.onClick?.()}
      >
        {addNewLines(
          getMessage(this, this.props.id))}
      </div>
  }
  

export default FormattedMessage
