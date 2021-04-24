import React from "react"

import Frame from "../components/Frame"
import Layout from "../components/Layout"
import defaultMessages from '../components/Store/locale/defaultMessages'


class Performances extends React.Component<{}, {}> {
  render = () =>
    <div className='Performances'>
      <Frame>
        <Layout
          url='/performances'
          items={defaultMessages.pages.Performances}
        />
      </Frame>
    </div>
}


export default Performances