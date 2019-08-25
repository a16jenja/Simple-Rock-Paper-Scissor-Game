import React, { Component } from "react";
import Col from "react-bootstrap/Col";

export default class HumanScore extends Component {
  render() {
    return (
      <Col className="bg-primary">
        <h1>Human Score: {this.props.humanScore}</h1>
      </Col>
    );
  }
}
