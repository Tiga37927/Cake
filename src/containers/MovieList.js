/**
 * Created by yx on 2017/5/4.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    ListView,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import MovieItem from '../components/MovieItem';
import MovieDetail from '../components/MovieDetail';

import Util from '../common/utils';
import ServiceURL from '../common/service';

export default class MovieList extends Component {
    constructor() {
        super();
        let ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            dataSource: ds,
            hasLoad: false,
            keywords: '张艺谋'
        }
    }
    componentDidMount() {
        this.handleGetData();
    }
    handleGetData() {
        this.setState({hasLoad: false});
        let ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        let _this = this;
        let opt = {
            url: ServiceURL.movie_search.data_url + "?count=20&tag=" + this.state.keywords,
            type: 'get',
            success: function(data) {
                if (!data.subjects || data.subjects.length == 0) {
                    _this.setState({hasLoad: true});
                    return console.warn("未查询到相关数据")
                }
                // 如果成功，设置下载状态和数据源
                _this.setState({
                    hasLoad: true,
                    dataSource: ds.cloneWithRows(data.subjects)
                });
            },
            fail: function (error) {
                console.warn(error);
                let data = require('../data/movies.json');
                _this.setState({
                    hasLoad: true,
                    dataSource: ds.cloneWithRows(data.subjects)
                });
            }
        };
        Util.getRequest(opt)
    }
    handleSearchText() {
        this.handleGetData();
    }
    handleChangeText(text) {
        this.setState({keywords: text});
    }
    handleShowDetail(movieID) {
        let DetailRoute = {
            component: MovieDetail,
            passProps: {
                movieID: movieID
            }
        };
        this.props.navigator.push(DetailRoute);
    }
    render() {
        return (
            <ScrollView>
                <SearchBar
                    underlineColorAndroid='transparent'
                    placeholder="请输入电影信息"
                    onPress={this.handleSearchText.bind(this)}
                    onChangeText={this.handleChangeText.bind(this)}
                    />
                {
                    this.state.hasLoad ?
                        <ListView
                            dataSource={this.state.dataSource}
                            initialListSize={10}
                            renderRow={this._renderRow.bind(this)}
                            renderSeparator={this._renderSeparator}
                            />
                        : Util.loading
                }
            </ScrollView>
        )
    }
    _renderRow(movie) {
        return <MovieItem movie={movie} onPress={() => this.handleShowDetail(movie.id)}/>
    }
    _renderSeparator(sectionID:number, rowID:number) {
        let style = {
            height: 1,
            backgroundColor: '#ccc'
        };
        return <View style={style} key={sectionID+rowID}/>
    }
}