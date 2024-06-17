import React from 'react';                // React 라이브러리 가져오기
import ReactDOM from 'react-dom/client';  // React DOM 클라이언트 라이브러리 가져오기
import './index.css';                     // 애플리케이션 css 파일 가져오기 (모든 페이지에서 전체적으로 다 적용)
import App from './App';                  // App 컴포넌트 가져오기
import reportWebVitals from './reportWebVitals';  // 성능 추적 함수 가져오기

// index.html의 id가 root인 요소를 루트 요소로 생성
const root = ReactDOM.createRoot(document.getElementById('root'));

// 루트 요소를 렌더링
root.render(
  // Strict Mode(엄격 모드) 활성화
  // 일반적으로 모든 컴포넌트를 감쌈 (감싼 컴포넌트에 적용)
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
