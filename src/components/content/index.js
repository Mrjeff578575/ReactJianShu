import React from 'react'

import Article from '../article/index.js'
import {} from './content.scss'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="content">
                <ShowBar />
                <Article />
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
                <a href="#"><i className="fa fa-home"></i>提笔写篇文章</a>
            </div>
        </div>
    )
}