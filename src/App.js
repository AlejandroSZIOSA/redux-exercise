/* import { useState, useEffect } from "react"; */
/* import productsJson from "./JSON/sinusApiData.json"; */

import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>SINUS Shopping cart</h1>
      <Products />
      <Cart />
    </div>
  );
}

export default App;
