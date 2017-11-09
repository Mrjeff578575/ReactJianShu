import React from 'react'

class ArticleTypeList extends React.Component {
    constructor(props) {
        super(props)
        this.articleTypeMap = [{name: 'hot',title: '热门'}, 
                               {name: 'new',title: '新上榜'},
                               {name: 'daily', title: '日报'},
                               {name: 'weekhot', title: '七日热门'},
                               {name: 'monthhot', title: '三十日热门'},
                               {name: 'reward', title: '有奖活动'},
                               {name: 'publish', title: '简书出版'},
                               {name: 'video', title: '简书播客'},
                               {name: 'hotnews', title: '时事热闻'},
                               {name: 'choice', title: '专题精选'},
                            ]
    }
    render() {
        const listItems = this.articleTypeMap.map((type, index) => 
            <li key={index} className={ this.props.show == type.name ? 'active' : ''}>
                <a href="#">{type.title}</a>
            </li>
        )
        console.log(listItems)
        return (
            <div className="article-list clearfix">
                <ul className="btn-group">
                    { listItems }
			    </ul>
		</div>
        )
    }
}

export default ArticleTypeList