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

import Cake from './src/demos/Cake';
import LayoutAnimationDemo from './src/demos/LayoutAnimationDemo';
import CoreComponents from './src/demos/CoreComponents'

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Cake', () => CoreComponents);
