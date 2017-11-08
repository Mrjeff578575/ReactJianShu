import React from 'react'

class DropDown extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<ul className='dropdown'>
                    <li className={this.props.show == 'home' ? 'active' : ''}>
                        <a href="#"><i className="fa fa-home"></i><span>&nbsp;&nbsp;首页</span></a>
                    </li>
                    <li className={this.props.show == 'topic' ? 'active' : ''}>
                        <a href="'/topic/topic_article'"><i className="fa fa-th"></i><span>&nbsp;&nbsp;专题</span></a>
                    </li>
                    <li className={this.props.show == 'download' ? 'active' : ''}>
                        <a href="'/download'"><i className="fa fa-mobile"></i><span>&nbsp;&nbsp;下载手机应用</span></a>
                    </li>
                </ul>
            )
    }

}
export default DropDown