import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.checked
        }
    }

    render() {
        return (
            <div className="login-input">
                <div className="username">
                    <span className="input-logo"><i className="iconfont icon-user1"></i></span>
                    <input type="text" name="register_name" placeholder="选一个昵称" />
                </div>
                <div className="password">
                    <span className="input-logo"><i className="iconfont icon-lock"></i></span>
                    <input type="password" name="register_password" placeholder="密码" />
                </div>
                <button className="login">
                    <span>登录</span>
                </button>
                <div className="login-control">
                    <span className={this.state.checked ? 'checkbox' : 'checkbox unChecked'} onClick={(e) => this.changeChecked(e)}>
                        <input type="checkbox"/>
                        <ins className="check"></ins>
                    </span>
                    <span className="remmber">记住我</span>
                    <span><a href="#">忘记密码</a></span>
                </div>
            </div>
        )
    }

    changeChecked(e) {
        this.setState({
            checked: !this.state.checked
        })
    }
}

export default LoginForm