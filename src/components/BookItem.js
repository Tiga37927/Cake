/**
 * Created by Administrator on 2017/4/30.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class BookItem extends Component {
    render() {
        let book = this.props.book;
        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: book.image}}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>{book.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_anthor} numberOfLines={1}>{book.publisher}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_anthor} numberOfLines={1}>{book.author}</Text>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                        <Text style={styles.price} numberOfLines={1}>{book.price}</Text>
                        <Text style={styles.pages} numberOfLines={1}>{book.pages}页</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        height: 120,
        padding: 10
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 100
    },
    contentContainer: {
        flex: 1,
        marginLeft: 15
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    publisher_anthor: {
        color: '#a3a3a3',
        fontSize: 13
    },
    price: {
        color: '#2bb2a3',
        fontSize: 16
    },
    pages: {
        marginLeft: 10,
        color: '#a7a0a0'
    }

});