/**
 * Created by yx on 2017/5/4.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';


export default class MoiveItem extends Component {
    static propTypes = {
        onPress: PropTypes.func,
        movie: PropTypes.object
    };
    render() {
        let movie = this.props.movie;
        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: movie.images.medium}}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={{color: '#000'}}>名称：</Text>
                        <Text>《{movie.title}》</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{color: '#000'}}>标签：</Text>
                        <Text>{movie.genres.join(' ')}年</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{color: '#000'}}>主演：</Text>
                        {movie.casts.map((cast, i) =>
                            <Text style={styles.cast} key={i}>{cast.name}</Text>
                        )}
                    </View>
                    <View style={styles.textContainer}>
                        <Text>{movie.year}年</Text>
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
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',
    },
    cast: {
        marginRight: 10
    }
});
