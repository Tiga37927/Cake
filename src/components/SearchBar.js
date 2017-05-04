/**
 * Created by Administrator on 2017/4/30.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types';
/*
搜索框按钮
外部传入：
输入框和按钮样式
 */
export default class SearchBar extends Component {
    static propTypes = {
        onPress: PropTypes.func,
        onChangeText: PropTypes.func
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} {...this.props}/>
                </View>
                <TouchableOpacity style={styles.btn} {...this.props}>
                    <Text style={styles.search}>搜索</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        height: 44,
        marginTop: 10
    },
    inputContainer: {
        flex: 1,
        marginLeft: 5,
    },
    input: {
        flex: 1,
        height: 44,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ccc',
        paddingLeft: 5,
    },
    btn: {
        width: 55,
        height: 44,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#32eaff',
        borderRadius: 4,
    },
    search: {
        flex: 1,
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 34,
    }
});
