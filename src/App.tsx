// import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import types
import type { Device } from './types/types';

const App = () => {
  // const [count, setCount] = useState(0);

  const handleAPICall = async () => {
    console.log(`Line 13 its being called`);
    try {
      const response = await fetch('http://localhost:3000/devices');
      if (!response.ok) {
        throw new Error('Failed to fetch devices');
      }
      const data: Device[] = await response.json();
      return data;
    } catch (err: any) {
    } finally {
      console.log(`Worked`);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        <button onClick={handleAPICall}>Click to call API</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default App;
