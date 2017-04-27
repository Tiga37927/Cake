/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Cake extends Component {
  render() {
    return (
      <View style={{backgroundColor:'white',flex: 1,marginTop: 2,flexDirection:'row',alignItems: 'center',justifyContent: 'space-around',}} >
          <Text style={{ color: 'black', fontFamily:'iconfont',fontSize: 30 }}>&#xe603;</Text>
          <Text style={{ color: 'red', fontFamily:'iconfont',fontSize: 30 }}>&#xe602;</Text>
          <Text style={{ color: 'red', fontFamily:'iconfont',fontSize: 30 }}>&#xe604;</Text>
          <Text style={{ color: 'red', fontFamily:'iconfont',fontSize: 30 }}>&#xe605;</Text>
          <Text style={{ color: 'red', fontFamily:'iconfont',fontSize: 30 }}>&#xe600;</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Cake', () => Cake);
