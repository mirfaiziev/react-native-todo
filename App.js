import React from 'react';
import TodoScreen from './src/screens/TodoScreen'
import LoginScreen from './src/screens/LoginScreen'
import {
    createStackNavigator,
} from 'react-navigation';

export  default createStackNavigator({
    LoginScreen: { screen: LoginScreen },
    TodoScreen: { screen: TodoScreen },
}, {
    initialRouteName: 'LoginScreen',
});


