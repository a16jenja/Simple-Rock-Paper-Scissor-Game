import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default class GameOptions extends Component {
  render() {
    return (
      <Col>
        <Image
          src={`https://www.rock-paper-scissors-game.com/i/${this.props.option.name}.png`}
          rounded
          fluid
          onClick={e => this.props.onSelection(this.props.option.id)}
          style={{ cursor: "pointer" }}
        ></Image>
      </Col>
    );
  }
}
