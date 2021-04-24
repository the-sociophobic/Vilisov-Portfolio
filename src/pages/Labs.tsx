import React from "react"

import Frame from "../components/Frame"
import Layout from "../components/Layout"
import defaultMessages from '../components/Store/locale/defaultMessages'


class Labs extends React.Component<{}, {}> {
  render = () =>
    <div className='Labs'>
      <Frame>
        <Layout
          url='/labs'
          items={defaultMessages.pages.Labs}
        />
      </Frame>
    </div>
}


export default Labs