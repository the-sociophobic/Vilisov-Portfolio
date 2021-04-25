import React from 'react'

import { File } from './Store/contentfulTypes'
import Img from './Img'


type Props = {
  images: File[]
  className?: string
}

type State = {
  current: number,
}


class ImgViewer extends React.Component<Props, State> {
  state = {
    current: -1
  }

  render = () =>
    <div className='ImgViewer' >
      <div className='ImgViewer__container' >
        {this.props.images
          .map((image: File, index: number) =>
            <Img
              key={image.file.url}
              src={image.file.url}
              className={`ImgViewer__Img`}
              alt={image.file.fileName}
              onClick={() => this.setState({ current: index })}
            />
        )}
      </div>
      {this.state.current !== -1 &&
        <div className='ImgViewer__preview'>
          <Img
            src={this.props.images[this.state.current].file.url}
            className={`ImgViewer__preview__Img`}
            alt={this.props.images[this.state.current].file.fileName}
          />
          <div
            className='ImgViewer__preview__close'
            onClick={() => this.setState({ current: -1 })}
          />
          {this.props.images.length > 1 && <div
            className='ImgViewer__preview__prev'
            onClick={() => this.setState({ current: (this.state.current - 1 + this.props.images.length * 5) % this.props.images.length })}
          />}
          {this.props.images.length > 1 && <div
            className='ImgViewer__preview__next'
            onClick={() => this.setState({ current: (this.state.current + 1 + this.props.images.length * 5) % this.props.images.length })}
          />}
        </div>
      }
    </div>
}


export default ImgViewer