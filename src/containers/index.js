import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home/Home.container'

class Containers extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Containers
