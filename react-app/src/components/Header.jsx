import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div
        className="text-center text-white"
        style={{ padding: "0.5em 0.5em" }}
      >
        <h1>Rock, Paper, Scissors Game!</h1>
      </div>
    );
  }
}
