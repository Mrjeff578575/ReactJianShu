import React from 'react'
import { Link } from 'react-router-dom';

class DropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: this.props.show
        };
    }
    render() {
        return (<ul className='dropdown'>
                    <li className={this.state.show == 'home' ? 'active' : ''} onClick={(e) => this.handleClick(e, 'home')}>
                        <Link to="/home"><i className="iconfont icon-home"></i><span>&nbsp;&nbsp;首页</span></Link>
                    </li>
                    <li className={this.state.show == 'topic' ? 'active' : ''} onClick={(e) => this.handleClick(e, 'topic')}>
                        <Link to="topic"><i className="iconfont icon-menu"></i><span>&nbsp;&nbsp;专题</span></Link>
                    </li>
                    <li className={this.state.show == 'download' ? 'active' : ''} onClick={(e) => this.handleClick(e, 'download')}>
                        <Link to="download"><i className="iconfont icon-shouji"></i><span>&nbsp;&nbsp;下载手机应用</span></Link>
                    </li>
                </ul>
            )
    }

    handleClick(e, show) {
        this.setState({
            show: show
        });
    }

}
export default DropDown