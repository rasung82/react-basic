import {useState} from "react";
import Products from "./components/Products";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(false);
  const handleClick = () => setShowProducts((show) => !show);
  return (
    <div>
      { showProducts && <Products /> }
      <button onClick={handleClick}>Toggle</button>
    </div>
  )
}