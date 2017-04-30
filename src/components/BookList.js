/**
 * Created by Administrator on 2017/4/30.
 */
import React, {Component} from 'react';
import {
    View,
    ListView,
    ScrollView
} from 'react-native';

import Util from '../common/utils';
import SearchBar from './SearchBar';
import ServiceUrl from '../common/service';
import BookItem from './BookItem';
import BookDetail from './BookDetail';

export default class BookList extends Component {
    constructor() {
        super();
        let ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            dataSource: ds,
            hasLoad: false,
            keywords: 'react'
        }
    }
    componentDidMount() {
        this.handleGetData();
    }
    handleGetData() {
        // 获取数据，开启loading
        this.setState({hasLoad: false});
        // 请求数据
        let _this = this;
        let url = ServiceUrl.book_search + "?count=20&q=" + this.state.keywords;
        let opt = {
            url: url,
            type: 'get',
            success: function (data) {
                if (!data.books || data.books.length == 0) {
                    return alert("未查询到相关数据")
                }
                // 如果成功，设置下载状态和数据源
                let ds = new ListView.DataSource({
                    rowHasChanged: (oldRow, newRow) => oldRow !== newRow
                });
                _this.setState({
                    hasLoad: true,
                    dataSource: ds.cloneWithRows(data.books)
                });
            },
            fail: function(error) {
                alert('222rr')
            }
        };
        Util.getRequest(opt)
    }
    // textinput onchange
    handleChangeText(text) {
        this.setState({
            keywords: text
        })
    }
    // searchPress
    handleSearchText() {
        this.handleGetData();
    }
    handleShowDetail(bookID) {
        let detailRoute = {
            component: BookDetail,
            passProps: {
                bookID: bookID
            }
        };
        this.props.navigator.push(detailRoute);
    }
    render() {
        return (
            <ScrollView>
                <SearchBar
                    underlineColorAndroid='transparent'
                    placeholder="请输入图书名称"
                    onPress={this.handleSearchText()}
                    changeText={this.handleChangeText}/>
                {/*请求数据时显示loading*/
                    this.state.hasLoad ?
                        <ListView
                            dataSource={this.state.dataSource}
                            initialListSize={10}
                            renderRow={this._renderRow}
                            renderSeparator={this._renderSeparator} />
                        : Util.loading
                }

            </ScrollView>
        )
    }
    _renderRow(book) {
        return <BookItem book={book} onPress={this.handleShowDetail.bind(this, book.id)}/>
    }
    _renderSeparator(sectionID:number, rowID:number) {
        let style = {
            height: 1,
            backgroundColor: '#ccc'
        };
        return <View style={style} key={sectionID+rowID}/>
    }
}


