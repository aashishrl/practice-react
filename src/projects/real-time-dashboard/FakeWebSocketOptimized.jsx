import { useEffect, useState, useCallback, useRef } from 'react';

const FakeWebSocketOptimized = () => {
  // Single source of truth - no separate boolean
  const [status, setStatus] = useState('disconnected');
  const [messages, setMessages] = useState([]);
  
  // Cleanup reliability - refs to prevent race conditions
  const connectTimerRef = useRef(null);
  const messageIntervalRef = useRef(null);
  const reconnectAttemptRef = useRef(0);

  // Error simulation - 30% chance of failure
  const simulateConnectionFailure = useCallback(() => {
    return Math.random() < 0.3;
  }, []);

  // Centralized cleanup
  const cleanup = useCallback(() => {
    if (connectTimerRef.current) {
      clearTimeout(connectTimerRef.current);
      connectTimerRef.current = null;
    }
    if (messageIntervalRef.current) {
      clearInterval(messageIntervalRef.current);
      messageIntervalRef.current = null;
    }
  }, []);

  // Reconnection logic
  const attemptReconnect = useCallback(() => {
    if (reconnectAttemptRef.current >= 3) {
      setStatus('error');
      reconnectAttemptRef.current = 0;
      return;
    }
    
    setStatus('reconnecting');
    reconnectAttemptRef.current++;
    
    const reconnectTimer = setTimeout(() => {
      connect();
    }, 2000);
    
    return () => clearTimeout(reconnectTimer);
  }, []);

  // Connect function
  const connect = useCallback(() => {
    // Prevent duplicate connections
    if (status === 'connecting' || status === 'connected') return;
    
    cleanup();
    setStatus('connecting');
    
    connectTimerRef.current = setTimeout(() => {
      if (simulateConnectionFailure()) {
        setStatus('error');
        attemptReconnect();
        return;
      }
      
      setStatus('connected');
      reconnectAttemptRef.current = 0;
      
      messageIntervalRef.current = setInterval(() => {
        const newMessage = {
          id: Date.now(),
          type: 'text',
          timestamp: Date.now(),
          sender: 'server',
          payload: 'Message ' + Math.floor(Math.random() * 100)
        };
        
        // Cap message history at 50 messages
        setMessages(prev => {
          const updated = [...prev, newMessage];
          return updated.slice(-50);
        });
      }, 1000);
    }, 1000);
  }, [status, cleanup, simulateConnectionFailure, attemptReconnect]);

  // Disconnect function
  const disconnect = useCallback(() => {
    cleanup();
    setStatus('disconnected');
  }, [cleanup]);

  // Simulate unexpected disconnection
  const simulateUnexpectedDisconnect = useCallback(() => {
    if (status === 'connected') {
      cleanup();
      setStatus('disconnected');
      attemptReconnect();
    }
  }, [status, cleanup, attemptReconnect]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  // Button text based on actual status
  const getButtonText = () => {
    switch (status) {
      case 'connecting': return 'Connecting...';
      case 'connected': return 'Disconnect';
      case 'disconnected': return 'Connect';
      case 'reconnecting': return 'Reconnecting...';
      case 'error': return 'Retry';
      default: return 'Connect';
    }
  };

  const isButtonDisabled = status === 'connecting' || status === 'reconnecting';

  const handleButtonClick = () => {
    if (status === 'connected') {
      disconnect();
    } else if (status === 'error') {
      reconnectAttemptRef.current = 0;
      connect();
    } else {
      connect();
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'connected': return 'text-green-600';
      case 'connecting':
      case 'reconnecting': return 'text-yellow-600';
      case 'error': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section>
      <p className={getStatusColor()}>
        Status: {status.charAt(0).toUpperCase() + status.slice(1)}
      </p>
      
      <button 
        onClick={handleButtonClick}
        disabled={isButtonDisabled}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {getButtonText()}
      </button>
      
      {status === 'connected' && (
        <button 
          onClick={simulateUnexpectedDisconnect}
          className="ml-2 px-4 py-2 bg-red-500 text-white rounded text-sm"
        >
          Simulate Unexpected Disconnect
        </button>
      )}
      
      <div className="mt-4">
        {messages.length === 0 ? (
          <p className="text-sm text-gray-400">No messages</p>
        ) : (
          <ul className="space-y-1">
            {messages.map(msg => (
              <li key={msg.id} className="text-sm">
                <span className="text-gray-400">
                  [{new Date(msg.timestamp).toLocaleTimeString()}]
                </span>
                {' '}
                <span className={
                  msg.type === 'error' ? 'text-red-600' : 
                  msg.type === 'system' ? 'text-yellow-600' : 
                  'text-gray-800'
                }>
                  {msg.payload}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {messages.length > 0 && (
        <p className="text-xs text-gray-400 mt-2">
          Showing last {messages.length} of 50 max messages
        </p>
      )}
    </section>
  );
};

export default FakeWebSocketOptimized;