import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const cartToggle = () => {
    setCartIsShown(!cartIsShown)
  }
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={cartToggle} /> }
      <Header onCartBtnClick={cartToggle} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
