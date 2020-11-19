import { StatusBar, StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
