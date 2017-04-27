/**
 * Created by yx on 2017/4/27.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
export default class CoreComponent extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text>CoreComponent</Text>
                <Text style={{fontFamily:'iconfont', fontSize: 30}}>&#xe603;</Text>
                <Text style={{fontFamily:'iconfont', fontSize: 30}}>&#xe602;</Text>
                <Text style={{fontFamily:'iconfont', fontSize: 30}}>&#xe604;</Text>
                <Text style={{fontFamily:'iconfont', fontSize: 30}}>&#xe605;</Text>
                <Text style={{fontFamily:'iconfont', fontSize: 30}}>&#xe600;</Text>
                <Text style={{fontFamily:'iconfont', fontSize: 30}}>&#xe650;</Text>
                <Text style={{fontFamily:'iconfont', fontSize: 30}}>&#xe686;</Text>
            </View>
        )
    }
}