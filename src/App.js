import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication app" />
        <Text>This will be the app</Text>
      </View>
    );
  }
}

export default App;
