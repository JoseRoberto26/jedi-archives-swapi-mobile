import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import CharacterList from './screens/CharacterList/characterList';
//import CharacterDetails from './screens/CharacterDetails/characterDetails';


const reactNavigation = require('react-navigation');


const Stack = reactNavigation.createStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigation>
        <Stack.Screen name="CharacterList" component={CharacterList}></Stack.Screen>
        {/* <Stack.Screen name="CharacterDetails" component={CharacterDetails}></Stack.Screen> */}
      </Stack.Navigation>
    </NavigationContainer>
    
  );
};

export default App;


