/**
 * Created by Administrator on 2017/4/30.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';
/*
 搜索框按钮
 外部传入：
 输入框和按钮样式, 按钮名称、标题
 */
export default class LeftIcon extends Component {
    render() {
        return (
            <TouchableOpacity>
                <Text style={styles.go}>
                    &#xe697;
                </Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    go: {
        fontFamily: 'iconfont',
        fontSize: 26,
        marginLeft: 10,
        color: '#fff'
    },
});