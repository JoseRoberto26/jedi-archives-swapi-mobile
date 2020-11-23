import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import CharacterList from './screens/CharacterList/characterList';
import CharacterDetails from './screens/CharacterDetails/characterDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { Provider } from 'mobx-react';
import Stores from './stores/RootStore';
import * as Font from "expo-font";
import { AppLoading } from 'expo';
import { useFonts } from "@use-expo/font";


const Stack = createStackNavigator();

const customFonts = {
  Goldman: require("./assets/fonts/Goldman-Regular.ttf")
}

const App = () => {

  const headerOptions: StackHeaderOptions = {
    headerStyle: {
       backgroundColor: 'black',
      
      },
      headerTintColor: 'white', 
      headerTitleStyle: { 
        fontFamily: 'Goldman',
        marginRight: 'auto',
        marginLeft: 'auto',
        alignSelf: 'center'
      },
      headerTitleContainerStyle: {
        left: 0
      }
  }

  const [isLoaded] = useFonts(customFonts);



  return (
    <>
      {!isLoaded ? <AppLoading />
      :
      (
        <Provider {...Stores}>
          <NavigationContainer >
            <Stack.Navigator>
              <Stack.Screen options={headerOptions} name="Jedi Archives" component={CharacterList}></Stack.Screen>
              <Stack.Screen  options={headerOptions}  name="Profile" component={CharacterDetails}></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer> 
        </Provider>
      )
      }
      
     </> 
      
  );
};

export default App;


