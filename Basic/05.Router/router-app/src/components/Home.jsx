import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <Link to="/about">about으로 가기</Link>
    </div>
  )
}

export default Home