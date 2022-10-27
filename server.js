import { WebSocketServer } from "ws";

const wss = new WebSocketServer({
  port: 3099,
});

const state = {
  users: {},
  buttons: {},
};

const mess = message => JSON.stringify(message);

wss.on("connection", function connection(ws) {
  state.users[ws] = { id: '0' }; 

  // Message from the client 
  ws.on("message", function message(data) {
    console.log(data);
    const message = JSON.parse(data);
    
    if (message.type === 'ASSIGN_USER_DATA') {
     // HERE si 
    }
  });


  // HERE you can mock some message to the client
  setInterval(() => {
    ws.send(mess({ type: 'PONG'}));
  }, 5000);

  ws.send(mess({ type: "INITIAL_STATE", users: [] }));
});

console.log("Listening on port 3099");
