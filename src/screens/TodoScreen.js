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
  Alert,
  AsyncStorage,
  SectionList
} from 'react-native';

class TodoScreen extends React.Component {
  state = {
    todoList: [],
    inputValue: ''
  };

   /*componentDidMount()  {
    try {
     /!* const value = await AsyncStorage.getItem('@Todo:list');
      if (value !== null) {
        this.setState({todoList: value});
      }*!/
      console.log('component mount: ' + this.state.todoList)
    } catch (error) {
      console.log('error: '+error);
    }
  };*/



   endEditingHandler = (event) => {
     let todoList = this.state.todoList;
     let todoObject = {
       id: (this.state.todoList.length+1).toString(),
       todoText: event.nativeEvent.text
     };
     this._todoInput.setNativeProps({text: ''});

     todoList.push(todoObject);
     this.setState({todoList: todoList, inputValue: ''})
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Todo List</Text>
        <TextInput
          value={this.state.inputValue}
          onChangeText={(value) => {
              this.setState({inputValue: value});
          }}
          defaultValue={""}
          autoCorrect={false}
          placeholder={"add todo"}
          onEndEditing={this.endEditingHandler}
          ref={component => {this._todoInput = component}}
          blurOnSubmit={true}
          clearTextOnFocus={true}
        />
        <FlatList
          data={this.state.todoList}
          extraData={this.state.todoList.length}
          renderItem={({item}) => <Text>- {item.todoText}    (x)</Text>}
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
