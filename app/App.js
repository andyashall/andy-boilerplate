import React, {Component} from 'react'
import {Route} from 'react-router'

import Home from './containers/home'
import Page from './containers/page'

import Header from './components/header'
import Footer from './components/footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/page' component={Page} />
        <Footer />
      </div>
    )
  }
}
