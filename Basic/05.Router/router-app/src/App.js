import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/about' element={ <About/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}
// ⭐
// <BrowserRouter> : 라우팅 활성화
// <Routes>        : <Route> 컴포넌트 정의하는 영역
// 🔗 경로 설정 (라우팅)
// <Route path='/경로' element={ <컴포넌트/> }></Route>

// 🔗 ➡ 💻 라우터로 이동하는 방법
// <Link to="/경로">경로이름</Link>
// : 실제로는 a 태그처럼 렌더링 된다.
export default App;
