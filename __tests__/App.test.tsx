import 'react-native';
import React from 'react';
import App from '../App';

import CharacterDetails from '../screens/CharacterDetails/characterDetails'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('initial test', () => { 
  it('renders correctly', () => {
      const tree = renderer.create(<App></App>).toJSON();
      expect(tree).toMatchSnapshot()
      
  });
})
