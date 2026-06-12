import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import heroImg from './assets/3d-elements-laptop-screen.jpeg'; // ✅ Adjust path if needed
import UseEffect from './course/week3/UseEffect';
import IPractice2 from './practice/useEffect/UseEffect';
import LiveCryptoDashboard from './practice/WebSocket';
import WebSocketPractice from './practice/WebSocketPractice';
import UseRef from './practice/UseRef';
import UseMemo from './practice/UseMemo';
import Revise from './practice/revise/Revise';

const TestApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = heroImg;
    img.onload = () => {
      // console.log('Preloaded hero image');
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };
  }, []);

  return (
    <>
      {/* {loading ? (
        <LoadingScreen />
      ) : (
      )} */}
        <Routes>        
          {/* <Route path="/" element={<UseMemo />} />
          <Route path="/" element={<UseRef />} /> */}
          <Route path="/" element={<Revise/>} />
          {/* <Route path="/" element={<LiveCryptoDashboard />} /> */}
          <Route path="/websocket-practice" element={<WebSocketPractice />} />
        </Routes>
    </>
  );
};

export default TestApp;
