import React, { useState } from 'react'
import InsertForm from '../components/board/InsertForm'
import * as boards from '../apis/boards'
import { useNavigate } from 'react-router-dom'

const InsertContainer = () => {
  const navigate = useNavigate()
  // 🌞 이벤트 함수
  const onInsert = async (title, writer, content) => {
    try {
      const response = await boards.insert(title, writer, content)
      const status = await response.status
      console.log(`게시글 등록 요청 결과 : ${status}`);
      alert("게시글 등록 완료 ╰(*°▽°*)╯")

      // ➡ 게시글 목록으로 이동
      navigate("/boards")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <InsertForm onInsert={onInsert} />
    </>
  )
}

export default InsertContainer