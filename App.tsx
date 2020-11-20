import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import CharacterList from './screens/CharacterList/characterList';
import CharacterDetails from './screens/CharacterDetails/characterDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';

const Stack = createStackNavigator();

const App = () => {

  const headerOptions: StackHeaderOptions = {
    headerStyle: {
       backgroundColor: 'black',
      
      },
      headerTintColor: 'white', 
      headerTitleStyle: { 
        fontWeight: 'bold',
        alignSelf: 'center'
      }
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={headerOptions} name="Jedi Archives" component={CharacterList}></Stack.Screen>
        <Stack.Screen  options={headerOptions}  name="Profile" component={CharacterDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;


