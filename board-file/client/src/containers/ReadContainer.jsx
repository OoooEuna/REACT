import React, { useEffect, useState } from 'react'
import Read from '../components/board/Read'
import * as boards from "../apis/boards"
import * as files from "../apis/files"

// props 받아올 때는 구조분해할당
const ReadContainer = ({ no }) => {
  // 🧊 state
  const [board, setBoard] = useState([])
  const [fileList, setFileList] = useState([])
  const [isLoading, setLoading] = useState(false)

  // 🌞 함수
  const getBoard = async () => {
    // 서버에 요청 (loading 시작 ⏳)
    // 데이터 올 때까지 loading 
    setLoading(true)
    const response = await boards.select(no)
    const data = await response.data      // ⭐ 🎫board + 📃filelist
    console.log(data);

    const board = data.board
    const fileList = data.fileList

    setBoard(board)
    setFileList(fileList)

    setLoading(false)
    // 로딩 끝 ⌛
  }

  // 다운로드
  const onDownload = async (no, fileName) => {
    const response = await files.download(no)
    console.log(response)

    // 서버에서 반환된 파일 데이터를 Blob으로 변환
    // 다운로드는 브라우저가 함
    // : 임의로 브라우저에게 데이터를 a 태그로 등록하고 브라우저가 다운로드하도록 요청
    const url = window.URL.createObjectURL(new Blob( [response.data] ))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // ❓ hook
  useEffect( () => {
    getBoard()
    console.log(board);
  }, [])

  return (
    <>
      <Read no={no} 
            board={board} 
            fileList={fileList}
            isLoading={isLoading}
            onDownload={onDownload} />
    </>
  )
}

export default ReadContainer