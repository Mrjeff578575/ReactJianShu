import React from 'react'
import ReactDOM from 'react-dom'

import {} from './static/normalize.scss'

import SideBar from './components/sidebar/'
import Content from './components/content/'

ReactDOM.render(
    <SideBar content={Content}/>,
    document.getElementById('app')
  );