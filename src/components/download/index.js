import React from 'react'

import {} from './download.scss'

class Download extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="download-container">
                <div className="download-content">
                    <div className="page-left">
                        <div className="logo"></div>
                        <VersionControl />
                        <ShareList />
                    </div>
                    <div className="app-img"></div>	
                </div>
            </div>
        )
    }
}

export default Download

function VersionControl() {
    return (
        <div className="version-button">
            <ul>
                <li><a href="#"><i className="fa fa-android"></i>Android版</a></li>
                <li><a href="#"><i className="fa fa-mobile"></i>iPhone版</a></li>
            </ul>
            <div className="download-img"></div>
        </div>
    )
}

function ShareList() {
    return (
        <ul className="share-list">
            <li className="text">关注我们</li>
            <li></li>
            <li></li>
            <li></li>
        </ul>	
    )
}