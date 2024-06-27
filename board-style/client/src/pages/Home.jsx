import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
        <h1 className='title'>메인화면（*゜ー ゜*）</h1>
        <h3>게시판 프로젝트</h3>
        <Link to="/boards">게시판</Link>
    </div>
  )
}

export default Home