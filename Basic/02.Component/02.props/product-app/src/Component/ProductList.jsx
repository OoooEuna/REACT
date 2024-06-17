import React, { useEffect, useState } from 'react'
import Product from './Product';

const ProductList = () => {
  // 🧊 state : list
  const [list, setList] = useState([])

  // ❓ hook : useEffect()
  // ⭐ useEffect : 아래 3가지 라이프 사이클 메소드를 결합한 리액트 훅(hook)
  // ✅ hook : 리액트의 함수형 컴포넌트가 가지는 특별한 의미의 함수
  // 1️⃣   - componentDidMount
  // 2️⃣   - componentDidUpdate
  // 3️⃣   - componentWillUnmount
  // 위의 3가지의 상황에 동작을 함
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/products')
        const data = await response.json()
        /* list라는 state를 update ➡ componentDidUpdate 
          이 때 2️⃣번째로 로그가 실행됨 */
        setList(data)
        console.log(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])  
  

  // 객체들을 product라는 이름으로 가져옴
  return (
    <>
      <div className="container">
        <h1>상품 목록</h1>
        <div className='card-list'>
          {list.map((product, index) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  )
}
export default ProductList