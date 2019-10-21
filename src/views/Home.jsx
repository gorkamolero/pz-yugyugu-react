import React from 'react'
import { Link } from "react-router-dom"
import logo from '../yugyugu.jpg'


function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to Yugyugu
      </p>
      <Link to="/builder/content">
        Enter the builder
      </Link>
    </header>
  )
}

export default Home