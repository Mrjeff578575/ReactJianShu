import React from 'react'

class ArticleTypeList extends React.Component {
    constructor(props) {
        super(props)
        this.articleTypeMap = this.props.articleTypeMap
    }
    render() {
        console.log(this.articleTypeMap)
        const listItems = this.articleTypeMap.map((type, index) => 
            <li key={index} className={ this.props.show == type.name ? 'active' : ''}>
                <a href="#">{type.title}</a>
            </li>
        )
        console.log(listItems)
        return (
            <div className="article-list">
                <ul>
                    { listItems }
			    </ul>
		</div>
        )
    }
}

export default ArticleTypeList