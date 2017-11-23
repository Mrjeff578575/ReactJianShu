import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

class DropDown extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<ul className='dropdown'>
                    <li className={this.props.show == 'home' ? 'active' : ''}>
                        <Link to="/home"><i className="iconfont icon-home"></i><span>&nbsp;&nbsp;首页</span></Link>
                    </li>
                    <li className={this.props.show == 'topic' ? 'active' : ''}>
                        <Link to="topic"><i className="iconfont icon-menu"></i><span>&nbsp;&nbsp;专题</span></Link>
                    </li>
                    <li className={this.props.show == 'download' ? 'active' : ''}>
                        <Link to="download"><i className="iconfont icon-shouji"></i><span>&nbsp;&nbsp;下载手机应用</span></Link>
                    </li>
                </ul>
            )
    }

}
export default DropDown