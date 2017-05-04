/**
 * Created by Administrator on 2017/4/30.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import ServiceURL from '../common/service';
import Util from '../common/utils';
import Header from './Header';
import BookItem from './BookItem';

export default class BookDetail extends Component {
    constructor() {
        super();
        this.state = {
            bookData: {} // 图书详情
        }
    }
    componentDidMount () {
        this.handleGetBookDetail()
    }
    handleGetBookDetail() {
        let _this = this;
        let opt = {
            url: ServiceURL.book_detail_id.data_url + this.props.bookID,
            type: 'get',
            success: function (data) {
                _this.setState({bookData: data})
            },
            fail: function (error) {
                console.log(error);
                let data = require('../data/bookItem.json');
                _this.setState({
                    bookData: data
                });
            }
        };
        Util.getRequest(opt);
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                {
                    this.state.bookData ?
                        <View>
                            <Header
                                headerContent={{backName: "图书", barTitle: this.state.bookData.title}}
                                navigator={this.props.navigator}/>
                            <BookItem book={this.state.bookData}/>
                            <View>
                                <Text style={styles.title}>图书简介</Text>
                                <Text style={styles.text}>{this.state.bookData.summary}</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>作者简介</Text>
                                <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
                            </View>
                            <View style={{height: 55}}>

                            </View>
                        </View>
                    : Util.loading
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        color: '#000'
    }
});
