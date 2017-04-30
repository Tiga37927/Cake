/**
 * Created by Administrator on 2017/4/29.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    DrawerLayoutAndroid,
} from 'react-native';

export default class TestDrawerLayout extends Component {
    render() {
        let navigationView = (
            <View style={{flex: 1,backgroundColor: 'blue'}}>
                <Text style={{marginTop: 10,color: '#fff',fontSize: 15,textAlign: 'center'}}>aaa</Text>
                <Text style={{marginTop: 10,color: '#fff',fontSize: 15,textAlign: 'center'}}>aaa</Text>
                <Text style={{marginTop: 10,color: '#fff',fontSize: 15,textAlign: 'center'}}>aaa</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={150}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={()=>navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text>布局主内容</Text>
                </View>
            </DrawerLayoutAndroid>
        )
    }
}
const styles = StyleSheet.create({});
