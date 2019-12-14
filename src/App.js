import React, { Component } from "react";
import TarotCard from "./components/TarotCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import tarots from "./tarots.json";
import "./App.css";

function shuffleDeck(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    tarots,
    currentScore: 0,
    highScore: 0,
    message: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: "Excellent!"
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    } 
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      message: "This card was already clicked! A perfect score is not in the cards.",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledDeck = shuffleDeck(tarots);
    this.setState({ tarots: shuffledDeck });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Tarot Memory Challenge"
          score={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
        />

        <Title>
        Click each card <u>once</u> only; click all 12 once for a perfect score.
        </Title>
            {this.state.tarots.map(tarot => (
                <TarotCard
                  key={tarot.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={tarot.id}
                  image={tarot.image}
                />
            ))}
      </Wrapper>
    );
  }
}

export default App;