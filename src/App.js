import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartConextProvider";

function App() {

  const[cartIsVis, setCartIsVis] = useState(false);

  const showCart = () =>{
    setCartIsVis(true);
  }

  const hideCart = () =>{
    setCartIsVis(false);
  }

  return (
    <CartContextProvider>
      {cartIsVis && <Cart onHideCart = {hideCart}/>}
      <Header onShowCart = {showCart} />
      <main>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
