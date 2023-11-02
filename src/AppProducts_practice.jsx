import React, { useState } from 'react';
import Products_practice from './components/Products_practice';

export default function AppProducts_practice() {
  const [showProducts, setShowPRoducts] = useState(true);
  return (
    <div>
      {showProducts && <Products_practice />}
      <button onClick={() => setShowPRoducts((prev) => !prev)}>toggle</button>
    </div>
  );
}

