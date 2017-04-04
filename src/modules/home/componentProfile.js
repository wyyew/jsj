import React, { Component } from 'react'
import { Row, Col } from 'antd'

import { Notes, UserRepos, UserProfile } from './profiles'
import getGitHubInfo from './utils/getGitHubInfo'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state={
      info: {},
      repos: [],
      notes:[ ]

    }
  }
  componentWillReceiveProps( nextProps ){
    console.log(nextProps.params.username)
    this.update(nextProps.params.username)
  }
  componentDidMount() {
    const { username } =  this.props.params;
    this.update(username)
  }
  update ( username ) {
    console.log('update ' + username)
    getGitHubInfo( username )
    .then( data => {
      console.log(data.userInfo)
      this.setState =({
        info:data.userInfo,
        repos:data.userRepos
      })
    })
  }
  render() {
const { username } =  this.props.params;
    return (
      <Row>
      <Col span={8}><UserProfile
        username={username}
        info={this.state.info}
         /></Col>
      <Col span={8}><UserRepos
       username={username}
         repos={this.state.repos}
        /></Col>
      <Col span={8}><Notes
       username={username}
       notes={this.state.notes}
          />
       </Col>
    </Row>

    )
  }
}
