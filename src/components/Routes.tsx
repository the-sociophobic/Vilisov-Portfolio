import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Header from './Header'
import {
  Provider,
  Context
} from './Store'
import {
  ProjType,
  Project
} from './Store/Types'
import Template from '../pages/Template'


class Routes extends React.Component {

  static contextType = Context

  render = () =>
    <Provider>
      {!this?.context?.contentfulData?.[0] ? 'a' :
        <div className="content">
          <Switch>
            <Route
              path='/'
              exact
            >
              <Header />
            </Route>
            {this?.context?.contentful?.types
              ?.map((projType: ProjType) =>
                <Route path={`/${projType.url}`}>
                  <Template
                    projType={projType}
                    projects={this?.context?.contentful?.projects
                      .filter((project: Project) =>
                        projType?.projects
                          ?.map((proj: Project) => proj.id)
                          ?.includes(project.id)
                      )}
                  />
                </Route>
              )}
          </Switch>
        </div>
      }
    </Provider>
}


export default Routes
