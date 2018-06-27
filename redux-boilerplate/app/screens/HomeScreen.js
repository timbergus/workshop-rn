import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from '../components/home/home' //Import the component file

export default class HomeScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Button
            title='Check the categories'  />
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF44'
  },
});
