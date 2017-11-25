import React from 'react'

import {} from './index.scss'

class RightSidebar extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <div className="rightbar">
                <LoginNav loginSuccess='false' history={this.props.history}/>
            </div>
        )
    }

}

function LoginNav(props) {
    if (props.loginSuccess) {
        return (
            <nav>
                <a href="javascript: void(0);"
                    onClick={(e) => props.history.push({pathname: '/login', state: {formType: 'login'}})}>
                    <i className="iconfont icon-log-out"></i>登录</a>
                <a href="javascript: void(0);" 
                    onClick={(e) => props.history.push({pathname: '/login', state: {formType: 'register'}})}>
                    <i className="iconfont icon-user1"></i>注册</a>
            </nav>
        )
    } else {
        return (
            <nav>
                <a href="#"><i className="iconfont icon-user1"></i>个人信息</a>
            </nav>
        )
    }
}
export default RightSidebar