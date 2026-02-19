import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '10s',
};

export default function () {
  const url = 'https://www.concertodemos.com/qa-wl/v2/68775d3f997e712c0b1e4624?logs=true';
  
  const params = {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'max-age=0',
    },
  };

  // Use GET instead of POST
  const res = http.get(url, params);

  // Check the response status and content
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 1000ms': (r) => r.timings.duration < 1000,
    'has content': (r) => r.body.length > 0,
  });

  console.log(res.body);
  sleep(1);
}