import React, { Component } from 'react'

import HeadButton from '../../components/headButton'

const style = {
  container: {
    position: 'relative',
    height: '3rem',
    backgroundColor: '#333',
    color: '#fff',
    width: '100%',
    fontSize: '.9rem'
  },
  left: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '20px'
  },
  right: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '20px'
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {a: 1}
  }
  render () {
    return(
      <div style={style.container}>
        <div style={style.left}>
          <HeadButton text='Home' link='/' />
          <HeadButton text='About' link='/about' />
        </div>
        <div style={style.right}>Andy's Boilerplate</div>
      </div>
    )
  }
} 