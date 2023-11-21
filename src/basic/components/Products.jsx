import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      })
      .catch((error)=>{ setError('에러가 발생했음!')})
      .finally(()=> setLoading(false) );
      return () => {
        console.log('깨끗하게 청소하는 일들을 합니다.')
      }
  }, [checked]);

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
  return (
    <div>
      <>
        <input id="checkbox" type="checkbox" value={checked} onChange={handleChange}></input>
        <label htmlFor="checkbox">Show only hot sale</label>
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
      </>
    </div>
  );
}

