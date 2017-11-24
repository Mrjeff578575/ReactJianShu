import React from 'react'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="login-input">
                <div className="email"> 
                    <span className="input-logo"><i className="iconfont icon-mail"></i></span>
                    <input type="text" name="email_adress" placeholder="你的邮件地址" />
                </div>
                <div className="username">
                    <span className="input-logo"><i className="iconfont icon-user1"></i></span>
                    <input type="text" name="sign_in[name]" placeholder="手机号码/电子邮件" />
                </div>
                <div className="password">
                    <span className="input-logo"><i className="iconfont icon-lock"></i></span>
                    <input type="password" name="sign_in[password]" placeholder="密码" />
                </div>
                <button className="register" type="submit"><span>注册</span></button>
                <p className="register_text">点击 “注册” 或下方社交登录按钮，即表示您同意并愿意遵守简书 <a href="#">用户协议</a> 和 <a href="#">隐私政策</a> 。</p>
            </div>
        )
    }
}

export default RegisterForm