/**
 * Created by Administrator on 2017/4/30.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Navigator,
    WebView
} from 'react-native';
import Header from './Header'

export default class CustomWebView extends Component{
    render() {
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <Header
                    navigator={this.props.navigator}
                    initObj={{
                        backName: this.props.backName,
                        barTitle: this.props.barTitle
                    }}/>
                <WebView
                    startInLoadingState={true}
                    contentInset={{top: -44, bottom: -120}}
                    source={{url: this.props.url}}/>
            </View>
        )
    }
}