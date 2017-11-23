import React from 'react'

import ArticleTypeList from './typeList'
import {} from './article.scss'
 
class Article extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        const ArticleList = this.props.ArticleList
        return (
            <div className="article-page">
                <ArticleNav />
                <ArticleTypeList show={this.props.shouldShow} articleTypeMap={this.props.typeList}/>
                <ArticleList />
            </div>
        )
    }
}

function ArticleNav() {
    return (
        <nav>
            <span className="nav-text fir"><a href="#">发现</a></span>
            <span className="nav-text">
                <a href="#">2015精选</a>
            </span>
            <span className="search clearfloat">
                <span className="input">
                    <input type="search" placeholder="搜索" />
                </span>
                <span className="search-icon"><i className="iconfont icon-search"></i></span>
            </span>					
        </nav>
    )
}

export default Article
