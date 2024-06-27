import React, { useEffect, useState } from 'react'
import List from '../components/board/List'
import * as boards from '../apis/boards'

const ListContainer = () => {
  // 🧊 state
  const [boardList, setBoardList] = useState([])
  const [isLoading, setLoading] = useState(false)

  // 🌞 함수
  const getBoardList = async () => {
    // 서버에 요청 (loading 시작 ⏳)
    // 데이터 올 때까지 loading 
    setLoading(true)
    const response = await boards.list()
    const data = await response.data    // ⭐boardList
    setBoardList(data)
    setLoading(false)
    // 로딩 끝 ⌛
  }

  // ❓ hook
  useEffect( () => {
    getBoardList()    // Mount 될 때 호출
    console.log(boardList);
  }, [])

  return (
    <>
      {/* 게시글 목록 내려주기 */}
      <List boardList={boardList} isLoading={isLoading} />
    </>
  )
}

export default ListContainer