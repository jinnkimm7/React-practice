import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((checked) => !checked);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(undefined);

    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then(res => res.json())
      .then(data => {
        console.log('fetching!!')
        setProducts(data)
      })
      .catch(e => setIsError('에러가 발생했습니다.'))
      .finally(() => setIsLoading(false));
    ;

    return () => {
      console.log('cleaning')
    }
  }, [checked]);


  if (isError) return <p>에러가 발생했습니다.</p>;
  return (
    <div>
      <input type='checkbox' value={checked} onChange={handleChange} />
      <label>Show Only Hot Sale</label>
      {
        isLoading
          ? <span>Loading...</span>
          :
          <ul>
            {
              products
                .map(product => (
                  <li
                    key={product.id}
                  >
                    <article>
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </article>
                  </li>
                ))
            }
          </ul>
      }

    </div>
  );
}

