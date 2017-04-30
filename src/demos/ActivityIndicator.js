/**
 * Created by Administrator on 2017/4/29.
 */
import React, {Component} from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';

export default class ActivityIndicator extends Component {
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        backgroundColor: '#E9EAED',
        height: 56,
    },
    drawerContentWrapper: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'white',
    },
});