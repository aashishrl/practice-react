import { useState } from "react";

const fakeSocket = {
  onopen: null,
  connect() {
    setTimeout(() => {
      if (this.onopen) this.onopen();
    }, 2000);
  },
};

const WebSocket = () => {
  const [status, setStatus] = useState("Not Connected");

  const handleConnect = () => {
    setStatus("Connecting...");

    fakeSocket.onopen = () => {
      setStatus("Connected");
    };

    fakeSocket.connect();
  };

  return (
    <section className="p-20">
      <h1 className="text-3xl font-semibold text-green-400">WebSocket</h1>

      <div style={{ padding: "20px" }}>
        <h2>Status: {status}</h2>

        <button onClick={handleConnect}>Connect</button>
      </div>
    </section>
  );
};

export default WebSocket;
