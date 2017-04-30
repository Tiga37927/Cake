/**
 * Created by Administrator on 2017/4/30.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import BookList from './components/BookList';
import Navigation from './components/Navigation';

// 隐藏状态栏
StatusBar.setHidden(true);
// tab管理两个模块
export default class DoubleProject extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'home'
        }
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="图书"
                    renderIcon={() => <Text style={{fontFamily: 'iconfont'}}>&#xe70a;</Text>}
                    renderSelectedIcon={() => <Text style={{fontFamily: 'iconfont'}}>&#xe709;</Text>}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Navigation component={BookList}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="电影"
                    renderIcon={() => <Text style={{fontFamily: 'iconfont'}}>&#xe715;</Text>}
                    renderSelectedIcon={() => <Text style={{fontFamily: 'iconfont'}}>&#xe714;</Text>}
                    badgeText="55"
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <Text>电影</Text>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});