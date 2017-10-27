import React, { Component } from 'react';
import logo from './logo.svg';
import { Main, Header, Logo, Title, Intro } from './App.styles';
import Inner from './Inner';
import PropTypes from 'prop-types';

class App extends Component {

  state = {
    name: "Loh"
  };

  static childContextTypes = {
    currentUser: PropTypes.string
  };

  getChildContext(name = "Loh") {
    return {currentUser: this.state.name};
  }

  changeContext() {
    this.setState({
      name: this.state.name === "Loh" ? "NeLoh" : "Loh"
    });
  }

  render() {
    return (
      <Main>
        <Inner/>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
        <button onClick={() => {this.changeContext()}}>Click me</button>
      </Main>
    );
  }
}

export default App;
