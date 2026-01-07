import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Listings from './components/Listings/Listings';
import Profile from './components/Profile/Profile';

// Import types
// import type { Device } from './types/types';

const App = () => {
  // const [count, setCount] = useState(0);

  // const handleAPICall = async () => {
  //   console.log(`Line 13 its being called`);
  //   try {
  //     const response = await fetch('http://localhost:3000/devices');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch devices');
  //     }
  //     const data: Device[] = await response.json();
  //     return data;
  //   } catch (err: any) {
  //   } finally {
  //     console.log(`Worked`);
  //   }
  // };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/adopt" element={<Listings />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
      </Routes>
    </>
  );
};

export default App;
