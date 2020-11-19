import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { globalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <SafeAreaView style={globalStyles.SafeArea}>
      <View>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;


