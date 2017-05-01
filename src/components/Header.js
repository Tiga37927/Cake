/**
 * Created by Administrator on 2017/4/30.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import LeftIcon from './LeftIcon';
export default class Header extends Component {
    static propTypes = {
        pop: PropTypes.func,
        headerContent: PropTypes.object
    };
    // 返回按钮事件处理
    handlePop() {
        this.props.pop()
    }
    render() {
        // 获取obj对象，包括按钮名称，title
        let headerContent = this.props.headerContent || {};
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.left_btn} onPress={this.handlePop}>
                    <LeftIcon/>
                    <Text style={styles.btn_text}>{headerContent.backName || ''}</Text>
                </TouchableOpacity>
                <View style={styles.title_container}>
                    <Text style={styles.title} numberOfLines={1}>{headerContent.barTitle || ''}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
       height: 44,
        backgroundColor: '#3497FF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    left_btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_text: {
       color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    title_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 18,
        fontWeight: 'bold',
        width: 200
    }
});