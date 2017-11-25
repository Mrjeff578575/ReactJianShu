import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {} from './static/normalize.scss'
import {} from './index.scss'

import LeftSidebar from './components/leftSidebar/'
import RightSidebar from './components/rightSidebar/'

import Home from './components/home/'
import Download from './components/download/'
import Topic from './components/topic/'
import Login from './components/login/'

ReactDOM.render(
    (
        <Router>
            <Route path="/" render={({ location }) => (
                <div id="app">
                    <Route path="/" component={LeftSidebar} />
                    <div className="content">
                        <Route path="/:type" component={ContentView} location={location} key={location.key} /> 
                        {/* <CSSTransitionGroup
                            transitionName="fadeInRight"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                        >
                        </CSSTransitionGroup> */}
                    </div>
                    <Route path="/" component={RightSidebar} />
                </div>
            )} />
        </Router>
    ),
  document.body
)

function ContentView(props) {
    const {match: {params}} = props
    let component = null;
    switch (params.type) {
        case 'home': 
            component = (<Home {...props}/>)
            break
        case 'topic':
            component = (<Topic {...props}/>)
            break
        case 'download':
            component = (<Download {...props}/>)
            break
        case 'login':
            component = (<Login {...props}/>)
            break
        default:
            component = (<Home {...props}/>)
            break
    }
    return component  
}

