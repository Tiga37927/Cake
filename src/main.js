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
            selectedTab: 'book'
        }
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'book'}
                    title="图书"
                    renderIcon={() => <Text style={{fontFamily: 'iconfont', fontSize: 18}}>&#xe6fb;</Text>}
                    renderSelectedIcon={() => <Text style={{fontFamily: 'iconfont', fontSize: 18}}>&#xe716;</Text>}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'book' })}>
                    <Navigation component={BookList}/>
                    {/*<Text>图书</Text>*/}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'movie'}
                    title="电影"
                    renderIcon={() => <Text style={{fontFamily: 'iconfont', fontSize: 18}}>&#xe680;</Text>}
                    renderSelectedIcon={() => <Text style={{fontFamily: 'iconfont', fontSize: 18}}>&#xe607;</Text>}
                    badgeText="10"
                    onPress={() => this.setState({ selectedTab: 'movie' })}>
                    <Text>电影</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'music'}
                    title="音乐"
                    renderIcon={() => <Text style={{fontFamily: 'iconfont', fontSize: 18}}>&#xe680;</Text>}
                    renderSelectedIcon={() => <Text style={{fontFamily: 'iconfont', fontSize: 18}}>&#xe607;</Text>}
                    badgeText="5"
                    onPress={() => this.setState({ selectedTab: 'music' })}>
                    <Text>音乐</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'center'}
                    title="个人中心"
                    renderIcon={() => <Text style={{fontFamily: 'iconfont', fontSize: 18}}>&#xe7d5;</Text>}
                    renderSelectedIcon={() => <Text style={{fontFamily: 'iconfont', fontSize: 18}}>&#xe7d9;</Text>}
                    badgeText=""
                    onPress={() => this.setState({ selectedTab: 'center' })}>
                    <Text>个人中心</Text>
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