import React, {Component} from 'react'

const style = {
  container: {
    position: 'relative',
    width: '100%',
    height: '3rem',
    backgroundColor: '#333',
    color: '#fff'
  },
  centered: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)'
  }
}

export default class Header extends Component {
  render() {
    return (
      <div style={{style.container}}>
        <div style={{style.centered}}>Doot</div>
      </div>
    )
  }
}