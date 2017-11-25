import React from 'react'

import Article from '../article/index.js'
import {} from './content.scss'
import ArticleListView from './articleListView.js'

class Home extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        let typeList = [{name: 'hot',title: '热门'}, 
                        {name: 'new',title: '新上榜'},
                        {name: 'daily', title: '日报'},
                        {name: 'weekhot', title: '七日热门'},
                        {name: 'monthhot', title: '三十日热门'},
                        {name: 'reward', title: '有奖活动'},
                        {name: 'publish', title: '简书出版'},
                        {name: 'video', title: '简书播客'},
                        {name: 'hotnews', title: '时事热闻'},
                        {name: 'choice', title: '专题精选'}]
        return (
            <div className="article-area">
                <ShowBar />
                <Article shouldShow="daily" typeList={typeList} ArticleList={ArticleListView} />
            </div>
        )
    }
}

export default Home

function ShowBar() {
    return (
        <div className="showbar">
            <div className="cover-image"></div>
            <div className="text">
                <h1>简书</h1>
                <h3>交流故事，沟通想法</h3>
                <p>一个基于内容分享的社区</p>
                <a href="#"><i className="iconfont icon-v1"></i>提笔写篇文章</a>
            </div>
        </div>
    )
}