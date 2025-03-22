import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 })

//event handler 
wss.on("connection", function(socket)  {
console.log("Client connected")
    // socket.send("Hello, welcome to the server")
    // setInterval(() => {
         
    //     socket.send("solana price  : " + Math.random())
    // }, 1000);
    // // sockeet level pe not on server
    // socket.on("message", function(event) {
    //     console.log("Received: " + event.toString())
    // })
 

    socket.on("message", (e)=>{
        if(e.toString() === "ping"){
            
            socket.send("pong")
        }
    })
})
 

'/ws://localhost:8080' 