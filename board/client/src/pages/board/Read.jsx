import React from 'react'
import ReadContainer from '../../containers/ReadContainer'
import { useParams } from 'react-router-dom'

const Read = () => {
  // 🔗❓ 파라미터 가져오기
  const { no } = useParams()
  console.log(`no : ${no}`);
  return (
    <>
      {/* Header */}
      {/* 컨테이너에 no props 내려줌 */}
      <ReadContainer no={no} />
      {/* Footer */}
    </>
  )
}

export default Read