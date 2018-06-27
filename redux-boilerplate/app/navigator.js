import React, { Component } from 'react'

import HomeScreen from './screens/homeScreen'
import CategoriesScreen from './screens/categoriesScreen'

import { StackNavigator, addNavigationHelpers } from 'react-navigation'

export const Navigator = new StackNavigator({
    HomeScreen: { screen: HomeScreen },
    CategoriesScreen: { screen: CategoriesScreen},
},{
  initialRouteName: 'HomeScreen',
})

class Nav extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}
      
export default Nav