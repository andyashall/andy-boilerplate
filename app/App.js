import React from 'react'
import { Route } from 'react-router'

// import Home from './containers/home'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {doot: 1}
  }
  render() {
    return (
      <div>
    {/* <Route exact path="/" component={Home} /> */}
      </div>
    )
  }
}
