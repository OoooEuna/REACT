import logo from './logo.svg';
import './App.css';
import ProductDetail from './Component/ProductDetail';
import ProductList from './Component/ProductList';

function App() {
  // ✅ 객체 가져옴
  const product = {
    productId : 'P000001',
    name : '360도 회전 선풍기',
    price : 5000,
    quantity : 1,
    img : 'https://i.imgur.com/1vpSkbW.png'
  }

  // 부모의 product가 여기에 온 것임
  return (
    <div>
      {/* <ProductDetail product={product} /> */}
      <ProductList />
    </div>
  );
}

export default App;
