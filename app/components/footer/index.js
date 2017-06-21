import React, {Component} from 'react'

const style = {
  container: {
    position: 'relative',
    width: '100%',
    height: '300px',
    backgroundColor: '#f2f2f2',
    color: '#888'
  },
  centered: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)'
  }
}

export default class Footer extends Component {
  render() {
    return (
      <div style={{style.container}}>
        <div style={{style.centered}}>Doot</div>
      </div>
    )
  }
}