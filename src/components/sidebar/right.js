import React from 'react'

class RightSidebar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="rightbar">
                <LoginNav loginSuccess='false' />
            </div>
        )
    }

}

function LoginNav(props) {
    if (props.loginSuccess) {
        return (
            <nav>
                <a href="#"><i className="fa fa-sign-in"></i>登录</a>
                <a href="#"><i className="fa fa-user"></i>注册</a>
            </nav>
        )
    } else {
        return (
            <nav>
                <a href="#"><i className="fa fa-sign-in"></i>个人信息</a>
            </nav>
        )
    }
}
export default RightSidebar