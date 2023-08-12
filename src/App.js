import React from 'react';
// import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about'
import Contact from './components/contact'
import Gallery from './components/gallery'


const App=()=> {
  return (
    <div className="App">
      <Navbar/>
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path="/gallery" element={<Gallery/>}/>
  
          </Routes>
          </BrowserRouter>
   
    </div>
  );
}

export default App;
