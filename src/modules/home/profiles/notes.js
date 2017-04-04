import React, { Component } from 'react'

export default class Notes extends Component {
  render() {
    return (
     <h1>Notes list. message: {this.props.username}</h1>
    )
  }
}
