import React from 'react'

import ArticleListView from './articleListView.js'
import Article from '../article/index.js'

class Topic extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        let typeList = [{name: 'hot',title: '热门'}, 
                        {name: 'recommend',title: '推荐'}]
        return (
            <div className="content">
                <ShowBar />
                <Article shouldShow="hot" typeList={typeList} ArticleList={ArticleListView} />
            </div>
        )
    }
}

export default Topic

function ShowBar() {
    return (
        <div className="showbar">
            <div className="cover-image"></div>
            <div className="text">
            <h1>专题</h1>
            <h3>让思想汇聚，流传</h3>
            <p>专题内容由多位写作者提供</p>
            <a href="#"><i className="iconfont icon-pen"></i>新建专题</a>
            </div>
        </div>
    )
}