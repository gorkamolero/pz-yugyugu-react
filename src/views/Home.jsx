import React from 'react'
import { Link } from "react-router-dom"
import { useTemplate, fetchData } from '../state/Template'


function Home() {
  const [, dispatch] = useTemplate()

  React.useEffect(() => {
    fetchData(dispatch)
  }, [dispatch])
  
  return (
    <header className="App-header">
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