const WebSocketPractice = () => {
    
    const socket = new WebSocket("wss://ws.coincap.io/prices?assets=bitcoin,ethereum")

    console.log(socket)
    
    return (
        <>
            <p>Web Socket Practice</p>        
        </>
    )
}

export default WebSocketPractice;