import React, { Component } from "react";
import Header from "./Header";
import Score from "./score/Score";
import GameOption from "./gameOptions/GameOption";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Reset from "./Reset";

export default class Game extends Component {
  state = {
    humanScore: 0,
    computerScore: 0,
    rock: {
      id: 0,
      name: "rock"
    },
    paper: {
      id: 1,
      name: "paper"
    },
    scissors: {
      id: 2,
      name: "scissors"
    }
  };

  getComputerChoice = () => {
    return Math.floor(Math.random() * 3);
  };

  handleSelection = (selection, e) => {
    const computerChoice = this.getComputerChoice();

    if (selection === computerChoice) {
      //   alert("You are tied.");
    }

    switch (selection) {
      case 0:
        console.log("rock");
        if (computerChoice == 1) {
          //   alert("You lost.");
          this.setState({ computerScore: this.state.computerScore + 1 });
        } else if (computerChoice == 2) {
          //   alert("You won.");
          this.setState({ humanScore: this.state.humanScore + 1 });
        }
        break;
      case 1:
        console.log("paper");
        if (computerChoice == 2) {
          //   alert("You lost.");
          this.setState({ computerScore: this.state.computerScore + 1 });
        } else if (computerChoice == 0) {
          //   alert("You won.");
          this.setState({ humanScore: this.state.humanScore + 1 });
        }
        break;
      case 2:
        console.log("scissor");
        if (computerChoice == 0) {
          //   alert("You lost.");
          this.setState({ computerScore: this.state.computerScore + 1 });
        } else if (computerChoice == 1) {
          //   alert("You won.");
          this.setState({ humanScore: this.state.humanScore + 1 });
        }
        break;
    }
  };

  handleReset = () => {
    this.setState({ computerScore: 0, humanScore: 0 });
  };

  render() {
    const state = this.state;
    return (
      <div className="wrapper">
        <Header></Header>

        <Container className="text-center">
          <Score
            humanScore={state.humanScore}
            computerScore={state.computerScore}
          ></Score>
          <Reset onReset={this.handleReset}></Reset>
          <Row style={{ padding: "1em 1em" }}>
            <GameOption
              onSelection={this.handleSelection}
              option={this.state.rock}
            ></GameOption>
            <GameOption
              onSelection={this.handleSelection}
              option={this.state.paper}
            ></GameOption>
            <GameOption
              onSelection={this.handleSelection}
              option={this.state.scissors}
            ></GameOption>
          </Row>
        </Container>
      </div>
    );
  }
}
