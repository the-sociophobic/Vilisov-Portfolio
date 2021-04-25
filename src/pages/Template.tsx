import React from "react"

import Frame from "../components/Frame"
import Layout from "../components/Layout"
import {
  ProjType,
  Project
} from '../components/Store/Types'


type Props = {
  projType: ProjType
  projects: Project[]
}


class Template extends React.Component<Props, {}> {
  render = () =>
    <div className='Template'>
      <Frame>
        <Layout
          projType={this.props.projType}
          items={this.props.projects}
        />
      </Frame>
    </div>
}


export default Template