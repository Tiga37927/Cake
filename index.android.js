/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';

import Cake from './src/components/Cake';
import LayoutAnimationDemo from './src/components/LayoutAnimationDemo';

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Cake', () => LayoutAnimationDemo);
