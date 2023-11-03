import React, { useState, useEffect } from 'react';

export default function Products_practice() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(()=>{
    fetch(`data/${ checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [checked]);
  return (
    <div>
      <input id="checkbox" type="checkbox" value={checked} onChange={handleChange}/>
      <label htmlFor='checkbox'>show only hot sale</label>
      <ul>
        {
          products.map((product) => <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>)
        }
      </ul>
    </div>
  );
}

