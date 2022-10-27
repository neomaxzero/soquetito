import { WebSocketServer } from "ws";

const wss = new WebSocketServer({
  port: 3099,
});

const state = {
  users: {},
  buttons: {},
};

const mess = (message) => JSON.stringify(message);

wss.on("connection", function connection(ws) {
  state.users[ws] = { id: "0" };

  // Message from the client
  ws.on("message", function message(data) {
    console.log(data);
    const message = JSON.parse(data);

    if (message.type === "ASSIGN_USER_DATA") {
      // HERE si
    }
  });

  // HERE you can mock some message to the client
  ws.send(
    mess({
      type: "INITIAL_STATE",
      users: [
        {
          id: "3",
          avatarUrl:
            "data:image/png;base64,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",
          firstName: "Mimi",
          buttonBeingPressed: false,
          completed: false,
          color: "1",
        },
        {
          id: "4",
          avatarUrl:
            "data:image/png;base64,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",
          firstName: "Lulu",
          buttonBeingPressed: true,
          completed: false,
          color: "2",
        },
        {
          id: "5",
          avatarUrl:
            "data:image/png;base64,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",
          firstName: "Mumu",
          buttonBeingPressed: true,
          completed: true,
          color: "3",
        },
      ],
    })
  );

  setTimeout(() => {
    setInterval(() => ws.send(
      mess({
        type: "FEATURE_FLAG_ENABLED",
      })
    ),1000);
  }, 5000);
});

console.log("Listening on port 3099");
