import './App.css';
import {Routes, Route} from "react-router-dom";
import ProductDetail from './page/ProductDetail';
import ProductAll from './page/ProductAll';
import Login from './page/Login';

// 1.전체상품페이지, 로그인, 상품페이지
// 2.전체상품을 볼수있음
// 3.로그인 버튼을 누르면 로그인 페이지가 나온다
// 4.상품디테일을 눌렀으나, 로그인이 안되있을경우 로그인페이지
// 5.로그인된경우, 상품 디테일 페이지 볼수있음
// 6.로그아웃 버튼을 클릭하면, 로그아웃이된다
// 7.로그아웃이되면 상품 디테일페이지 볼수없음, 다시 로그인페이지 
// 8.로그인하면 로그아웃보이고, 로그아웃하면 로그인보임
// 9.상품을 검색할수 있음
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
