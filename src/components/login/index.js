import React from 'react'

import {} from './index.scss'
import LoginForm from './loginForm.js'
import RegisterForm from './registerForm.js'
class Login extends React.Component {
    constructor(props) {
        super(props)
        console.log(this)
        this.state = {
            formType: this.props.formType || 'login'
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-logo"></div>
                <div className="login-header">
                    <a  href="javascript: void(0);" 
                        className={this.state.formType == "login" ? 'active' : ''} 
                        onClick={() => this.setState({formType: 'login'})}>登录</a>·
                    <a  href="javascript: void(0);" 
                        className={this.state.formType == "register" ? 'active' : ''} 
                        onClick={() => this.setState({formType: 'register'})}>注册</a>
                </div>
                {this.state.formType == 'login' ? <LoginForm /> : <RegisterForm />}
                <LoginWay />
            </div>
        )
    }
}

export default Login

function LoginWay() {
    return (
		<div className="login-way">
			<h5>您还可以通过以下方式登录</h5>
			<ul>
				<li className="qqicon"><i className="iconfont icon-qq"></i></li>
				<li className="weiboicon"><i className="iconfont icon-weibo"></i></li>
				<li className="wechaticon"><i className="iconfont icon-weixin-copy"></i></li>
				<li className="googleicon"><i className="iconfont icon-google"></i></li>
				<li className="githubicon"><i className="iconfont icon-github"></i></li>
			</ul>
		</div>
    )
}