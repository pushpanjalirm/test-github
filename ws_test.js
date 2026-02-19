import ws from 'k6/ws';
import { check } from 'k6';
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';

export let options = {
  vus: 3,
  duration: '10s',
};

// Array of different user IDs for each VU
const userIds = [
  '045dd378bc2e154da795',
  '055ee489cd3f265eb806',
  '065ff59ade4g376fc917',
  '075gg60abef5487gd028',
  '085hh71bcfg6598he139',
];

export default function () {
  // Get a unique user ID based on VU execution order
  const vuIndex = __VU % userIds.length;
  const userId = userIds[vuIndex];
  
  const url = `wss://qa-rws.isaac.ds.wellnessliving.com/web_chat/68775d3f997e712c0b1e4624/${userId}`;

  ws.connect(url, {}, function (socket) {
    socket.on('open', function () {
      console.log(`VU ${__VU}: WebSocket connection opened with user_id: ${userId}`);

      // Send initial message with unique turn_id
      socket.send(JSON.stringify({
        project_id: '68775d3f997e712c0b1e4624',
        user_id: userId,
        session_new: true,
        session_id: null,
        turn_id: uuidv4(),
        source: 'html5',
        type: 'text',
        user_input_last: 'Hi I am Post',
        log_me: true,
      }));
    });

    socket.on('message', function (data) {
      console.log(`VU ${__VU}: Received message (${data.length} bytes)`);

      // Check if response is not empty
      check(data, {
        'response is not empty': (msg) => msg.length > 0,
        'response is valid JSON': (msg) => {
          try {
            JSON.parse(msg);
            return true;
          } catch (e) {
            return false;
          }
        },
      });

      socket.close();
    });

    socket.on('close', function () {
      console.log(`VU ${__VU}: WebSocket connection closed`);
    });

    socket.on('error', function (e) {
      if (e.error() != 'websocket: close sent') {
        console.log(`VU ${__VU}: WebSocket error: ${e.error()}`);
      }
    });
  });
}