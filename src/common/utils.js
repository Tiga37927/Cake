/**
 * Created by Administrator on 2017/4/30.
 */
/*
获取属性
外部传入：type，url，请求成功、请求失败的毁掉方法
 */
import React, {Component} from 'react';
import {
    Dimensions, //用于获取设备屏幕尺寸
    ActivityIndicator, // loading
} from 'react-native';

let Utils = {
    windowSize: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    // 给予fetch的方法，successCallback 数据下载成功回调，failCallback失败回调
    getRequest: function (options) {
        fetch(options.url, {method: options.type || 'get'})
        .then((response) => response.json())
        .then((responseData) => options.success(responseData))
        .catch((error) => options.fail(error));
    },
    // loading
    loading: <ActivityIndicator style={{marginTop: 200}}/>,
};

module.exports = Utils;





