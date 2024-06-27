import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/board/List';
import Insert from './pages/board/Insert';
import Read from './pages/board/Read';
import Update from './pages/board/Update';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/boards" element={ <List /> }></Route>
        <Route path="/boards/insert" element={ <Insert /> }></Route>
        <Route path="/boards/:no" element={ <Read /> }></Route>
        <Route path="/boards/update/:no" element={ <Update /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
