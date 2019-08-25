import React, { Component } from "react";
import HumanScore from "./HumanScore";
import ComputerScore from "./ComputerScore";
import Row from "react-bootstrap/Row";

export default class Score extends Component {
  render() {
    return (
      <Row style={{ padding: "1em 1em" }}>
        <HumanScore humanScore={this.props.humanScore}></HumanScore>

        <ComputerScore computerScore={this.props.computerScore}></ComputerScore>
      </Row>
    );
  }
}
