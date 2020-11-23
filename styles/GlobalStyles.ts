import { StatusBar, StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  SafeArea: {
    flex: 1
  },
  SearchInput: { 
    borderWidth: 1, 
    borderColor: 'grey',
    height: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10, 
    backgroundColor: 'white'
  },
  Background: { 
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%'
  },
  MainText: { 
    color: '#77aeb7',
    fontFamily: 'Goldman'
  }
});


