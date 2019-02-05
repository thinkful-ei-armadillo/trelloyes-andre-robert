import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component testing', () => {
  // smoke test
  it('renders without crashing', () => { 
    const div = document.createElement('div'); 
    ReactDOM.render(<Card />, div); 
    ReactDOM.unmountComponentAtNode(div);
  });

  // snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card title="Test" content="test content" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});