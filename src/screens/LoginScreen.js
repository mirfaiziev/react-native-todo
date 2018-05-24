import React, {Component} from 'react'
import {View, Text, TextInput, Button} from 'react-native'

class LoginScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>Login</Text>
                <TextInput placeholder={"Login"}></TextInput>
                <TextInput placeholder={"Password, todo:change it to secret"}></TextInput>
            </View>
        )
    }
}

export default LoginScreen;
