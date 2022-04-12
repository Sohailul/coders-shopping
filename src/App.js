import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Product';
import ReviewItem from './components/ReviewItem/ReviewItem';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/reviewitem' element={<ReviewItem/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
