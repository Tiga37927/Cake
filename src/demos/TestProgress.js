/**
 * Created by Administrator on 2017/4/29.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    ProgressBarAndroid,
} from 'react-native';

export default class TestProgress extends Component {
    render() {
        return (
            <View>
                <Text>
                    ProgressTest
                </Text>
                <ProgressBarAndroid color="red" styleAttr="Inverse"/>
                <ProgressBarAndroid  color="black" styleAttr='SmallInverse'
                                     style={{marginTop:10}}/>
                <ProgressBarAndroid color="black" styleAttr="LargeInverse" indeterminate={true} />

                <ProgressBarAndroid  color="green" styleAttr='Horizontal' progress={0.2}
                                     indeterminate={false} style={{marginTop:10}}/>
            </View>
        )
    }
}
