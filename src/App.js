import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Product';
import Register from './components/Register/Register';
import ReviewItem from './components/ReviewItem/ReviewItem';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth/RequireAuth';
import AddProducts from './components/AddProducts/AddProducts';
import ManageProducts from './components/ManageProducts/ManageProducts';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import AllOrder from './components/AllOrder/AllOrder';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/reviewitem' element={<ReviewItem />}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }></Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment />
          </RequireAuth>
        }></Route>
        <Route path='/allorder' element={
          <RequireAuth>
            <AllOrder />
          </RequireAuth>
        }></Route>
        <Route path='/addproducts' element={
          <RequireAuth>
            <AddProducts />
          </RequireAuth>
        }></Route>
        <Route path='/manageproducts' element={
          <RequireAuth>
            <ManageProducts />
          </RequireAuth>
        }></Route>
        <Route path='/updateproduct/:id' element={
          <RequireAuth>
            <UpdateProduct />
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
