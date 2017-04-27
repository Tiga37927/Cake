/**
 * Created by yx on 2017/4/27.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    LayoutAnimation,
    TouchableHighlight,
    Platform,
    UIManager
} from 'react-native';

class CustomButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor='#a5a5a5'
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        )

    }
}
let CustomLayoutAnimation = {
    duration: 800,
    create: {
        type: LayoutAnimation.Types.linear,
        propperty: LayoutAnimation.Properties.opacity
    },
    update: {
        type: LayoutAnimation.Types.easeInEaseOut,
    }
};
export default class LayoutAnimationDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            views: [],
            num: 0
        };
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true)
        }
    }
    componentWillUpdate() {
        console.log('componentWillUpdate...')
        LayoutAnimation.easeInEaseOut();
    }
    handleAddView() {
        this.setState({num: Number.parseInt(this.state.num)+1})
    }
    handleRemoveView() {
        this.setState({num: Number.parseInt(this.state.num)-1})
    }
    renderAddedView(i) {
        return (
            <View key={i} style={styles.view}>
                <Text style={{color: '#fff'}}>{i}</Text>
            </View>
        )
    }
    render() {
        this.state.views.length = 0;
        for (let i = 0; i<this.state.num; i++) {
            this.state.views.push(this.renderAddedView(i));
        }
        return (
            <View style={{marginTop:20,margin:10}}>
                <Text style={styles.welcome}>
                    LayoutAnimation实例演示
                </Text>
                <CustomButton text="添加View"  onPress={this.handleAddView.bind(this)}/>
                <CustomButton text="删除View"  onPress={this.handleRemoveView.bind(this)}/>
                <View style={styles.viewContainer}>
                    {this.state.views}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd'
    },
    viewContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    view: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
    }
});