import ws from 'k6/ws';
import { check } from 'k6';
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';

export let options = {
  vus: 5,
  duration: '10s',
};

export default function () {
  const url = 'wss://qa-rws.isaac.ds.wellnessliving.com/web_chat/68775d3f997e712c0b1e4624/045dd378bc2e154da795';

  ws.connect(url, {}, function (socket) {
    socket.on('open', function () {
      console.log('WebSocket connection opened');

      // Send initial message with unique turn_id
      socket.send(JSON.stringify({
        project_id: '68775d3f997e712c0b1e4624',
        user_id: '045dd378bc2e154da795',
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
      console.log('Received message:', data);

      // Check if response contains expected welcome message
      check(data, {
        'contains welcome message': (msg) => msg.includes('Welcome to Green River Dental'),
      });

      socket.close();
    });

    socket.on('close', function () {
      console.log('WebSocket connection closed');
    });

    socket.on('error', function (e) {
      if (e.error() != 'websocket: close sent') {
        console.log('WebSocket error:', e.error());
      }
    });
  });
}