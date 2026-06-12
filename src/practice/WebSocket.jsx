import React, { useState, useEffect } from 'react';

function LiveCryptoDashboard() {
  const [prices, setPrices] = useState({ bitcoin: 'Loading...' });
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Connect to CoinCap WebSocket
    const socket = new WebSocket(
      "wss://ws.coincap.io/prices?assets=bitcoin,ethereum"
    );

    socket.onopen = () => {
      console.log("WebSocket Connected!");
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrices(prev => ({ ...prev, ...data }));
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
      setIsConnected(false);
    };

    socket.onclose = () => {
      console.log("WebSocket Disconnected");
      setIsConnected(false);
    };

    // Cleanup on component unmount
    return () => socket.close();
  }, []); // Empty array = runs once when component loads

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📊 Live Crypto Dashboard</h1>
      <div style={{ 
        padding: '10px', 
        backgroundColor: isConnected ? '#d4edda' : '#f8d7da',
        borderRadius: '5px',
        marginBottom: '20px'
      }}>
        Status: {isConnected ? '✅ Connected' : '❌ Disconnected'}
      </div>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <Card title="Bitcoin" price={prices.bitcoin} symbol="₿" />
        <Card title="Ethereum" price={prices.ethereum} symbol="Ξ" />
      </div>
    </div>
  );
}

// Reusable component for each crypto
function Card({ title, price, symbol }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      minWidth: '200px',
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2>{title}</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        {symbol} {typeof price === 'number' ? `$${price.toLocaleString()}` : price}
      </p>
    </div>
  );
}

export default LiveCryptoDashboard;