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
import CoreComponents from './src/demos/CoreComponents';
import ImageDemo from './src/demos/ImageDemo';

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Cake', () => ImageDemo);
