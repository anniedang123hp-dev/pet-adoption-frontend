import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Listings from './components/Listings/Listings';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Enquiry from './components/Enquiry/Enquiry';
import CreateListing from './components/CreateListing/CreateListing';

// Import types
// import type { Device } from './types/types';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/adopt" element={<Listings />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/enquiry/:id" element={<Enquiry />}></Route>
        <Route path="/new" element={<CreateListing />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
