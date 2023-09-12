import {useEffect, useState} from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const handleClick = () => setCount((prev) => prev+1);

  useEffect(() => {
    fetch('data/products.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
    return () => {
      console.log('Cleanup !');
    }
  },[])

  return (
    <>
      <ul>
        {
          products.map((product) => (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          ))
        }
      </ul>
      <button onClick={handleClick}>{count}</button>
    </>
  )
}