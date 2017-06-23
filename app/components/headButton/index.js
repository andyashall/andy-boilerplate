import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const style = {
  option: {
    display: 'inline-block',
    color: '#fff',
    padding: '5px 10px'
  },
  optionHov: {
    display: 'inline-block',
    color: 'rgba(255,255,255,.65)',
    padding: '5px 10px'
  }
}

export default class HeadButton extends Component {
  constructor(props) {
    super(props)
    this.state = {hov: false}
  }
  render() {
    return (
      <Link to={this.props.link}>
        <div style={this.state.hov ? style.optionHov : style.option} onMouseEnter={()=>{this.setState({hov:true})}} onMouseLeave={()=>{this.setState({hov:false})}}>{this.props.text}</div>
      </Link>
    )
  }
}