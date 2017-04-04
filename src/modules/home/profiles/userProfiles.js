import React, { Component, PropTypes } from 'react'

export default class UserProfile extends Component {
  render() {
    const { username, info } = this.props
      console.log(info)
    return (
      <div>
     <h1>UserProfile list. message: {username} </h1><h1> info: {info.name}</h1>
     </div>
    )
  }
}

UserProfile.PropTypes = {
    username: PropTypes.string.required,
    info: PropTypes.object
}
