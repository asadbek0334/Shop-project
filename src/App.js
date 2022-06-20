import React  from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import './App.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
     <ToastContainer />
     <Header />
     <Shop />
     <Footer />
    </div>
  );
}

export default App;
