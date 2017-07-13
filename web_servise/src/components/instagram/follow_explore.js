import React, { Component } from 'react'
import { requestFollowExplore } from "lib/requests"
import { Row, Container, Col, Button } from 'reactstrap'
import Notification from 'lib/notification'

export default class FollowExplore extends Component {

  async handeClick () {
    try {
      await requestFollowExplore({ quit: 'true' })
      Notification.success("ready")
    } catch (err) {
      Notification.error(err)
    }
  }

  render() {
    return (
      <Button onClick={this.handeClick}>
        run FollowExplore
      </Button>
    )
  }

}

