import React from 'react'

import {} from './articleList.scss'

class ArticleList extends React.Component {
    constructor(props) {
        super(props)
        this.articleList = [{
            id: 1,
            src: '#5ce473',
            title:'诗',
            par:'诗，让你感受自己的心灵。\
                 专题主编：苏锦年 投稿须知：\
                 1.本专题收录古诗、词、现代诗以及诗词点评及指导。\
                 2.内容必须为原创，切勿用其他诗人的诗句。\
                 3.文章排版整洁，注意...',
            number:'35420',
            concern:'146.6k',
            keys:'诗',
            time:'20160630'
		}, {
            id: 2,
            src: '#6ec6fb',
            title:'游戏',
            par: '玩转简书的第一步，从这个专题开始。\
                  想上首页热门榜么？好内容想被更多人看到么？来投稿吧！\
                  如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。\
                  投稿必须原创。如果发现有非...',
            number:'97233',
            concern:'121.7k',
            keys:'故事、连载',
            time:'20160620'
		}]
    }

    render() {
        const listItems = this.articleList.map((article) => 
            <ArticleListItem  key={article.id} article={article} />
        )
        return (
            <ul className="topic-list">
                { listItems }
            </ul>
        )
    }
}

function ArticleListItem(props) {
    let article = props.article
    return (
        <li>
            <a href="" className="avatar" style={{ backgroundColor: article.src, backgroundSize:'100%', backgroundRepeat:'no-repat'}}></a>
            <div className="topic-content">
                <h5>{ article.title }</h5>
                <p>{ article.par }</p>
                <p>
                    <a href="#">{ article.number }篇文章</a>
                    &nbsp;&nbsp;·&nbsp;&nbsp;{ article.concern }人关注
                    &nbsp;&nbsp;·&nbsp;&nbsp;<span className="topic_tag"><i className="iconfont icon-tags"></i>{ article.keys }</span>
                </p>
            </div>
            <div className="topic_button">
                <a href="#"><i className="iconfont icon-add"></i><span>添加关注</span></a>
            </div>
        </li>
    )
}


export default ArticleList