import React, { Component } from 'react'
import WrappedApp from './SearchGithubs'
import { Row, Col } from 'antd'

export default class Main extends Component {
  render() {
    return (
      <div>
      <Row>
        <Col span={20}>
      <WrappedApp />
        </Col>
      </Row>
      <Row>
        <Col span={20}>
          {this.props.children}
        </Col>
      </Row>
      </div>
    )
  }
}
