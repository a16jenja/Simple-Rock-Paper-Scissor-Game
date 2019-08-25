import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Reset extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={e => {
            this.props.onReset();
          }}
        >
          Reset
        </Button>
      </div>
    );
  }
}
