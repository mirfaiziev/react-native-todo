/**
 * Created by Victor on 22/05/2018.
 */

import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Alert
} from 'react-native';

class TodoScreen extends React.Component {
  endEditingHandler = (event) => {
    Alert.alert(event.nativeEvent.text)
  };

  render() {
    const {todos} = this.props;
    return (
      <View style={styles.container}>
        <Text>Todo List</Text>
        <TextInput
          autoCorrect={false}
          placeholder={"add todo"}
          onEndEditing={this.endEditingHandler}
        />
        <FlatList
          data={todos}
          renderItem={({item}) => <Text>{item.todoText}</Text>}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    )
  }
}

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 100
  },
});
