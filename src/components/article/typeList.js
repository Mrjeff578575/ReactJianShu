import React from 'react'

class ArticleTypeList extends React.Component {
    constructor(props) {
        super(props)
        this.articleTypeMap = this.props.articleTypeMap
    }
    render() {
        const listItems = this.articleTypeMap.map((type, index) => 
            <li key={index} className={ this.props.showType == type.name ? 'active' : ''} onClick={(e) => this.changeType(e, type.name)}>
                <a href="javascript: void(0);">{type.title}</a>
            </li>
        )
        return (
            <div className="article-list">
                <ul>
                    { listItems }
			    </ul>
		</div>
        )
    }

    changeType(e, type) {
        this.props.changeShowType(e, type);
    }
}

export default ArticleTypeList