// components
import { useState } from 'react';
import Finder from './components/Finder';

function App() {
  const [keyword, setKeyword] = useState('');
  const [status, setStatus] = useState('');

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
      </div>
    </div>
  );
}

export default App;
