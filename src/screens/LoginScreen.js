import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <TextInput placeholder={"Login"}></TextInput>
                <TextInput placeholder={"Password, todo:change it to secret"}></TextInput>
                <Button title={"Go"}
                        onPress={() =>
                            this.props.navigation.navigate('TodoScreen')
                        }

                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default LoginScreen;
