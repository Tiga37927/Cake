/**
 * Created by Administrator on 2017/4/30.
 */
let BaseURL = 'https://api.douban.com/v2/';
/*
接口api
给予豆瓣开放api的图书、电影
 */
const Douban_APIS = {
    /*
    图书搜索
     */
    book_search: BaseURL + "book/search",
    /*
    图书详情
     */
    book_detail_id: BaseURL + "book/",
    /*
    电影搜索
     */
    movie_search: BaseURL + "movie/search"
};
module.exports = Douban_APIS;