import React from 'react'
import style from './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {test: 'foo'}
  }
  render() {
    return (
      <div className={style.app}>
        Hi
      </div>
    )
  }
}
