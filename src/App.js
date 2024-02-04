import React from 'react'

import { Apps1, Navbar } from './containers';
import { Backbutton, Finish, Header } from './components';
import './App.css';

const App = () => {
  return (
    <div>
        <div className="App">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="gradient__bg">
          </div>
          <div>
          <Header />
          <Apps1 />
          <Finish />
          <Backbutton />
          </div>
        </div>
    </div>
  )
}

export default App
