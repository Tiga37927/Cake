/**
 * Created by yx on 2017/4/28.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class ImageDemo extends Component {
    render() {
        return (
            <View>
                <Text>测试加载本地图片</Text>
                <Image source={require('../thumbnails/bunny.png')}/>
            </View>
        )
    }
}