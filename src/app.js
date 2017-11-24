import React from 'react'
import ReactDOM from 'react-dom'
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
  
class App extends React.Component {
  constructor(props) {
      super(props)
  }
  render() {
      return (
          <Router>
              <div className='container'> 
                  <LeftSidebar />
                  <Route path="/" component={Home} exact={true} />
                  <Route path="/home" component={Home} />
                  <Route path="/topic" component={Topic} />
                  <Route path="/download" component={Download} />
                  <Route path="/login" component={Login} />
                  <RightSidebar />
              </div>
          </Router>
      )  
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

