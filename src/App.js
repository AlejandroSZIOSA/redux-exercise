/* import { useState, useEffect } from "react"; */
/* import productsJson from "./JSON/sinusApiData.json"; */

import Cart from "./components/Cart";
/* import Header from "./components/Header"; */
import Products from "./components/Products";

function App() {
  return (
    <div>
      {/*   <Header /> */}
      <Products />
      <Cart />
    </div>
  );
}

export default App;
