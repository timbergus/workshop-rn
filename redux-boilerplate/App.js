
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/store'; //Import the store
import Navigator from './app/navigator'; //Import the navigator
//import HomeScreen from './app/screens/HomeScreen' //Import the component file


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}