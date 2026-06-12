import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App'
import TestApp from './TestApp'
import ProjectApp from './ProjectApp';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <TestApp />
      {/* <ProjectApp/> */}
    </BrowserRouter>
  </React.StrictMode>
)