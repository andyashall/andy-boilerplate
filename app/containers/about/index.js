import React, { Component } from 'react'

const style = {
  container: {
    position: 'relative',
    padding: '1rem 0',
    left: '50%',
    width: '800px',
    transform: 'translateX(-50%)'
  }
}

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {a: 1}
  }
  render () {
    return(
      <div style={style.container}>
        <h1>About</h1>
        <p>This is a demo component</p>
      </div>
    )
  }
} 