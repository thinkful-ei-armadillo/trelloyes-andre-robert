import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import {STORE} from './store'

describe('Card component testing', () => {
  // smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header="Test" cards={[STORE.allCards.a, STORE.allCards.c, STORE.allCards.f]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header="Test" cards={[STORE.allCards.a,STORE.allCards.c,STORE.allCards.f]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
 });