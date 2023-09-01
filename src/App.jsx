//redux
import { Provider } from 'react-redux';
import store from './redux/Store';
//Router
import {Route, Routes } from "react-router-dom";
//component
import Navbar from './components/Navbar';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import ShopCart from './components/ShopCart';

//style
import './App.css';


function App() {


  return (
    <Provider store={store}>
     <Navbar />

      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Store />} />
        <Route path="/cart" element={<ShopCart />}/>
      </Routes>

    </Provider>
  )
}

export default App
