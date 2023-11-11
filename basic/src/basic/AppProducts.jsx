import React, { useState } from 'react';
import Products from '../components/Products';

export default function AppProducts() {
  const [showProduct, setShowProduct] = useState(false);
  return (
    <div>
      {showProduct && <Products />}
      <button onClick={() => setShowProduct((show) => !show)}>Toggle</button>
    </div>
  );
}

