import React, { Component } from "react";
import Col from "react-bootstrap/Col";

export default class ComputerScore extends Component {
  render() {
    return (
      <Col className="bg-danger">
        <h1>Computer Score: {this.props.computerScore}</h1>
      </Col>
    );
  }
}
