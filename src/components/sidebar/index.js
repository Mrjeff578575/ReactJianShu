import React from 'react'

import DropDown from './dropdown'
import RightSidebar from './right'

import {} from './sidebar.scss'

  
class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let Content = this.props.content
        return (
            <div className='container'>
                <div className='sidebar'>
                    <DropDown show='home'/>
                    <UserNav />
                </div>
                <Content />
                <RightSidebar />
            </div>
        )  
    }
}

function UserNav() {
    return (
        <ul className="nav-user">
            <li><a href="#"><i className="fa fa-font"></i><span>&nbsp;&nbsp;显示模式</span></a></li>
            <li><a href="#"><i className="fa fa-sign-in"></i><span>&nbsp;&nbsp;登录</span></a></li>
        </ul>
    )
}

export default Sidebar
