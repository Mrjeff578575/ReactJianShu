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
  
class App extends React.Component {
  constructor(props) {
      super(props)
  }
  render() {
      return (
          <Router>
              <div className='container'> 
                  <LeftSidebar />
                  <Route path="/home" component={Home} />
                  <Route path="/topic" component={Topic} />
                  <Route path="/download" component={Download} />
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

