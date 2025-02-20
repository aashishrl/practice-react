import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services';
import Contact from './pages/contact'
import About from './pages/about';
import NotFound from './pages/notFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<NotFound />} />
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;