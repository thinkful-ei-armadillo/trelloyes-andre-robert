import React, { Component } from 'react';
import './List.css';
import Card from './Card';

class List extends Component {
  render() {
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {this.props.cards.map((card, index) => <Card key={index} title={card.title} content={card.content} />)}
        </div>
      </section>
    )
  }
}

export default List;
