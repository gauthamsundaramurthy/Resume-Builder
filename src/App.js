import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import HomePageContainer from './containers/HomePageContainer'
import './App.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePageContainer} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
