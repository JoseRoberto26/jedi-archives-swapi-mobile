import { StatusBar, StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight ?  (StatusBar.currentHeight + 20) : 20,
  },
  SearchInput: { 
    borderWidth: 1, 
    borderColor: 'grey',
    height: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10, 
    backgroundColor: 'white'
  }
});


