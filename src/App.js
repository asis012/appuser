import './App.css';

import React, { Component } from 'react';
import ListPeople from './Components/ListPeople';
import axios from 'axios';
import Header from './Components/Header';
import People from './Components/People';

export class App extends Component {
  state = {
    persons: [],
    profile: false,
    clickedID: '',
    display: 'block'
  };
  componentDidMount() {
    axios.get('https://mock-io.herokuapp.com/users').then(res => {
      this.setState({ persons: res.data });
    });
  }

  clickHandler = id => {
    this.setState({
      profile: true,
      clickedID: id,
      display: 'block'
    });
  };

  spanHandler = () => {
    this.setState({
      display: 'none'
    });
  };

  render() {
    var rendering;
    if (this.state.profile) {
    }

    return (
      <div className="App">
        <Header />
        <ListPeople people={this.state} clickHandler={this.clickHandler} />

        {this.state.profile ? (
          <People
            info={this.state.persons}
            id={this.state.clickedID}
            dis={this.state.display}
            spanHandler={this.spanHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
