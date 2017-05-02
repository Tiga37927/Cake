/**
 * Created by Administrator on 2017/4/30.
 */
let BaseURL = 'https://api.douban.com/v2/';
let TestURL = 'https://github.com/youngauto/Cake/blob/master/src/data/';
/*
接口api
给予豆瓣开放api的图书、电影
 */
const Douban_APIS = {
    /*
    图书搜索
     */
    book_search: {
        test_url: TestURL + 'books.json',
        data_url: BaseURL + "book/search"
    },

    /*
    图书详情
     */
    book_detail_id: {
        test_url: TestURL + 'bookItem.json',
        data_url: BaseURL + "book/"
    },
    /*
    电影搜索
     */
    movie_search: {
        test_url: TestURL + 'moives.json',
        data_url: BaseURL + "movie/search"
    }
};
module.exports = Douban_APIS;