import { useEffect, useState } from 'react';

// components
import Finder from './components/Finder';
import Product from './components/Product';

function App() {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [status, setStatus] = useState('new');

  useEffect(() => {
    const getProducts = async () => {
      // build the url
      const url = status
        ? `http://localhost:5000/products?status=${status}&q=${keyword}`
        : `http://localhost:5000/products?q=${keyword}`;

      // send the request
      const response = await fetch(url);

      // transform to json
      const json = await response.json();

      // save in state
      setProducts(json);
    };

    getProducts();
  }, [keyword, status]);

  return (
    <div className="py-10 min-h-screen font-mono bg-gray-900">
      <h1 className="text-center text-white text-4xl font-bold">
        Products Finder
      </h1>
      <div className="container mx-auto">
        <Finder
          keyword={keyword}
          setKeyword={setKeyword}
          status={status}
          setStatus={setStatus}
        />
        <div className="grid gap-8 grid-cols-3 mt-16">
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
