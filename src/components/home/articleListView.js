import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

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
            <ul>
                <CSSTransitionGroup
                    transitionName="fadeInRight"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    { listItems }
                </CSSTransitionGroup>
            </ul>
        )
    }

    getArticleList(type) {
        const articleList = {
            hot: [{
                id: 1,
                author:'徐丹妮',
                title:'我不是学霸，只是比你努力一点而已',
                time:'大约6小时之前',
                read:'8498',
                comment:'248',
                like:'2342',
                pay:'2',
                src: '#5ce473'//utils.changeStaticUrl('url(../../static/vue-demo-hot.jpg)')
            }, {
                id: 2,
                author:'阿俊',
                title:'Learn by doing',
                time:'大约6小时之前',
                read:'3398',
                comment:'258',
                like:'232',
                pay:'88',
                src: '#e6e86b'//utils.changeStaticUrl('url(../../static/vue-demo-new.jpg)')
            }, {
                id: 3,
                author:'尸叔',
                title:'如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
                time:'大约2小时之前',
                read:'3750',
                comment:'70',
                like:'190',
                pay:'0',
                src: '#6ec6fb'//utils.changeStaticUrl('url(../../static/vue-demo-daily.jpg)')
            }],
            daily:[{
                id: 1,
                author:'徐丹妮',
                title:'我不是学霸，只是比你努力一点而已',
                time:'大约6小时之前',
                read:'8498',
                comment:'248',
                like:'2342',
                pay:'2',
                src: '#6ec6fb'//utils.changeStaticUrl('url(../../static/vue-demo-hot.jpg)')
            }],
            new: [{
                id: 1,
                author:'徐丹妮',
                title:'我不是学霸，只是比你努力一点而已',
                time:'大约6小时之前',
                read:'8498',
                comment:'248',
                like:'2342',
                pay:'2',
                src: '#e6e86b'//utils.changeStaticUrl('url(../../static/vue-demo-hot.jpg)')
            }, {
                id: 2,
                author:'阿俊',
                title:'Learn by doing',
                time:'大约6小时之前',
                read:'3398',
                comment:'258',
                like:'232',
                pay:'88',
                src: '#6ec6fb'//utils.changeStaticUrl('url(../../static/vue-demo-new.jpg)')
            }]
        }
        return articleList[type] || []
    }
}

function ArticleListItem(props) {
    let article = props.article
    return (
        <li className='list'>
            <p className="list-top">
                <a href="#" className="author"><span>{ article.author }</span></a>
                <span className="time"> - { article.time}</span>
            </p>
            <h2 className="title"><a href="#">{ article.title }</a></h2>
            <div className="small-text-group">			
                <span className="small-text">阅读 { article.read } -</span>
                <span className="small-text">评论 { article.comment } -</span>
                <span className="small-text">喜欢 { article.like } -</span>
                <span className="small-text">打赏 { article.pay }</span>
            </div>
            <span className="image" style={{ backgroundColor: article.src, backgroundSize:'100%', backgroundRepeat:'no-repat'}}></span>
        </li>
    )
}


export default ArticleList