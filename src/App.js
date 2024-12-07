import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";


function App() {
  return (

    <ProductProvider>
      <CartProvider>
     <div className="App">
        <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
    </div>
    </CartProvider>
    </ProductProvider>
  );
}

export default App;
