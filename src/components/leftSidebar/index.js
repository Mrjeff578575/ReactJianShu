import React from 'react'
import DropDown from './dropdown'

import { Link } from 'react-router-dom';

import {} from './index.scss'

class LeftSidebar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='sidebar'>
                <DropDown show='home'/>
                <UserNav />
            </div>
        )
    }

}

function UserNav() {
    return (
        <ul className="nav-user">
            <li><a href="#"><i className="iconfont icon-font"></i><span>&nbsp;&nbsp;显示模式</span></a></li>
            <li><Link to="/login"><i className="iconfont icon-log-out"></i><span>&nbsp;&nbsp;登录</span></Link></li>
        </ul>
    )
}

export default LeftSidebar