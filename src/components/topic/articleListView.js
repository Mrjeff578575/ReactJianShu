import React from 'react'

import {} from './articleList.scss'

class ArticleList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const articleList = this.getArticleList(this.props.showType)
        const listItems = articleList.map((article) => 
            <ArticleListItem  key={article.id} article={article} />
        )
        return (
            <div className="topic_article_container">
                { this.props.showType == 'recommend' && <OrderNav orderType={'hot'} />}
                <ul className="topic-list">
                    { listItems }
                </ul>
            </div>
        )
    }

    getArticleList(type) {
        const articleList = {
            hot: [{
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
            }],
            recommend: [{
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
            }, {
                id: 3,
                src: '#6ec6fb',
                title:'@IT互联网',
                par:'@IT 专题 由 IT大分类，转定位于IT·互联网行业观察与思考，数码产品极客体验。\
                    想上首页热门榜么？好内容想被更多人看到么？来投稿吧！\
                    如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。\
                    投稿必须原创。主编：向右奔跑 http://www.jianshu.com/users/54b5900965ea...',
                number:'8409',
                concern:'111.1',
                keys:'互联网、产品、科技',
                time:'20160625'
            }]
        }
        return articleList[type] || []
    }
}

function ArticleListItem(props) {
    let article = props.article
    return (
        <li>
            <a href="javascript: void(0);" className="avatar" style={{ backgroundColor: article.src, backgroundSize:'100%', backgroundRepeat:'no-repat'}}></a>
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

function OrderNav(props) {
    return (
        <div className="sequence-nav">
            <a href="javascript: void(0);" className={props.orderType == 'new' ? 'active' : '' }> 最新更新</a>·			
            <a href="javascript: void(0);" className={props.orderType == 'hot' ? 'active' : '' } >热门排序</a>·
            <a href="javascript: void(0);" className={props.orderType == 'concern' ? 'active' : '' } >关注度排序</a>
        </div>
    )
}


export default ArticleList