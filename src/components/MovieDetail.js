/**
 * Created by yx on 2017/5/4.
 */
/**
 * Created by Administrator on 2017/4/30.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native';
import ServiceURL from '../common/service';
import Util from '../common/utils';
import Header from './Header';
import MovieItem from './MovieItem';

export default class MovieDetail extends Component {
    constructor() {
        super();
        this.state = {
            movieData: null // 图书详情
        }
    }
    componentDidMount () {
        this.handleGetMovieDetail()
    }
    handleGetMovieDetail() {
        let _this = this;
        let opt = {
            url: ServiceURL.movie_detail_id.data_url + "/" + this.props.movieID,
            type: 'get',
            success: function (data) {
                _this.setState({movieData: data})
            },
            fail: function (error) {
                console.log(error);
                let data = require('../data/movieItem.json');
                _this.setState({
                    movieData: data
                });
            }
        };
        Util.getRequest(opt);
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                {
                    this.state.movieData ?
                        <View>
                            <Header
                                headerContent={{backName: "电影", barTitle: this.state.movieData.title}}
                                navigator={this.props.navigator}/>
                            <MovieItem movie={this.state.movieData}/>
                            <View>
                                <Text style={styles.title}>电影简介</Text>
                                <Text style={styles.text}>{this.state.movieData.summary}</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>剧照</Text>
                                {this.state.movieData.casts.map((cast, i) =>
                                    <View style={styles.cast} key={i}>
                                        <Image style={styles.castImage} source={{uri: cast.avatars.large}}/>
                                        <View style={styles.castName}>
                                            <Text style={{color: '#000'}}>演员名称：</Text>
                                            <Text>{cast.name}</Text>
                                        </View>
                                    </View>
                                )}
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
    },
    cast: {
        flexDirection: 'row',
        height: 120,
        padding: 10
    },
    castImage: {
        width: 80,
        height: 100,
    },
    castName: {
        flexDirection: 'row',
        flex: 1,
        marginLeft: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});
