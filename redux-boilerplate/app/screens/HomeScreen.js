import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator} from 'react-navigation';
//import {colors} from '../_base';
import Home from '../components/home/home' //Import the component file

export default class HomeScreen extends React.Component {

  /*
static navigationOptions = {
    title: 'RN Books'
}*/

  render() {
    //const {navigation} = this.props;
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
