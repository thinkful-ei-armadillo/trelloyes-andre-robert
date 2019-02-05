import React, { Component } from 'react';
import './App.css';
import List from './List';
import { STORE } from './store';

class App extends Component {
  static defaultProps = STORE;
  
  render() {
    let list = this.props.lists.map((list, index) => {
      let cards = list.cardIds.map(id => {
        return this.props.allCards[id];
      });

      return <List key = {index} header={list.header} cards={cards} ></List>;
    });

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {list}
        </div>
      </main>
    );
  }
}

export default App;
