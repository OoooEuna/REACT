import React, { useEffect, useState } from 'react'
import Read from '../components/board/Read'
import * as boards from "../apis/boards"

// props 받아올 때는 구조분해할당
const ReadContainer = ({ no }) => {
  // 🧊 state
  const [board, setBoard] = useState([])
  const [isLoading, setLoading] = useState(false)

  // 🌞 함수
  const getBoard = async () => {
    // 서버에 요청 (loading 시작 ⏳)
    // 데이터 올 때까지 loading 
    setLoading(true)
    const response = await boards.select(no)
    const data = await response.data      // ⭐board
    console.log(data);
    setBoard(data)
    setLoading(false)
    // 로딩 끝 ⌛
  }

  // ❓ hook
  useEffect( () => {
    getBoard()
    console.log(board);
  }, [])

  return (
    <>
      <Read no={no} board={board} isLoading={isLoading}/>
    </>
  )
}

export default ReadContainer